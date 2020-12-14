import React, { useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import ReactGA from 'react-ga';
import TopNav from './components/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './styles/index.scss';
import Homepage from './pages/Homepage';
import Calculators from './pages/Calculators';
import Calculator from './pages/SkillCalculator';
import Planner from './pages/SkillPlanner';
import CharacterTracker from './pages/CharacterTracker';
import About from './pages/About';
import PluginInfo from './pages/PluginInfo';
import Settings from './pages/Settings';

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
        <div className='App'>
            <HashRouter basename='/'>
                <TopNav />
                <Switch>
                    <Route exact path='/' component={Homepage} />
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
