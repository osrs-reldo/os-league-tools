import { index, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

import { taskSourceEnum, taskStatusEnum } from '@api/db/schema/enums';
import { taskProgress } from '@api/db/schema/task-progress';

export const taskProgressEvents = pgTable(
  'task_progress_events',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    taskProgressId: uuid('task_progress_id')
      .notNull()
      .references(() => taskProgress.id, { onDelete: 'cascade' }),
    status: taskStatusEnum('status').notNull(),
    source: taskSourceEnum('source').default('manual').notNull(),
    idempotencyKey: text('idempotency_key'),
    occurredAt: timestamp('occurred_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    index('task_progress_events_progress_idx').on(table.taskProgressId),
    uniqueIndex('task_progress_events_idempotency_unique').on(table.idempotencyKey),
  ]
);
