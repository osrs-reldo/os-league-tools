// src/api/logout.js

const logout = setIsAuthenticated => {
  // Remove the auth token from localStorage
  localStorage.removeItem('authToken');

  // Update the authentication state in the app
  setIsAuthenticated(false);

  // Redirect to the homepage
  window.location.href = '/';
};

export default logout;
