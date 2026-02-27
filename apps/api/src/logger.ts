import pino from 'pino';
import pinoHttp from 'pino-http';
import crypto from 'node:crypto';

import { env } from '@api/env';

export const logger = pino({
  level: env.NODE_ENV === 'production' ? 'info' : 'debug',
});

export const httpLogger = pinoHttp({
  logger,
  genReqId: (req, res) => {
    const incoming = req.headers['x-request-id'];
    if (typeof incoming === 'string' && incoming.length > 0) {
      return incoming;
    }
    const requestId = crypto.randomUUID();
    res.setHeader('x-request-id', requestId);
    return requestId;
  },
});
