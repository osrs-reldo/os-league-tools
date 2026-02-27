# ADR 0002: Postgres, Drizzle, and Migrations

- Status: Accepted
- Date: 2026-02-26

## Context

You explicitly want a full schema redesign and no legacy migration constraints. The old backend stores dynamic JSON in DynamoDB, which makes querying, constraints, and analytics difficult.

## Decision

Use PostgreSQL as the system of record with Drizzle ORM and SQL migrations.

- Database: PostgreSQL (single primary for now).
- ORM: Drizzle (`drizzle-orm`) for typed queries and schema definitions in TypeScript.
- Migrations: `drizzle-kit` SQL migrations in-repo.
- Validation: Zod at tRPC boundaries; database constraints for durable invariants.

## Consequences

- Strong typing from request validation through persistence.
- Easier relational modeling for users, characters, progression, sync events, and API keys.
- Better future support for cross-mode expansion on `Reldo.net`.
- Requires migration tooling and local dev DB setup up front.
