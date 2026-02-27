import { index, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { clientTypeEnum, syncStatusEnum } from '@api/db/schema/enums';
import { profiles } from '@api/db/schema/profiles';
import { users } from '@api/db/schema/users';

export const syncEvents = pgTable(
  'sync_events',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    profileId: uuid('profile_id').references(() => profiles.id, { onDelete: 'set null' }),
    clientType: clientTypeEnum('client_type').notNull(),
    eventType: text('event_type').notNull(),
    payload: jsonb('payload').notNull().default({}),
    status: syncStatusEnum('status').default('accepted').notNull(),
    error: text('error'),
    receivedAt: timestamp('received_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index('sync_events_user_id_idx').on(table.userId),
  })
);
