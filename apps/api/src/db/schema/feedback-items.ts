import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { feedbackTypeEnum } from '@api/db/schema/enums';
import { users } from '@api/db/schema/users';

export const feedbackItems = pgTable('feedback_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
  type: feedbackTypeEnum('type').notNull(),
  title: text('title').notNull(),
  body: text('body').notNull(),
  githubIssueNumber: integer('github_issue_number'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});
