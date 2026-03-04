/**
 * API client: use the tRPC client for all backend calls.
 * Re-export so the app has a single import path for typed API access.
 *
 * @example
 * import { api } from '@/lib/api';
 * // Session (when authenticated)
 * const { data } = api.auth.getSession.useQuery(undefined, { enabled: isAuthenticated });
 * // Profiles
 * const { data: profiles } = api.profiles.list.useQuery({ gameMode: 'leagues' });
 * // Progression
 * const { data: catalog } = api.progression.getTaskCatalog.useQuery({ taskType: '...' });
 */
export { trpc as api } from '@/utils/trpc';
