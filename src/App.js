import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga4';
import { Auth0Provider } from '@auth0/auth0-react';
import './styles/compiled.css';
import { Provider } from 'react-redux';
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

const history = createBrowserHistory();
const trackingId = process.env.REACT_APP_GA_MID || '';
ReactGA.initialize(trackingId, {
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});
history.listen(() => {
  ReactGA.pageview(window.location.pathname + window.location.search);
});

export default function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className='App'>
          <BrowserRouter basename='/'>
            <Auth0Provider
              domain='login.osleague.tools'
              clientId='yfqwKEhQO8FL7MlxWmWo7ekuGgzSrfmh'
              redirectUri={window.location.origin}
              audience='https://dev-u4mby-kt.us.auth0.com/api/v2/'
            >
              <Routes>
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
            </Auth0Provider>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
