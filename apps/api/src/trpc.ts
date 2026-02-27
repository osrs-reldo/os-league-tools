import { TRPCError, initTRPC, type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import type { Request, Response } from 'express';
import superjson from 'superjson';

import { resolveUserFromApiKey, resolveUserFromBearer } from '@api/auth';
import type { AppRouter } from '@api/router';
import type { User } from '@api/db/schema';

type Context = {
  req: Request;
  res: Response;
  user: User | null;
  authType: 'user' | 'apiKey' | null;
  scopes: string[];
};

const trpc = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const publicProcedure = trpc.procedure;
export const authedProcedure = trpc.procedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Authentication required.' });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});
export const apiKeyProcedure = trpc.procedure.use(({ ctx, next }) => {
  if (ctx.authType !== 'apiKey') {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'API key required.' });
  }
  return next();
});
export const router = trpc.router;

export async function createContext(opts: { req: Request; res: Response }): Promise<Context> {
  const bearerUser = await resolveUserFromBearer(opts.req.headers.authorization);
  if (bearerUser) {
    return {
      req: opts.req,
      res: opts.res,
      user: bearerUser,
      authType: 'user',
      scopes: ['user:read', 'user:write'],
    };
  }

  const apiKeyHeader = opts.req.headers['x-api-key'] ?? opts.req.headers['api-key'];
  const apiKeyValue = Array.isArray(apiKeyHeader) ? apiKeyHeader[0] : apiKeyHeader;
  const apiKeyAuth = await resolveUserFromApiKey(apiKeyValue);
  if (apiKeyAuth) {
    return {
      req: opts.req,
      res: opts.res,
      user: apiKeyAuth.user,
      authType: 'apiKey',
      scopes: apiKeyAuth.scopes,
    };
  }

  return {
    req: opts.req,
    res: opts.res,
    user: null,
    authType: null,
    scopes: [],
  };
}

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
