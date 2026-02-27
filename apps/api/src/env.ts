import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  CORS_ORIGIN: z.string().default('*'),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  AUTH_PROVIDER: z.string().default('auth0'),
  JWT_SECRET: z.string().min(1, 'JWT_SECRET is required'),
  GITHUB_REPO: z.string().optional(),
  GITHUB_TOKEN: z.string().optional(),
  SENTRY_DSN: z.string().optional(),
});

export const env = envSchema.parse(process.env);
