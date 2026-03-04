import { createLazyFileRoute, Link } from '@tanstack/react-router';

import { AuthButtons } from '@/components/AuthButtons';
import { useAuthConfig } from '@/contexts/AuthConfigContext';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const { authEnabled } = useAuthConfig();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700">
            Reldo.net
          </Link>
          {authEnabled ? (
            <AuthButtons />
          ) : (
            <span className="text-sm text-gray-500">Auth not configured (set Auth0 env vars)</span>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Reldo.net</h1>
          <p className="mt-2 text-lg text-gray-600">
            RuneScape-related tools—track progress, plan builds, and more.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500">
            Tools
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                to="/tools/league"
                className="block rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition hover:border-gray-300 hover:shadow"
              >
                <span className="font-medium text-gray-900">OS League Tools</span>
                <span className="mt-1 block text-sm text-gray-500">
                  Track tasks, relics, and progress for Leagues
                </span>
              </Link>
            </li>
            <li className="rounded-lg border border-dashed border-gray-200 bg-white/50 px-4 py-3 text-gray-500">
              <span className="font-medium">More tools</span>
              <span className="mt-1 block text-sm">Coming soon</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
