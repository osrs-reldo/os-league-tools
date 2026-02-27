import { createExpressMiddleware } from '@trpc/server/adapters/express';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';

import { env } from '@api/env';
import { httpLogger, logger } from '@api/logger';
import { attachObservabilityMiddleware, initObservability } from '@api/observability';
import { appRouter } from '@api/router';
import { createContext } from '@api/trpc';

async function main() {
  initObservability();

  const app = express();

  app.use(httpLogger);
  app.use(cors({ origin: env.CORS_ORIGIN === '*' ? true : env.CORS_ORIGIN }));

  app.use(
    '/trpc',
    createExpressMiddleware({
      router: appRouter,
      createContext,
      onError: ({ path, error, ctx }) => {
        logger.error(
          {
            path: path ?? '<no-path>',
            requestId: ctx?.req.id,
            error: error.message,
          },
          'tRPC request failed'
        );
      },
    })
  );

  app.get('/', (_req, res) => {
    res.send('Server is running!');
  });

  app.get('/health', (_req, res) => {
    res.status(200).json({ ok: true });
  });

  attachObservabilityMiddleware(app);

  app.listen(env.PORT, () => {
    logger.info({ port: env.PORT }, 'API server listening');
  });
}

void main();
