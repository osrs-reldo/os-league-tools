import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopNav from "./components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles/index.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Calculators from "./pages/Calculators";
import Calculator from "./pages/SkillCalculator";
import CharacterTracker from "./pages/CharacterTracker";

export default function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/tracker" component={CharacterTracker} />
          <Route exact path="/calculators" component={Calculators} />
          <Route path="/calculators/:skill" component={Calculator} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
