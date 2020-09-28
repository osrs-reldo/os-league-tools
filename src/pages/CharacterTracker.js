import React from "react";
import { Card, Tabs, Tab } from "react-bootstrap";
import RelicsTracker from "../components/RelicsTracker";
import useQueryString from "../hooks/useQueryString";

export default function CharacterTracker() {
    const [selectedTab, onSetSelectedTab] = useQueryString('tab');
    return (
        <div className="content-wrapper mb-4">
            <h1 className="mt-2 light-text text-center">Character Tracker</h1>
            <Tabs fill variant="pills" defaultActiveKey={selectedTab} className="mt-3 tab-bar-dark" onSelect={onSetSelectedTab}>
                <Tab eventKey="overview" title="Character Overview">
                    <Card bg='dark' text='white' className="mt-3">
                        <div className="m-3 text-center">
                            TODO
                        </div>
                    </Card>
                </Tab>
                <Tab eventKey="relics" title="Relics">
                    <RelicsTracker />
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
