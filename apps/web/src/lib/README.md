# Web app lib

## API client (`api`)

All server state (session, profiles, progression, etc.) is fetched via the tRPC client. Use the `api` export from `@/lib/api`:

```ts
import { api } from '@/lib/api';

// Queries (use in components; enable when user is authenticated where required)
api.auth.getSession.useQuery(undefined, { enabled: isAuthenticated });
api.profiles.list.useQuery({ gameMode: 'leagues' });
api.progression.getTaskCatalog.useQuery({ taskType: 'tasks' });

// Mutations
api.profiles.createProfile.useMutation();
api.progression.upsertTaskProgress.useMutation();
```

The tRPC client sends the Auth0 access token when the user is logged in (see `TrpcWrapper` and `Auth0TrpcBridge`). For the full list of procedures and domains, see the repo [API domain map](../../../docs/api-domain-map.md).
