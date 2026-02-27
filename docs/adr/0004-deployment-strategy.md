# ADR 0004: Deployment Strategy (Keep Lightweight Flow)

- Status: Accepted
- Date: 2026-02-26

## Context

Current release flow is simple and preferred: automatic staging deploy, then manual promotion to production. The refactor should preserve this operational simplicity.

## Decision

Keep the same release model while modernizing CI:

- CI on PR and main/master pushes: lint, typecheck, tests, build.
- Staging deploy: automatic on merge to main/master.
- Production deploy: manual approval gate after staging verification.
- Hosting:
  - API remains Heroku-compatible initially (can move later).
  - Web frontend deploy target remains flexible (static hosting or Heroku-compatible).

## Consequences

- Minimal process disruption while architecture changes.
- Maintains explicit production approval.
- Keeps infra decisions reversible while product and schema are still evolving.
