import crypto from 'node:crypto';

import { and, eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';

import { db } from '@api/db/client';
import { apiKeys, users, type User } from '@api/db/schema';
import { env } from '@api/env';

type JwtPayload = {
  sub?: string;
  email?: string;
  name?: string;
};

export function hashApiKey(rawKey: string): string {
  return crypto.createHash('sha256').update(rawKey).digest('hex');
}

export function generateApiKey(): string {
  return `reldo_${crypto.randomBytes(24).toString('hex')}`;
}

export async function resolveUserFromBearer(authHeader?: string): Promise<User | null> {
  if (!authHeader?.startsWith('Bearer ') || !env.JWT_SECRET) {
    return null;
  }

  const token = authHeader.slice('Bearer '.length).trim();
  const payload = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
  if (!payload.sub) {
    return null;
  }

  const existing = await db.query.users.findFirst({
    where: eq(users.authProviderUserId, payload.sub),
  });
  if (existing) {
    return existing;
  }

  const [created] = await db
    .insert(users)
    .values({
      authProvider: env.AUTH_PROVIDER,
      authProviderUserId: payload.sub,
      email: payload.email ?? `${payload.sub}@unknown.local`,
      displayName: payload.name,
    })
    .returning();

  return created ?? null;
}

export async function resolveUserFromApiKey(rawKey?: string): Promise<{ user: User; scopes: string[] } | null> {
  if (!rawKey) {
    return null;
  }

  const keyHash = hashApiKey(rawKey);
  const keyRow = await db.query.apiKeys.findFirst({
    where: and(eq(apiKeys.keyHash, keyHash), eq(apiKeys.status, 'active')),
  });
  if (!keyRow) {
    return null;
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, keyRow.userId),
  });
  if (!user) {
    return null;
  }

  return { user, scopes: keyRow.scopes };
}

export async function createApiKeyForUser(params: { userId: string; label: string; scopes: string[]; expiresAt?: Date | null }) {
  const plaintext = generateApiKey();
  const keyHash = hashApiKey(plaintext);

  const [created] = await db
    .insert(apiKeys)
    .values({
      userId: params.userId,
      label: params.label,
      keyHash,
      scopes: params.scopes,
      expiresAt: params.expiresAt ?? null,
    })
    .returning();

  return {
    plaintextKey: plaintext,
    record: created,
  };
}
