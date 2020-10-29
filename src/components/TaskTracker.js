import React, { useState } from "react";
import { Card, Container, Row, Col, Tabs, Tab, Nav, Form } from "react-bootstrap";
import taskData from '../resources/taskData.json';
import { getMaxCompletableTasks, isTaskComplete, isTaskOnTodoList } from "../util/task-util";
import TaskTable from "./TaskTable";
import { INITIAL_REGIONS_STATE } from '../util/region-util';
import useLocalStorage from "../hooks/useLocalStorage";
import { LOCALSTORAGE_KEYS } from "../util/browser-util";

export default function TaskTracker({ taskStatus, updateTaskStatusCallback, unlockedRegions = INITIAL_REGIONS_STATE }) {
    const [showCompleted, setShowCompleted] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_SHOW_COMPLETED_TASKS, true);
    const [hideLockedAreas, setHideLockedAreas] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_HIDE_LOCKED_AREAS, true);

    const regionsToShow = [ 'Common', ...unlockedRegions ]
    const maxCompletableTasks = getMaxCompletableTasks(unlockedRegions);
    const todoListFilter = (task, area) => {
        return isTaskOnTodoList(task.id, area, taskStatus);
    }

    return (
        <React.Fragment>
            <Card bg='dark' text='white' className="mt-3">
                <Container >
                    <Row>
                        <Col className="mt-1 text-center">
                            <ul style={{ listStyleType: 'none' }} >
                                {taskData.difficulties.map(difficultyJson => {
                                    const numComplete = taskStatus.taskCount[difficultyJson.value];
                                    const totalTasks = maxCompletableTasks[difficultyJson.value];
                                    const percentage = Math.round((numComplete / totalTasks) * 100);
                                    return (
                                        <li key={difficultyJson.value}>
                                            {`${difficultyJson.label}: ${numComplete} / ${totalTasks} (${percentage}%)`}
                                        </li>
                                    );
                                })}
                            </ul>
                        </Col>
                        <Col>
                            <h1 className="m-3 text-center">
                                {`Tasks Completed: ${taskStatus.taskCount.total
                                    } / ${maxCompletableTasks.Total
                                    } (${Math.round((taskStatus.taskCount.total / maxCompletableTasks.Total) * 100)
                                    }%)`}
                            </h1>
                        </Col>
                        <Col className="mt-1 text-center">
                            <ul style={{ listStyleType: 'none' }} >
                                {regionsToShow.map(region => {
                                    const numComplete = taskStatus[region].taskCount;
                                    const totalTasks = taskData.taskCounts[region].Total;
                                    const percentage = Math.round((numComplete / totalTasks) * 100);
                                    return (
                                        <li key={region}>
                                            {`${region}: ${numComplete} / ${totalTasks} (${percentage}%)`}
                                        </li>
                                    );
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Card>
            <Card bg='dark' text='white' className="mt-3">
                <Tabs fill defaultActiveKey={"all"} className="tab-bar-secondary" style={{ margin: '0', borderRadius: '.25rem .25rem 0rem 0rem' }}>
                    <Tab eventKey="all" title="All Tasks">
                        <TaskTableWrapper
                            taskStatus={taskStatus}
                            updateTaskStatusCallback={updateTaskStatusCallback}
                            unlockedRegions={regionsToShow}
                            showCompleted={showCompleted}
                            setShowCompleted={setShowCompleted}
                            hideLockedAreas={hideLockedAreas}
                            setHideLockedAreas={setHideLockedAreas}
                        />
                    </Tab>
                    <Tab eventKey="todo" title="To-Do List">
                        <TaskTableWrapper
                            taskStatus={taskStatus}
                            updateTaskStatusCallback={updateTaskStatusCallback}
                            unlockedRegions={regionsToShow}
                            taskFilters={[todoListFilter]}
                            showCompleted={showCompleted}
                            setShowCompleted={setShowCompleted}
                            hideLockedAreas={hideLockedAreas}
                            setHideLockedAreas={setHideLockedAreas}
                        />
                    </Tab>
                </Tabs>
            </Card>
        </React.Fragment>
    );
}

function TaskTableWrapper({
        taskStatus,
        updateTaskStatusCallback,
        unlockedRegions,
        showCompleted,
        setShowCompleted,
        hideLockedAreas,
        setHideLockedAreas,
        taskFilters = []
    }) {
    const hideCompletedFilter = (task, area) => {
        return !isTaskComplete(task.id, area, taskStatus);
    }

    let allFilters = [...taskFilters];
    if (!showCompleted) {
        allFilters.push(hideCompletedFilter);
    }

    return (
        <Card bg='dark' text='white' style={{ border: '2px solid #6c757d', borderRadius: '0rem 0rem .25rem .25rem' }}>
            <div className="m-3 text-center">
                <Tab.Container defaultActiveKey="Common">
                    <Row>
                        <Col sm={2}>
                            <Form.Check
                                label="Show completed tasks"
                                checked={showCompleted}
                                onChange={() => setShowCompleted(prevShowCompleted => !prevShowCompleted)}
                            />
                            <Form.Check
                                label="Hide locked areas"
                                checked={hideLockedAreas}
                                onChange={() => setHideLockedAreas(prevHideLocked => !prevHideLocked)}
                            />
                            <div className="mt-2 mb-2" style={{borderTop: '0.5px solid', width: '100%'}} />
                            <h5>Areas:</h5>
                            <Nav variant="pills" className="flex-column mt-3 tab-bar-secondary">
                                {hideLockedAreas ?
                                    unlockedRegions.map(area =>
                                        <Nav.Item key={area}>
                                            <Nav.Link eventKey={area}>{area}</Nav.Link>
                                        </Nav.Item>
                                    )
                                :
                                    taskData.areas.map(area =>
                                        <Nav.Item key={area}>
                                            <Nav.Link eventKey={area}>{area}</Nav.Link>
                                        </Nav.Item>
                                    )
                                }
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                {taskData.areas.map(area =>
                                    <Tab.Pane key={area} eventKey={area}>
                                        <TaskTable area={area} taskStatus={taskStatus} updateTaskStatusCallback={updateTaskStatusCallback} taskFilters={allFilters} />
                                    </Tab.Pane>
                                )}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </Card>
    );
}
