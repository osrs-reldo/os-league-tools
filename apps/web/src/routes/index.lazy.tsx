import { createLazyFileRoute } from '@tanstack/react-router';

import { AuthButtons } from '@/components/AuthButtons';
import { useAuthConfig } from '@/contexts/AuthConfigContext';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const { authEnabled } = useAuthConfig();

  return (
    <div className="min-h-screen p-6">
      <header className="mb-8 flex items-center justify-between">
        <p className="text-xl font-medium">Reldo web app scaffold is ready.</p>
        {authEnabled ? (
          <AuthButtons />
        ) : (
          <span className="text-sm text-gray-500">Auth not configured (set Auth0 env vars)</span>
        )}
      </header>
    </div>
  );
}
