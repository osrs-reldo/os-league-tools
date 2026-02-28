import { authRouter } from '@api/router/auth';
import { feedbackRouter } from '@api/router/feedback';
import { hiscoresRouter } from '@api/router/hiscores';
import { profilesRouter } from '@api/router/profiles';
import { progressionRouter } from '@api/router/progression';
import { router } from '@api/trpc';

export const appRouter = router({
  auth: authRouter,
  feedback: feedbackRouter,
  hiscores: hiscoresRouter,
  profiles: profilesRouter,
  progression: progressionRouter,
});

export type AppRouter = typeof appRouter;
