import React from "react";
import { Navbar, Nav, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function () {
    const [hideAlertBanner, setHideAlertBanner] = useLocalStorage("hideAlertBanner", false);

    return (
        <React.Fragment>
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
            {!hideAlertBanner &&
                <Alert
                    className='content-wrapper mt-3 mb-3'
                    variant='dark'
                    onClose={() => setHideAlertBanner(true)}
                    dismissible
                >
                    <b>OS League Tools is in BETA!</b> If you find any bugs or incorrect data, or if you have feedback/suggestions, please come by the <Alert.Link href="https://discord.gg/GQ5kVyU">discord</Alert.Link>!
                </Alert>
            }
        </React.Fragment>
    );
}
