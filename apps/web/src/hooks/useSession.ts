import { trpc } from '@/utils/trpc';

/**
 * Fetches the current session from the API. Only use when the user is
 * authenticated (e.g. inside Auth0Provider and after login).
 * Enable the query only when you know the user has a token (e.g. isAuthenticated from useAuth0).
 */
export function useSession(enabled: boolean) {
  return trpc.auth.getSession.useQuery(undefined, {
    enabled,
  });
}
