import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/compiled.css';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import Tracker from './pages/Tracker';
import About from './pages/About';
import Settings from './pages/Settings';
import store from './store';
import ThemeProvider from './components/ThemeProvider';
import Statistics from './pages/Statistics';
import Calculators from './pages/Calculators';
import Faq from './pages/Faq';
import ViewCharacter from './pages/ViewCharacter';
import { submitRenderError } from './client/feedback-client';
import { ErrorPage } from './components/common/util/ErrorBoundary';
import { AuthProvider } from './AuthContext';

const history = createBrowserHistory();
const trackingId = process.env.REACT_APP_GA_MID;

if (trackingId) {
  ReactGA.initialize(trackingId, {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
}
history.listen(() => {
  if (trackingId) {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
      title: window.location.pathname + window.location.search,
    });
  }
});

function RedirectWithToast({ message, to }) {
  useEffect(() => {
    toast.info(message, { autoClose: 2000 });
  }, [message]);

  return <Navigate to={to} replace />;
}

function AppRoutes({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Routes>
      {/* Public Routes (accessible to everyone) */}
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/register' element={<Register />} />
      <Route path='/stats' element={<Statistics />} />
      <Route path='/news' element={<Homepage />} />
      <Route
        path='/login'
        element={
          !isAuthenticated ? (
            <Login setIsAuthenticated={setIsAuthenticated} />
          ) : (
            <RedirectWithToast message="You're already logged in" to='/' />
          )
        }
      />

      {/* Private Routes (require authentication) */}
      <Route
        path='/tracker'
        element={
          isAuthenticated ? <Tracker /> : <RedirectWithToast message='Please log in to access this page' to='/login' />
        }
      />
      <Route
        path='/tracker/:character'
        element={
          isAuthenticated ? (
            <ViewCharacter />
          ) : (
            <RedirectWithToast message='Please log in to access this page' to='/login' />
          )
        }
      />
      <Route
        path='/calculators'
        element={
          isAuthenticated ? (
            <Calculators />
          ) : (
            <RedirectWithToast message='Please log in to access this page' to='/login' />
          )
        }
      />
      <Route
        path='/settings'
        element={
          isAuthenticated ? <Settings /> : <RedirectWithToast message='Please log in to access this page' to='/login' />
        }
      />

      {/* Catch-all Route */}
      <Route path='*' element={<RedirectWithToast message='Page not found' to='/' />} />
    </Routes>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem('authToken')));

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('authToken');
      setIsAuthenticated(!!token);
    };

    // Listen for changes in `authToken` across tabs/windows
    window.addEventListener('storage', handleStorageChange);

    // Initial load check
    handleStorageChange();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <AuthProvider>
      <Provider store={store}>
        <ThemeProvider>
          <div className='App'>
            <BrowserRouter basename='/'>
              <ErrorBoundary FallbackComponent={ErrorPage} onError={submitRenderError}>
                <ToastContainer /> {/* Add ToastContainer here */}
                <AppRoutes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
              </ErrorBoundary>
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  );
}
