import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Provider } from 'react-redux';

import { Auth0TrpcBridge } from './components/Auth0TrpcBridge';
import { TrpcWrapper } from './components/TrpcWrapper';
import { AuthConfigProvider } from './contexts/AuthConfigContext';
import { store } from './store';
import './index.css';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN as string | undefined;
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID as string | undefined;
const auth0Audience = import.meta.env.VITE_AUTH0_AUDIENCE as string | undefined;
const auth0RedirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI as string | undefined;

const hasAuth0Config = Boolean(auth0Domain && auth0ClientId);

export function App() {
  const content = (
    <AuthConfigProvider authEnabled={hasAuth0Config}>
      <Provider store={store}>
        {hasAuth0Config ? (
          <Auth0TrpcBridge>
            <RouterProvider router={router} />
          </Auth0TrpcBridge>
        ) : (
          <TrpcWrapper>
            <RouterProvider router={router} />
          </TrpcWrapper>
        )}
      </Provider>
    </AuthConfigProvider>
  );

  if (!hasAuth0Config) {
    return content;
  }

  return (
    <Auth0Provider
      domain={auth0Domain!}
      clientId={auth0ClientId!}
      authorizationParams={{
        redirect_uri: auth0RedirectUri ?? window.location.origin,
        ...(auth0Audience && { audience: auth0Audience }),
      }}
    >
      {content}
    </Auth0Provider>
  );
}
