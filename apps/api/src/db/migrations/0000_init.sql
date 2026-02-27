CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE "api_key_status" AS ENUM ('active', 'revoked');
CREATE TYPE "game_mode" AS ENUM ('leagues', 'main', 'ironman', 'hardcore', 'ultimate');
CREATE TYPE "task_tier" AS ENUM ('easy', 'medium', 'hard', 'elite', 'master');
CREATE TYPE "task_status" AS ENUM ('locked', 'available', 'complete');
CREATE TYPE "task_source" AS ENUM ('manual', 'import', 'plugin');
CREATE TYPE "client_type" AS ENUM ('web', 'plugin');
CREATE TYPE "sync_status" AS ENUM ('accepted', 'rejected');
CREATE TYPE "feedback_type" AS ENUM ('bug', 'suggestion', 'feedback');

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "auth_provider" text NOT NULL,
  "auth_provider_user_id" text NOT NULL,
  "email" text NOT NULL,
  "display_name" text,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX "users_auth_provider_user_id_unique" ON "users" ("auth_provider_user_id");
CREATE UNIQUE INDEX "users_email_unique" ON "users" ("email");

CREATE TABLE "api_keys" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE cascade,
  "label" text NOT NULL,
  "key_hash" text NOT NULL,
  "scopes" text[] NOT NULL,
  "status" "api_key_status" NOT NULL DEFAULT 'active',
  "last_used_at" timestamptz,
  "expires_at" timestamptz,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX "api_keys_user_id_idx" ON "api_keys" ("user_id");

CREATE TABLE "profiles" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE cascade,
  "game_mode" "game_mode" NOT NULL,
  "rsn" text NOT NULL,
  "is_primary" boolean NOT NULL DEFAULT false,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX "profiles_user_mode_rsn_unique" ON "profiles" ("user_id", "game_mode", "rsn");

CREATE TABLE "league_runs" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "profile_id" uuid NOT NULL REFERENCES "profiles"("id") ON DELETE cascade,
  "league_code" text NOT NULL,
  "started_at" timestamptz,
  "ended_at" timestamptz,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  "updated_at" timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX "league_runs_profile_league_unique" ON "league_runs" ("profile_id", "league_code");

CREATE TABLE "tasks" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "league_code" text NOT NULL,
  "external_task_id" text NOT NULL,
  "name" text NOT NULL,
  "tier" "task_tier" NOT NULL,
  "points" int NOT NULL,
  "metadata" jsonb NOT NULL DEFAULT '{}'::jsonb
);
CREATE UNIQUE INDEX "tasks_league_external_unique" ON "tasks" ("league_code", "external_task_id");

CREATE TABLE "task_progress" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "league_run_id" uuid NOT NULL REFERENCES "league_runs"("id") ON DELETE cascade,
  "task_id" uuid NOT NULL REFERENCES "tasks"("id") ON DELETE cascade,
  "status" "task_status" NOT NULL DEFAULT 'locked',
  "completed_at" timestamptz,
  "source" "task_source" NOT NULL DEFAULT 'manual'
);
CREATE UNIQUE INDEX "task_progress_run_task_unique" ON "task_progress" ("league_run_id", "task_id");

CREATE TABLE "sync_events" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" uuid NOT NULL REFERENCES "users"("id") ON DELETE cascade,
  "profile_id" uuid REFERENCES "profiles"("id") ON DELETE set null,
  "client_type" "client_type" NOT NULL,
  "event_type" text NOT NULL,
  "payload" jsonb NOT NULL DEFAULT '{}'::jsonb,
  "status" "sync_status" NOT NULL DEFAULT 'accepted',
  "error" text,
  "received_at" timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX "sync_events_user_id_idx" ON "sync_events" ("user_id");

CREATE TABLE "feedback_items" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" uuid REFERENCES "users"("id") ON DELETE set null,
  "type" "feedback_type" NOT NULL,
  "title" text NOT NULL,
  "body" text NOT NULL,
  "github_issue_number" int,
  "created_at" timestamptz NOT NULL DEFAULT now()
);
