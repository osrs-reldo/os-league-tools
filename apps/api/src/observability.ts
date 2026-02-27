import * as Sentry from '@sentry/node';
import { trace } from '@opentelemetry/api';
import type { ErrorRequestHandler, Express } from 'express';

import { env } from '@api/env';
import { logger } from '@api/logger';

let initialized = false;

export function initObservability() {
  if (initialized) {
    return;
  }

  if (env.SENTRY_DSN) {
    Sentry.init({
      dsn: env.SENTRY_DSN,
      tracesSampleRate: env.NODE_ENV === 'production' ? 0.2 : 1.0,
      environment: env.NODE_ENV,
    });
    logger.info('Sentry initialized');
  } else {
    logger.info('Sentry DSN not configured; skipping Sentry init');
  }

  trace.getTracer('reldo-api');
  initialized = true;
}

export function attachObservabilityMiddleware(app: Express) {
  if (env.SENTRY_DSN) {
    app.use(Sentry.expressErrorHandler() as ErrorRequestHandler);
  }
}

export { Sentry };
