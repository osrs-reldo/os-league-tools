import { index, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { apiKeyStatusEnum } from '@api/db/schema/enums';
import { users } from '@api/db/schema/users';

export const apiKeys = pgTable(
  'api_keys',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    label: text('label').notNull(),
    keyHash: text('key_hash').notNull(),
    scopes: text('scopes').array().notNull(),
    status: apiKeyStatusEnum('status').default('active').notNull(),
    lastUsedAt: timestamp('last_used_at', { withTimezone: true }),
    expiresAt: timestamp('expires_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [index('api_keys_user_id_idx').on(table.userId)]
);
