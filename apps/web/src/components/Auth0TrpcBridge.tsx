import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

import { TrpcWrapper } from './TrpcWrapper';

/**
 * Renders TrpcWrapper with Authorization header from Auth0 access token.
 * Must be used inside Auth0Provider.
 */
export function Auth0TrpcBridge({ children }: { children: React.ReactNode }) {
  const { getAccessTokenSilently } = useAuth0();
  const getAccessToken = useCallback(async () => {
    try {
      return await getAccessTokenSilently();
    } catch {
      return undefined;
    }
  }, [getAccessTokenSilently]);

  return <TrpcWrapper getAccessToken={getAccessToken}>{children}</TrpcWrapper>;
}
