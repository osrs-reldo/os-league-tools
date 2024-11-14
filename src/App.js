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
  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {/* Redirect authenticated users away from /login and /register with a toast */}
      <Route path='/login' element={<RedirectWithToast message="You're already logged in" to='/' />} />
      <Route path='/register' element={<RedirectWithToast message="You don't need to do that!" to='/' />} />

      {/* Authenticated Routes */}
      <Route path='/' element={<Homepage />} />
      <Route path='stats' element={<Statistics />} />
      <Route path='news' element={<Homepage />} />
      <Route path='tracker' element={<Tracker />} />
      <Route path='tracker/:character' element={<ViewCharacter />} />
      <Route path='calculators' element={<Calculators />}>
        <Route path=':skill' element={<Calculators />} />
      </Route>
      <Route path='about' element={<About />} />
      <Route path='settings' element={<Settings />} />
      <Route path='faq' element={<Faq />} />
    </Routes>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem('authToken')));

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
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
