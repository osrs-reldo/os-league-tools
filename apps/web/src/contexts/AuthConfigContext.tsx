import { createContext, useContext } from 'react';

type AuthConfigContextValue = {
  authEnabled: boolean;
};

const AuthConfigContext = createContext<AuthConfigContextValue>({ authEnabled: false });

export function AuthConfigProvider({
  authEnabled,
  children,
}: {
  authEnabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <AuthConfigContext.Provider value={{ authEnabled }}>{children}</AuthConfigContext.Provider>
  );
}

export function useAuthConfig() {
  return useContext(AuthConfigContext);
}
