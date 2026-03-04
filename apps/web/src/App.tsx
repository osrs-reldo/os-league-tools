import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Provider } from 'react-redux';

import { TrpcWrapper } from './components/TrpcWrapper';
import { store } from './store';
import './index.css';
import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return (
    <Provider store={store}>
      <TrpcWrapper>
        <RouterProvider router={router} />
      </TrpcWrapper>
    </Provider>
  );
}
