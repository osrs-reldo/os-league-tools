import { pgEnum } from 'drizzle-orm/pg-core';

export const apiKeyStatusEnum = pgEnum('api_key_status', ['active', 'revoked']);
export const gameModeEnum = pgEnum('game_mode', ['leagues', 'main', 'ironman', 'hardcore', 'ultimate']);
export const taskTierEnum = pgEnum('task_tier', ['easy', 'medium', 'hard', 'elite', 'master']);
export const taskStatusEnum = pgEnum('task_status', ['locked', 'available', 'complete']);
export const taskSourceEnum = pgEnum('task_source', ['manual', 'import', 'plugin']);
export const clientTypeEnum = pgEnum('client_type', ['web', 'plugin']);
export const syncStatusEnum = pgEnum('sync_status', ['accepted', 'rejected']);
export const feedbackTypeEnum = pgEnum('feedback_type', ['bug', 'suggestion', 'feedback']);
