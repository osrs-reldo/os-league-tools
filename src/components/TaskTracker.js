import React, { useState } from "react";
import { Card, Container, Row, Col, Tabs, Tab, Nav, Form } from "react-bootstrap";
import taskData from '../resources/taskData.json';
import { getMaxCompletableTasks, isTaskComplete, isTaskOnTodoList, DIFFICULTY_POINTS, getTaskPointsOnTodoList } from "../util/task-util";
import { getMaxCompletablePoints } from "../util/relic-util"
import TaskTable from "./TaskTable";
import { INITIAL_REGIONS_STATE } from '../util/region-util';
import useLocalStorage from "../hooks/useLocalStorage";
import { LOCALSTORAGE_KEYS } from "../util/browser-util";
import { CardDeck } from "../../node_modules/react-bootstrap/esm/index";

export default function TaskTracker({ taskStatus, updateTaskStatusCallback, unlockedRegions = INITIAL_REGIONS_STATE }) {
    const [hideLockedAreas, setHideLockedAreas] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_HIDE_LOCKED_AREAS, true);
    const [selectedStatus, setSelectedStatus] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_SELECTED_STATUS, 'All');

    const regionsToShow = [ 'Common', ...unlockedRegions ]
    const maxCompletableTasks = getMaxCompletableTasks(unlockedRegions);
    const maxCompletablePoints = getMaxCompletablePoints(unlockedRegions);
    const plannedOnTodoList = getTaskPointsOnTodoList(taskStatus, regionsToShow);

    const todoListFilter = (task, area) => {
        return isTaskOnTodoList(task.id, area, taskStatus);
    }

    return (
        <React.Fragment>
            <CardDeck>
                <Card bg='dark' text='white' className="mt-3">
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <h2 className="mt-3">
                                    {`Tasks Completed: ${taskStatus.taskCount.total
                                        } / ${maxCompletableTasks.Total
                                        } (${Math.round((taskStatus.taskCount.total / maxCompletableTasks.Total) * 100)
                                        }%)`}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
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
                            <Col className="text-center">
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
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <h2 className="mt-3">
                                    {`Points Earned: ${taskStatus.points} / ${maxCompletablePoints.Total}`}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <ul style={{ listStyleType: 'none' }} >
                                    {taskData.difficulties.map(difficultyJson => {
                                        const numEarned = taskStatus.taskCount[difficultyJson.value] * DIFFICULTY_POINTS[difficultyJson.value];
                                        const totalPoints = maxCompletablePoints[difficultyJson.value];
                                        return (
                                            <li key={difficultyJson.value}>
                                                {`${difficultyJson.label}: ${numEarned} / ${totalPoints}`}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Col>
                            <Col className="text-center">
                                <ul style={{ listStyleType: 'none' }} >
                                    {regionsToShow.map(region => {
                                        const numEarned = taskStatus[region].points;
                                        const totalPoints = taskData.pointCounts[region].Total;
                                        return (
                                            <li key={region}>
                                                {`${region}: ${numEarned} / ${totalPoints}`}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </CardDeck>
            <Card bg='dark' text='white' className="mt-3">
                <Tabs fill defaultActiveKey={"all"} className="tab-bar-secondary" style={{ margin: '0', borderRadius: '.25rem .25rem 0rem 0rem' }}>
                    <Tab eventKey="all" title="All Tasks">
                        <TaskTableWrapper
                            taskStatus={taskStatus}
                            updateTaskStatusCallback={updateTaskStatusCallback}
                            unlockedRegions={regionsToShow}
                            selectedStatus={selectedStatus}
                            setSelectedStatus={setSelectedStatus}
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
                            selectedStatus={selectedStatus}
                            setSelectedStatus={setSelectedStatus}
                            hideLockedAreas={hideLockedAreas}
                            setHideLockedAreas={setHideLockedAreas}
                            plannedOnTodoList={plannedOnTodoList}
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
        selectedStatus,
        setSelectedStatus,
        hideLockedAreas,
        setHideLockedAreas,
        plannedOnTodoList,
        taskFilters = []
    }) {

    const [selectedArea, setSelectedArea] = useState('All');

    const showIncompleteFilter = (task, area) => {
        return !isTaskComplete(task.id, area, taskStatus);
    }

    const showCompleteFilter = (task, area) => {
        return isTaskComplete(task.id, area, taskStatus);
    }

    const hideLockedAreasFilter = (task, area) => {
        const taskArea = area === "All" ? taskData.tasksById[task.id].area : area;
        return unlockedRegions.includes(taskArea);
    }

    let allFilters = [...taskFilters];

    if (selectedStatus === "Incomplete") {
        allFilters.push(showIncompleteFilter);
    }
    if (selectedStatus === "Complete") {
        allFilters.push(showCompleteFilter);
    }
    if (hideLockedAreas) {
        allFilters.push(hideLockedAreasFilter);
    }

    return (
        <Card bg='dark' text='white' style={{ border: '2px solid #6c757d', borderRadius: '0rem 0rem .25rem .25rem' }}>
            <div className="m-3 text-center">
                <Row>
                    <Col sm={2}>
                        <Tab.Container activeKey={selectedArea}>
                            <Form.Check
                                label="Hide locked areas"
                                checked={hideLockedAreas}
                                onChange={() => setHideLockedAreas(prevHideLocked => !prevHideLocked)}
                            />
                            <div className="mt-2 mb-2" style={{borderTop: '0.5px solid', width: '100%'}} />
                            <h5>Areas:</h5>
                            <Nav variant="pills" className="flex-column mt-3 tab-bar-secondary">
                                <Nav.Item key='All'>
                                    <Nav.Link eventKey='All' onClick={event => setSelectedArea('All')}>All</Nav.Link>
                                </Nav.Item>
                                {hideLockedAreas ?
                                    unlockedRegions.map(area =>
                                        <Nav.Item key={area}>
                                            <Nav.Link eventKey={area} onClick={() => setSelectedArea(area)}>{area}</Nav.Link>
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
                            <div className="mt-2 mb-2" style={{borderTop: '0.5px solid', width: '100%'}} />
                        </Tab.Container>

                        <Tab.Container activeKey={selectedStatus}>
                            <h5>Status:</h5>
                            <Nav variant="pills" className="flex-column mt-3 tab-bar-secondary">
                                <Nav.Item key='All'>
                                    <Nav.Link eventKey='All' onClick={() => setSelectedStatus('All')}>All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item key='Complete'>
                                    <Nav.Link eventKey='Complete' onClick={() => setSelectedStatus('Complete')}>Complete</Nav.Link>
                                </Nav.Item>
                                <Nav.Item key='Incomplete'>
                                    <Nav.Link eventKey='Incomplete' onClick={() => setSelectedStatus('Incomplete')}>Incomplete</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </Col>

                    <Col sm={10}>
                        {plannedOnTodoList &&
                            <div className='d-flex justify-content-around'>
                                <h4 className="mb-3">
                                    Tasks on To-do List: {plannedOnTodoList.tasks}
                                </h4>
                                <h4 className="mb-3">
                                    Points on To-do List: {plannedOnTodoList.points}
                                </h4>
                            </div>
                        }
                        <Nav>
                            <TaskTable area={selectedArea} taskStatus={taskStatus} updateTaskStatusCallback={updateTaskStatusCallback} taskFilters={allFilters} />
                        </Nav>
                    </Col>
                </Row>
            </div>
        </Card>
    );
}
