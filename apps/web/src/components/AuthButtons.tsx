import { useAuth0 } from '@auth0/auth0-react';

export function AuthButtons() {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } = useAuth0();

  if (isLoading) {
    return <span className="text-sm text-gray-500">Loading…</span>;
  }

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700">
          {user.name ?? user.email ?? 'Logged in'}
        </span>
        <button
          type="button"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-300"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => loginWithRedirect()}
      className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
    >
      Log in
    </button>
  );
}
