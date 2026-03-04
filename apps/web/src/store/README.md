# Client store (Redux)

This Redux store holds **client-only UI state**. Server state (profiles, progression, session, etc.) lives in React Query via tRPC and must not be duplicated here.

## What lives here

- **`ui`** — Layout and preferences: sidebar open/closed, theme. Can be persisted to localStorage if desired.
- **`filters`** — Client-side filter state for task panel, calculators, and other filtered views. Not persisted to the backend here; use tRPC when saving user preferences that affect server state.

## What does not live here

- Session / current user → `trpc.auth.getSession.useQuery()`
- Profiles, league runs, task progress → `trpc.profiles.*`, `trpc.progression.*`
- Calculator defaults persisted per profile → `trpc.calculators.*`

See the repo [API domain map](../../../docs/api-domain-map.md) for the legacy Redux slice migration map.
