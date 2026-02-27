# ADR 0001: Auth and Client Identity

- Status: Accepted
- Date: 2026-02-26

## Context

The new platform needs:

- cross-device user accounts for the web app,
- secure API access for a future game plugin,
- strict TypeScript contracts across web and API.

Legacy auth is fragmented (JWT bearer plus ad-hoc API key bypass). We need one model that handles both first-party web sessions and machine-to-machine plugin sync.

## Decision

Use OIDC for user authentication and database-backed API keys for plugin clients.

- Web auth:
  - OIDC provider (Auth0-compatible) with Authorization Code + PKCE.
  - API validates provider JWTs and upserts local users by `authProviderUserId`.
- Plugin auth:
  - Long-lived API keys issued per user.
  - Only hashed keys are stored.
  - API key records include scope, status, created/rotated timestamps, and last-used audit data.
- API authorization:
  - tRPC context resolves either `sessionUser` (JWT) or `apiKeyUser` (plugin key).
  - Procedure-level guards enforce scopes (`user:read`, `user:write`, `plugin:sync`).

## Consequences

- Clear separation between identity (OIDC subject) and API credentials (plugin keys).
- Supports immediate web login and future plugin sync without redesign.
- Adds initial implementation complexity (JWT verification + key hashing + scope checks), but removes insecure fallback behavior from legacy code.
