import { pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    authProvider: text('auth_provider').notNull(),
    authProviderUserId: text('auth_provider_user_id').notNull(),
    email: text('email').notNull(),
    displayName: text('display_name'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex('users_auth_provider_user_id_unique').on(table.authProviderUserId),
    uniqueIndex('users_email_unique').on(table.email),
  ]
);

export type User = typeof users.$inferSelect;
