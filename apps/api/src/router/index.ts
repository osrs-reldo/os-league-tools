import { authRouter } from '@api/router/auth';
import { feedbackRouter } from '@api/router/feedback';
import { router } from '@api/trpc';
import { helloRouter } from '@api/router/hello';

export const appRouter = router({
  auth: authRouter,
  feedback: feedbackRouter,
  hello: helloRouter,
});

export type AppRouter = typeof appRouter;
