import { authRouter } from '@api/router/auth';
import { feedbackRouter } from '@api/router/feedback';
import { hiscoresRouter } from '@api/router/hiscores';
import { router } from '@api/trpc';

export const appRouter = router({
  auth: authRouter,
  feedback: feedbackRouter,
  hiscores: hiscoresRouter,
});

export type AppRouter = typeof appRouter;
