import { createLazyFileRoute, Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/tools/league')({
  component: LeagueToolsStub,
});

function LeagueToolsStub() {
  return (
    <div className="min-h-screen p-6">
      <nav className="mb-6">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Reldo.net
        </Link>
      </nav>
      <h1 className="text-2xl font-semibold">OS League Tools</h1>
      <p className="mt-2 text-gray-600">
        Coming soon. This is the stub for the League Tools app—convert legacy components here.
      </p>
    </div>
  );
}
