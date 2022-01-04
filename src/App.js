import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import './styles/compiled.css';
import { Provider } from 'react-redux';
import Homepage from './pages/Homepage';
import Calculators from './pages/legacy/Calculators';
import Calculator from './pages/legacy/SkillCalculator';
import Planner from './pages/legacy/SkillPlanner';
import Tracker from './pages/Tracker';
import About from './pages/About';
import PluginInfo from './pages/legacy/PluginInfo';
import Settings from './pages/Settings';
import store from './store';
import ThemeProvider from './components/ThemeProvider';

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
                        <Switch>
                            <Route exact path='/' component={Homepage} />
                            <Route path='/news' component={Homepage} />
                            <Route path='/tracker' component={Tracker} />
                            <Route exact path='/calculators' component={Calculators} />
                            <Route path='/calculators/:skill' component={Calculator} />
                            <Route path='/planners/:skill' component={Planner} />
                            <Route path='/about' component={About} />
                            <Route path='/plugin' component={PluginInfo} />
                            <Route path='/settings' component={Settings} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </Provider>
    );
}
