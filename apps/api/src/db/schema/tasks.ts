import { integer, jsonb, pgTable, text, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

import { taskTierEnum } from '@api/db/schema/enums';

export const tasks = pgTable(
  'tasks',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    leagueCode: text('league_code').notNull(),
    externalTaskId: text('external_task_id').notNull(),
    name: text('name').notNull(),
    tier: taskTierEnum('tier').notNull(),
    points: integer('points').notNull(),
    metadata: jsonb('metadata').notNull().default({}),
  },
  (table) => ({
    leagueExternalUnique: uniqueIndex('tasks_league_external_unique').on(table.leagueCode, table.externalTaskId),
  })
);
