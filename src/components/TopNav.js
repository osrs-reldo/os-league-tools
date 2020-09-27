import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function () {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">OS League Tools</Navbar.Brand>
            <Nav>
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/tracker" className="nav-link">
                    Character Tracker
                </Link>
                <Link to="/calculators" className="nav-link">
                    Calculators
                </Link>
            </Nav>
        </Navbar>
    );
}
