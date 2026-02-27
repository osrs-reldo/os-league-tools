import { pgTable, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

import { leagueRuns } from '@api/db/schema/league-runs';
import { taskSourceEnum, taskStatusEnum } from '@api/db/schema/enums';
import { tasks } from '@api/db/schema/tasks';

export const taskProgress = pgTable(
  'task_progress',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    leagueRunId: uuid('league_run_id')
      .notNull()
      .references(() => leagueRuns.id, { onDelete: 'cascade' }),
    taskId: uuid('task_id')
      .notNull()
      .references(() => tasks.id, { onDelete: 'cascade' }),
    status: taskStatusEnum('status').default('locked').notNull(),
    completedAt: timestamp('completed_at', { withTimezone: true }),
    source: taskSourceEnum('source').default('manual').notNull(),
  },
  (table) => ({
    runTaskUnique: uniqueIndex('task_progress_run_task_unique').on(table.leagueRunId, table.taskId),
  })
);
