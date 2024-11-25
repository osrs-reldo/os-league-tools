import React, { createContext, useContext, useState, useMemo } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem('authToken')));

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ isAuthenticated, setIsAuthenticated, logout }), [isAuthenticated, setIsAuthenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
