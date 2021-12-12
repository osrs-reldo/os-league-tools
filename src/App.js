import React, { useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import ReactGA from 'react-ga';
import './styles/compiled.css';
import Homepage from './pages/Homepage';
import Calculators from './pages/legacy/Calculators';
import Calculator from './pages/legacy/SkillCalculator';
import Planner from './pages/legacy/SkillPlanner';
import CharacterTracker from './pages/legacy/CharacterTracker';
import About from './pages/legacy/About';
import PluginInfo from './pages/legacy/PluginInfo';
import Settings from './pages/legacy/Settings';

const history = createHashHistory();
const trackingId = process.env.REACT_APP_GA_TRACKING || '';
ReactGA.initialize(trackingId, {
    gaOptions: {
        siteSpeedSampleRate: 100,
    },
});
history.listen(() => {
    ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
});

export default function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
    }, []);

    return (
        <div className='App dark'>
            <HashRouter basename='/'>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/news' component={Homepage} />
                    <Route path='/tracker' component={CharacterTracker} />
                    <Route exact path='/calculators' component={Calculators} />
                    <Route path='/calculators/:skill' component={Calculator} />
                    <Route path='/planners/:skill' component={Planner} />
                    <Route path='/about' component={About} />
                    <Route path='/plugin' component={PluginInfo} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </HashRouter>
        </div>
    );
}
