import { boolean, jsonb, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const taskTypes = pgTable('task_types', {
  taskJsonName: text('task_json_name').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  isEnabled: boolean('is_enabled').default(true).notNull(),
  filters: jsonb('filters').default([]).notNull(),
  intParamMap: jsonb('int_param_map').default({}).notNull(),
  stringParamMap: jsonb('string_param_map').default({}).notNull(),
  taskPointTiers: jsonb('task_point_tiers').default([]).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
