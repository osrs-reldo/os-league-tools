import React, { useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createHashHistory } from 'history';
import TopNav from "./components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles/index.scss";
import Homepage from "./pages/Homepage";
import Calculators from "./pages/Calculators";
import Calculator from "./pages/SkillCalculator";
import CharacterTracker from "./pages/CharacterTracker";
import About from "./pages/About";
import ReactGA from 'react-ga';

const history = createHashHistory();
const trackingId = process.env.REACT_APP_GA_TRACKING || "";
ReactGA.initialize(trackingId, {
    gaOptions: {
        siteSpeedSampleRate: 100
    }
});
history.listen((location, action) => {
    ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
});

export default function App(props) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);
    }, [])

    return (
        <div className="App">
            <HashRouter basename='/'>
                <TopNav />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/tracker" component={CharacterTracker} />
                    <Route exact path="/calculators" component={Calculators} />
                    <Route path="/calculators/:skill" component={Calculator} />
                    <Route path="/about" component={About} />
                </Switch>
            </HashRouter>
        </div>
    );
}
