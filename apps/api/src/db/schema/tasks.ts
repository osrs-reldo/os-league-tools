import { doublePrecision, integer, jsonb, pgTable, text, uniqueIndex, uuid } from 'drizzle-orm/pg-core';
import { taskTypes } from '@api/db/schema/task-types';

export const tasks = pgTable(
  'tasks',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    taskType: text('task_type')
      .notNull()
      .references(() => taskTypes.taskJsonName, { onDelete: 'cascade' }),
    externalTaskId: text('external_task_id').notNull(),
    sortId: integer('sort_id').notNull(),
    name: text('name'),
    description: text('description'),
    tier: text('tier'),
    points: integer('points'),
    completionPercent: doublePrecision('completion_percent'),
    skillRequirements: jsonb('skill_requirements').default([]).notNull(),
    wikiNotes: text('wiki_notes'),
    metadata: jsonb('metadata').notNull().default({}),
    raw: jsonb('raw').notNull().default({}),
  },
  (table) => [uniqueIndex('tasks_type_external_unique').on(table.taskType, table.externalTaskId)]
);
