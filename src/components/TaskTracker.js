import React from "react";
import { Card, Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import useLocalStorage from "../hooks/useLocalStorage";
import { LOCALSTORAGE_KEYS } from '../util/browser-util';
import TaskTable from './TaskTable';

export default function TaskTracker() {
    const [totalPoints, setTotalPoints] = useLocalStorage(LOCALSTORAGE_KEYS.TOTAL_POINTS, 0);

    return (
        <React.Fragment>
            <Card bg='dark' text='white' className="mt-3">
                <Container >
                    <Row>
                        <Col className="mt-1 text-center">
                            <ul>
                                <li>Easy: 60 / 500 (12%)</li>
                                <li>Medium: 30 / 300 (10%)</li>
                                <li>Hard: 5 / 200 (2%)</li>
                                <li>Elite: 0 / 200 (0%)</li>
                                <li>Master: 0 / 200 (0%)</li>
                            </ul>
                        </Col>
                        <Col>
                            <h1 className="m-3 text-center">Tasks Completed: 100 / 1000 (10%)</h1>
                        </Col>
                        <Col className="mt-1 text-center">
                            <ul>
                                <li>Misthalin: 70 / 250 (28%)</li>
                                <li>Karamja: 15 / 250 (6%)</li>
                                <li>Asgarnia: 10 / 250 (4%)</li>
                                <li>Tirannwn: 5 / 250 (2%)</li>
                                <li>Fremennik: 0 / 250 (0%)</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Card>
            <Card bg='dark' text='white' className="mt-3">
                <Tabs fill defaultActiveKey={"all"} className="tab-bar-secondary" style={{ margin: '0', borderRadius: '.25rem .25rem 0rem 0rem' }}>
                    <Tab eventKey="all" title="All Tasks">
                        <TaskTable />
                    </Tab>
                    <Tab eventKey="todo" title="To-Do List">
                        <TaskTable />
                    </Tab>
                </Tabs>
            </Card>
        </React.Fragment>
    );
}
