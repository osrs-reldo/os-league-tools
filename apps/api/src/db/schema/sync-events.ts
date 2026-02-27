import { index, jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

import { clientTypeEnum, syncEventKindEnum, syncEventOperationEnum, syncStatusEnum } from '@api/db/schema/enums';
import { leagueRuns } from '@api/db/schema/league-runs';
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
    leagueRunId: uuid('league_run_id').references(() => leagueRuns.id, { onDelete: 'set null' }),
    clientType: clientTypeEnum('client_type').notNull(),
    eventKind: syncEventKindEnum('event_kind').notNull(),
    operation: syncEventOperationEnum('operation'),
    targetExternalId: text('target_external_id'),
    targetGroup: text('target_group'),
    idempotencyKey: text('idempotency_key').notNull(),
    clientVersion: text('client_version'),
    payload: jsonb('payload').default({}),
    status: syncStatusEnum('status').default('accepted').notNull(),
    error: text('error'),
    receivedAt: timestamp('received_at', { withTimezone: true }).defaultNow().notNull(),
    processedAt: timestamp('processed_at', { withTimezone: true }),
  },
  (table) => [
    index('sync_events_user_id_idx').on(table.userId),
    index('sync_events_idempotency_key_idx').on(table.idempotencyKey),
    uniqueIndex('sync_events_user_idempotency_unique').on(table.userId, table.idempotencyKey),
  ]
);
