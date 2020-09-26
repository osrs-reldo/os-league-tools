import React from "react";
import { Card, Tabs, Tab } from "react-bootstrap";

export default function CharacterTracker() {
    return (
        <div className="content-wrapper">
            <h1 className="mt-2 light-text text-center">Character Tracker</h1>
            <Tabs fill variant="pills" defaultActiveKey="overview" className="mt-3 tab-bar-dark">
                <Tab eventKey="overview" title="Character Overview">
                    <Card bg='dark' text='white' className="mt-3">
                        <div className="m-3 text-center">
                            TODO
                        </div>
                    </Card>
                </Tab>
                <Tab eventKey="relics" title="Relics">
                    <Card bg='dark' text='white' className="mt-3">
                        <div className="m-3 text-center">
                            TODO
                        </div>
                    </Card>
                </Tab>
                <Tab eventKey="regions" title="Regions">
                    <Card bg='dark' text='white' className="mt-3">
                        <div className="m-3 text-center">
                            TODO
                        </div>
                    </Card>
                </Tab>
                <Tab eventKey="tasks" title="Tasks">
                    <Card bg='dark' text='white' className="mt-3">
                        <div className="m-3 text-center">
                            TODO
                        </div>
                    </Card>
                </Tab>
            </Tabs>
        </div >
    );
}
