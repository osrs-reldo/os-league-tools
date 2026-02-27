import { boolean, pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core';

import { gameModeEnum } from '@api/db/schema/enums';
import { users } from '@api/db/schema/users';

export const profiles = pgTable(
  'profiles',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    gameMode: gameModeEnum('game_mode').notNull(),
    rsn: text('rsn').notNull(),
    isPrimary: boolean('is_primary').default(false).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    userModeRsnUnique: uniqueIndex('profiles_user_mode_rsn_unique').on(table.userId, table.gameMode, table.rsn),
  })
);
