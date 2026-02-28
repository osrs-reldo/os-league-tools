import { sql } from 'drizzle-orm';

import { db } from '@api/db/client';
import { tasks, taskTypes } from '@api/db/schema';
import type { NormalizedTaskDefinition, TaskTypeDefinition } from '@api/ingest/task-json-store/types';

export async function upsertTaskTypes(definitions: TaskTypeDefinition[]) {
  if (definitions.length === 0) {
    return 0;
  }

  await db
    .insert(taskTypes)
    .values(
      definitions.map((definition) => ({
        taskJsonName: definition.taskJsonName,
        name: definition.name,
        description: definition.description ?? null,
        isEnabled: definition.isEnabled ?? true,
        filters: definition.filters ?? [],
        intParamMap: definition.intParamMap ?? {},
        stringParamMap: definition.stringParamMap ?? {},
        taskPointTiers: definition.taskPointTiers ?? [],
      }))
    )
    .onConflictDoUpdate({
      target: taskTypes.taskJsonName,
      set: {
        name: sql`excluded.name`,
        description: sql`excluded.description`,
        isEnabled: sql`excluded.is_enabled`,
        filters: sql`excluded.filters`,
        intParamMap: sql`excluded.int_param_map`,
        stringParamMap: sql`excluded.string_param_map`,
        taskPointTiers: sql`excluded.task_point_tiers`,
        updatedAt: new Date(),
      },
    });

  return definitions.length;
}

export async function upsertTasks(definitions: NormalizedTaskDefinition[]) {
  if (definitions.length === 0) {
    return 0;
  }

  await db
    .insert(tasks)
    .values(
      definitions.map((definition) => ({
        taskType: definition.taskType,
        externalTaskId: String(definition.structId),
        sortId: definition.sortId,
        completionPercent: definition.completionPercent,
        skillRequirements: definition.skillRequirements,
        wikiNotes: definition.wikiNotes,
        metadata: definition.raw.metadata ?? {},
        raw: definition.raw,
      }))
    )
    .onConflictDoUpdate({
      target: [tasks.taskType, tasks.externalTaskId],
      set: {
        sortId: sql`excluded.sort_id`,
        completionPercent: sql`excluded.completion_percent`,
        skillRequirements: sql`excluded.skill_requirements`,
        wikiNotes: sql`excluded.wiki_notes`,
        metadata: sql`excluded.metadata`,
        raw: sql`excluded.raw`,
      },
    });

  return definitions.length;
}
