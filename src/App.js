import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import { Auth0Provider } from '@auth0/auth0-react';
import './styles/compiled.css';
import { Provider } from 'react-redux';
import Homepage from './pages/Homepage';
import Tracker from './pages/Tracker';
import About from './pages/About';
import Settings from './pages/Settings';
import store from './store/store';
import ThemeProvider from './components/ThemeProvider';
import Statistics from './pages/Statistics';
import Calculators from './pages/Calculators';

const history = createBrowserHistory();
const trackingId = process.env.REACT_APP_GA_TRACKING || '';
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
                        >
                            <Routes>
                                <Route path='/' element={<Homepage />} />
                                <Route path='stats' element={<Statistics />} />
                                <Route path='news' element={<Homepage />} />
                                <Route path='tracker' element={<Tracker />} />
                                <Route path='calculators' element={<Calculators />}>
                                    <Route path=':skill' element={<Calculators />} />
                                </Route>
                                <Route path='planners' element={<Calculators />}>
                                    <Route path=':skill' element={<Calculators />} />
                                </Route>
                                <Route path='about' element={<About />} />
                                <Route path='settings' element={<Settings />} />
                            </Routes>
                        </Auth0Provider>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </Provider>
    );
}
