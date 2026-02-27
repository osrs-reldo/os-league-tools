import { authRouter } from '@api/router/auth';
import { router } from '@api/trpc';
import { helloRouter } from '@api/router/hello';

export const appRouter = router({
  auth: authRouter,
  hello: helloRouter,
});

export type AppRouter = typeof appRouter;
