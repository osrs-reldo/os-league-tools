import hiscores from 'osrs-json-hiscores';
import type { Gamemode } from 'osrs-json-hiscores';
import { z } from 'zod';

import { publicProcedure, router } from '@api/trpc';

const hiscoresInput = z.object({
  rsn: z.string().min(1),
  mode: z.enum(['main', 'ironman', 'hardcore', 'ultimate', 'seasonal']).default('seasonal'),
});

export const hiscoresRouter = router({
  get: publicProcedure.input(hiscoresInput).query(async ({ input }) => {
    const response = await hiscores.getStatsByGamemode(input.rsn, input.mode as Gamemode);
    return {
      success: true,
      data: response,
    };
  }),
});
