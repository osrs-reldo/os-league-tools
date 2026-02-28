import { and, asc, eq } from 'drizzle-orm';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { db } from '@api/db/client';
import { leagueRuns, profiles, taskProgress, taskProgressEvents, tasks } from '@api/db/schema';
import { authedProcedure, router } from '@api/trpc';

const getTaskCatalogInput = z.object({
  taskType: z.string().min(1),
});

const getRunSnapshotInput = z.object({
  profileId: z.string().uuid(),
  leagueCode: z.string().min(1),
  taskType: z.string().min(1),
});

const upsertTaskProgressInput = z.object({
  profileId: z.string().uuid(),
  leagueCode: z.string().min(1),
  taskType: z.string().min(1),
  externalTaskId: z.string().min(1),
  status: z.enum(['locked', 'available', 'complete']),
  source: z.enum(['manual', 'import', 'plugin']).default('manual'),
  idempotencyKey: z.string().min(1).max(256).optional(),
});

type SkillRequirement = { skill: string; level: number };

function parseSkillRequirements(value: unknown): SkillRequirement[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((entry) => {
      if (!entry || typeof entry !== 'object') {
        return null;
      }

      const skill = 'skill' in entry ? entry.skill : null;
      const level = 'level' in entry ? entry.level : null;
      if (typeof skill !== 'string' || typeof level !== 'number') {
        return null;
      }

      return { skill, level };
    })
    .filter((entry): entry is SkillRequirement => entry !== null);
}

function parseQuestRequirements(value: unknown): number[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((entry): entry is number => typeof entry === 'number');
}

export const progressionRouter = router({
  getTaskCatalog: authedProcedure.input(getTaskCatalogInput).query(async ({ input }) => {
    const rows = await db
      .select({
        id: tasks.id,
        taskType: tasks.taskType,
        externalTaskId: tasks.externalTaskId,
        sortId: tasks.sortId,
        name: tasks.name,
        description: tasks.description,
        tier: tasks.tier,
        points: tasks.points,
        completionPercent: tasks.completionPercent,
        skillRequirements: tasks.skillRequirements,
        questRequirements: tasks.questRequirements,
        wikiNotes: tasks.wikiNotes,
      })
      .from(tasks)
      .where(eq(tasks.taskType, input.taskType))
      .orderBy(asc(tasks.sortId), asc(tasks.externalTaskId));

    return rows.map((row) => ({
      ...row,
      skillRequirements: parseSkillRequirements(row.skillRequirements),
      questRequirements: parseQuestRequirements(row.questRequirements),
    }));
  }),

  getRunSnapshot: authedProcedure.input(getRunSnapshotInput).query(async ({ ctx, input }) => {
    const [profile] = await db
      .select({
        id: profiles.id,
        userId: profiles.userId,
        gameMode: profiles.gameMode,
        rsn: profiles.rsn,
      })
      .from(profiles)
      .where(and(eq(profiles.id, input.profileId), eq(profiles.userId, ctx.user.id)))
      .limit(1);

    if (!profile) {
      return {
        profile: null,
        leagueRun: null,
        summary: {
          totalTasks: 0,
          completeTasks: 0,
          availableTasks: 0,
          lockedTasks: 0,
        },
        tasks: [],
      };
    }

    const [leagueRun] = await db
      .select({
        id: leagueRuns.id,
        leagueCode: leagueRuns.leagueCode,
        startedAt: leagueRuns.startedAt,
        endedAt: leagueRuns.endedAt,
      })
      .from(leagueRuns)
      .where(and(eq(leagueRuns.profileId, input.profileId), eq(leagueRuns.leagueCode, input.leagueCode)))
      .limit(1);

    const catalogRows = await db
      .select({
        taskId: tasks.id,
        taskType: tasks.taskType,
        externalTaskId: tasks.externalTaskId,
        sortId: tasks.sortId,
        name: tasks.name,
        description: tasks.description,
        tier: tasks.tier,
        points: tasks.points,
        completionPercent: tasks.completionPercent,
        skillRequirements: tasks.skillRequirements,
        questRequirements: tasks.questRequirements,
        wikiNotes: tasks.wikiNotes,
      })
      .from(tasks)
      .where(eq(tasks.taskType, input.taskType))
      .orderBy(asc(tasks.sortId), asc(tasks.externalTaskId));

    const progressRows = leagueRun
      ? await db
          .select({
            taskId: taskProgress.taskId,
            status: taskProgress.status,
            completedAt: taskProgress.completedAt,
            source: taskProgress.source,
          })
          .from(taskProgress)
          .where(eq(taskProgress.leagueRunId, leagueRun.id))
      : [];

    const progressByTaskId = new Map(progressRows.map((row) => [row.taskId, row]));

    const taskRows = catalogRows.map((row) => {
      const progress = progressByTaskId.get(row.taskId);
      return {
        id: row.taskId,
        taskType: row.taskType,
        externalTaskId: row.externalTaskId,
        sortId: row.sortId,
        name: row.name,
        description: row.description,
        tier: row.tier,
        points: row.points,
        completionPercent: row.completionPercent,
        skillRequirements: parseSkillRequirements(row.skillRequirements),
        questRequirements: parseQuestRequirements(row.questRequirements),
        wikiNotes: row.wikiNotes,
        status: progress?.status ?? 'locked',
        completedAt: progress?.completedAt ?? null,
        source: progress?.source ?? null,
      };
    });

    return {
      profile: {
        id: profile.id,
        gameMode: profile.gameMode,
        rsn: profile.rsn,
      },
      leagueRun: leagueRun ?? null,
      summary: {
        totalTasks: taskRows.length,
        completeTasks: taskRows.filter((task) => task.status === 'complete').length,
        availableTasks: taskRows.filter((task) => task.status === 'available').length,
        lockedTasks: taskRows.filter((task) => task.status === 'locked').length,
      },
      tasks: taskRows,
    };
  }),

  upsertTaskProgress: authedProcedure.input(upsertTaskProgressInput).mutation(async ({ ctx, input }) => {
    const [profile] = await db
      .select({
        id: profiles.id,
      })
      .from(profiles)
      .where(and(eq(profiles.id, input.profileId), eq(profiles.userId, ctx.user.id)))
      .limit(1);

    if (!profile) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Profile not found.' });
    }

    const [task] = await db
      .select({
        id: tasks.id,
      })
      .from(tasks)
      .where(and(eq(tasks.taskType, input.taskType), eq(tasks.externalTaskId, input.externalTaskId)))
      .limit(1);

    if (!task) {
      throw new TRPCError({ code: 'NOT_FOUND', message: 'Task not found in catalog.' });
    }

    let [leagueRun] = await db
      .select({
        id: leagueRuns.id,
        leagueCode: leagueRuns.leagueCode,
        startedAt: leagueRuns.startedAt,
      })
      .from(leagueRuns)
      .where(and(eq(leagueRuns.profileId, input.profileId), eq(leagueRuns.leagueCode, input.leagueCode)))
      .limit(1);

    if (!leagueRun) {
      [leagueRun] = await db
        .insert(leagueRuns)
        .values({
          profileId: input.profileId,
          leagueCode: input.leagueCode,
          startedAt: new Date(),
        })
        .returning({
          id: leagueRuns.id,
          leagueCode: leagueRuns.leagueCode,
          startedAt: leagueRuns.startedAt,
        });
    }

    const completedAt = input.status === 'complete' ? new Date() : null;

    const [updatedProgress] = await db
      .insert(taskProgress)
      .values({
        leagueRunId: leagueRun.id,
        taskId: task.id,
        status: input.status,
        source: input.source,
        completedAt,
      })
      .onConflictDoUpdate({
        target: [taskProgress.leagueRunId, taskProgress.taskId],
        set: {
          status: input.status,
          source: input.source,
          completedAt,
        },
      })
      .returning({
        id: taskProgress.id,
        status: taskProgress.status,
        source: taskProgress.source,
        completedAt: taskProgress.completedAt,
      });

    if (input.idempotencyKey) {
      await db
        .insert(taskProgressEvents)
        .values({
          taskProgressId: updatedProgress.id,
          status: input.status,
          source: input.source,
          idempotencyKey: input.idempotencyKey,
        })
        .onConflictDoNothing({
          target: taskProgressEvents.idempotencyKey,
        });
    }

    return {
      success: true,
      profileId: input.profileId,
      leagueRunId: leagueRun.id,
      taskId: task.id,
      progress: {
        id: updatedProgress.id,
        status: updatedProgress.status,
        source: updatedProgress.source,
        completedAt: updatedProgress.completedAt,
      },
    };
  }),
});
