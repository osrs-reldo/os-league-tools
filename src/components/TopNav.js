import React, { useState } from "react";
import { Navbar, Nav, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { LOCALSTORAGE_KEYS, reloadPage } from "../util/browser-util";
import ManageDataModal from "./ManageDataModal";

export default function () {
    const [hideAlertBanner, setHideAlertBanner] = useLocalStorage(LOCALSTORAGE_KEYS.HIDE_ALERT_BANNER, false);
    const [showDataModal, setShowDataModal] = useState(false);

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src='/img/relic-check.png'
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2"
                        alt=""
                    />
                    OS League Tools
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
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
                    <Nav>
                        <Navbar.Text
                            onClick={() => setShowDataModal(true)}
                            className="clickable mr-2"
                        >
                            Manage Data
                        </Navbar.Text>
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </Nav>
                </Navbar.Collapse>
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
            <ManageDataModal
                show={showDataModal}
                onClose={updated => {
                    setShowDataModal(false);
                    if (updated) {
                        reloadPage();
                    }
                }}
            />
        </React.Fragment>
    );
}
