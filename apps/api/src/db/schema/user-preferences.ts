import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { users } from '@api/db/schema/users';

export const userPreferences = pgTable('user_preferences', {
  userId: uuid('user_id')
    .primaryKey()
    .references(() => users.id, { onDelete: 'cascade' }),
  limitContentWidth: boolean('limit_content_width').default(true).notNull(),
  mode: text('mode').default('dark').notNull(),
  theme: text('theme').default('re-dark').notNull(),
  taskColumnPriority: boolean('task_column_priority').default(true).notNull(),
  taskColumnCategory: boolean('task_column_category').default(true).notNull(),
  taskColumnCompletedAt: boolean('task_column_completed_at').default(false).notNull(),
  taskColumnRegions: boolean('task_column_regions').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});
