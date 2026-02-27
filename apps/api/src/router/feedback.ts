import { z } from 'zod';

import { db } from '@api/db/client';
import { feedbackItems } from '@api/db/schema';
import { createGitHubIssue } from '@api/integrations/github';
import { logger } from '@api/logger';
import { publicProcedure, router } from '@api/trpc';

const feedbackInput = z.object({
  type: z.enum(['bug', 'suggestion', 'feedback']),
  title: z.string().min(1).max(200),
  body: z.string().min(1).max(10_000),
});

function feedbackLabel(type: z.infer<typeof feedbackInput>['type']): string {
  if (type === 'bug') {
    return 'bug';
  }
  if (type === 'suggestion') {
    return 'enhancement';
  }
  return 'feedback';
}

export const feedbackRouter = router({
  submit: publicProcedure.input(feedbackInput).mutation(async ({ ctx, input }) => {
    let issue: { number: number; url: string } | null = null;

    try {
      issue = await createGitHubIssue({
        title: `[${input.type.toUpperCase()}] ${input.title}`,
        body: input.body,
        labels: ['user-feedback', feedbackLabel(input.type)],
      });
    } catch (error) {
      logger.error({ error }, 'Failed to create GitHub issue for feedback');
    }

    try {
      await db.insert(feedbackItems).values({
        userId: ctx.user?.id ?? null,
        type: input.type,
        title: input.title,
        body: input.body,
        githubIssueNumber: issue?.number,
      });
    } catch (error) {
      logger.error({ error }, 'Failed to persist feedback item');
    }

    return {
      success: true,
      issue,
    };
  }),
});
