import { and, desc, eq } from 'drizzle-orm';
import { z } from 'zod';

import { createApiKeyForUser } from '@api/auth';
import { db } from '@api/db/client';
import { apiKeys } from '@api/db/schema';
import { authedProcedure, router } from '@api/trpc';

const createApiKeyInput = z.object({
  label: z.string().min(1),
  scopes: z.array(z.string()).default(['plugin:sync']),
  expiresAt: z.coerce.date().optional(),
});

export const authRouter = router({
  getSession: authedProcedure.query(({ ctx }) => ({
    user: {
      id: ctx.user.id,
      email: ctx.user.email,
      displayName: ctx.user.displayName,
    },
    authType: ctx.authType,
    scopes: ctx.scopes,
  })),

  listApiKeys: authedProcedure.query(async ({ ctx }) =>
    db
      .select({
        id: apiKeys.id,
        label: apiKeys.label,
        scopes: apiKeys.scopes,
        status: apiKeys.status,
        createdAt: apiKeys.createdAt,
        updatedAt: apiKeys.updatedAt,
        expiresAt: apiKeys.expiresAt,
        lastUsedAt: apiKeys.lastUsedAt,
      })
      .from(apiKeys)
      .where(eq(apiKeys.userId, ctx.user.id))
      .orderBy(desc(apiKeys.createdAt))
  ),

  createApiKey: authedProcedure.input(createApiKeyInput).mutation(async ({ ctx, input }) => {
    const created = await createApiKeyForUser({
      userId: ctx.user.id,
      label: input.label,
      scopes: input.scopes,
      expiresAt: input.expiresAt ?? null,
    });

    return {
      apiKey: created.plaintextKey,
      meta: {
        id: created.record.id,
        label: created.record.label,
        scopes: created.record.scopes,
        status: created.record.status,
        createdAt: created.record.createdAt,
        expiresAt: created.record.expiresAt,
      },
    };
  }),

  revokeApiKey: authedProcedure
    .input(
      z.object({
        keyId: z.string().uuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const [updated] = await db
        .update(apiKeys)
        .set({
          status: 'revoked',
          updatedAt: new Date(),
        })
        .where(and(eq(apiKeys.id, input.keyId), eq(apiKeys.userId, ctx.user.id)))
        .returning({
          id: apiKeys.id,
          status: apiKeys.status,
          updatedAt: apiKeys.updatedAt,
        });

      return {
        success: Boolean(updated),
        key: updated ?? null,
      };
    }),
});
