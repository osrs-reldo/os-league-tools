import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";

export default function () {
    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">OS League Tools</Navbar.Brand>
                <Nav>
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/character" className="nav-link">
                        Character Tracker
                    </Link>
                    <Link to="/calculators" className="nav-link">
                        Calculators
                    </Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/" component={Homepage} />
                {/* <Route path="/character" component={CharacterTracker} /> */}
                {/* <Route path="/calculators" component={Calculators} /> */}
            </Switch>
        </React.Fragment>
    );
}
