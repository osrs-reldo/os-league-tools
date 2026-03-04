import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { useRef, useState } from 'react';
import superjson from 'superjson';

import { trpc } from '@/utils/trpc';

const apiUrl = import.meta.env.VITE_API_URL + '/trpc';

type TrpcWrapperProps = {
  children: React.ReactNode;
  /** When provided, adds Authorization: Bearer <token> to tRPC requests. */
  getAccessToken?: () => Promise<string | undefined>;
};

export function TrpcWrapper({ children, getAccessToken }: TrpcWrapperProps) {
  const [queryClient] = useState(() => new QueryClient());
  const getAccessTokenRef = useRef(getAccessToken);
  getAccessTokenRef.current = getAccessToken;

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: apiUrl,
          transformer: superjson,
          headers: async () => {
            const fn = getAccessTokenRef.current;
            if (!fn) return {};
            try {
              const token = await fn();
              return token ? { Authorization: `Bearer ${token}` } : {};
            } catch {
              return {};
            }
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
