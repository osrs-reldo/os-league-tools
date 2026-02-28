import { and, desc, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@api/db/client';
import { profiles } from '@api/db/schema';
import { authedProcedure, router } from '@api/trpc';

const listProfilesInput = z
  .object({
    gameMode: z.enum(['leagues', 'main', 'ironman', 'hardcore', 'ultimate']).optional(),
  })
  .optional();

export const profilesRouter = router({
  list: authedProcedure.input(listProfilesInput).query(async ({ ctx, input }) => {
    const whereClause = input?.gameMode
      ? and(eq(profiles.gameMode, input.gameMode), eq(profiles.userId, ctx.user.id))
      : eq(profiles.userId, ctx.user.id);

    return db
      .select({
        id: profiles.id,
        gameMode: profiles.gameMode,
        rsn: profiles.rsn,
        isPrimary: profiles.isPrimary,
        createdAt: profiles.createdAt,
        updatedAt: profiles.updatedAt,
      })
      .from(profiles)
      .where(whereClause)
      .orderBy(desc(profiles.isPrimary), desc(profiles.updatedAt));
  }),
});
