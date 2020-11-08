import React, { useState } from "react";
import { Card, Row, Col, Tabs, Tab, Nav, Form, Button } from "react-bootstrap";
import taskData from '../resources/taskData.json';
import { getMaxCompletableTasks, isTaskComplete, isTaskOnTodoList, getTaskPointsOnTodoList, getCompletedTasksInArea, getCompletedTasksWithDifficulty, getPointsEarned, isTaskHidden, removeCompletedFromTodo } from "../util/task-util";
import { getMaxCompletablePoints } from "../util/relic-util"
import TaskTable from "./TaskTable";
import { INITIAL_REGIONS_STATE } from '../util/region-util';
import useLocalStorage from "../hooks/useLocalStorage";
import { LOCALSTORAGE_KEYS } from "../util/browser-util";
import { CardDeck } from "../../node_modules/react-bootstrap/esm/index";
import useScreenSize from "../hooks/useScreenSize";
import Divider from "./Divider";

export default function TaskTracker({ taskStatus, updateTaskStatus, unlockedRegions = INITIAL_REGIONS_STATE }) {
    const [hideLockedAreas, setHideLockedAreas] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_HIDE_LOCKED_AREAS, true);
    const [selectedStatus, setSelectedStatus] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_SELECTED_STATUS, 'All');
    const [showHiddenTasks, setShowHiddenTasks] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_SHOW_HIDDEN_TASKS, false);
    const screenSize = useScreenSize();

    const regionsToShow = [ 'Common', ...unlockedRegions ]
    const maxCompletableTasks = getMaxCompletableTasks(regionsToShow, taskStatus);
    const maxCompletablePoints = getMaxCompletablePoints(regionsToShow, taskStatus);
    const plannedOnTodoList = getTaskPointsOnTodoList(taskStatus, regionsToShow);

    const todoListFilter = (task, area) => {
        return isTaskOnTodoList(task.id, taskStatus);
    }

    return (
        <React.Fragment>
            <CardDeck>
                <Card bg='dark' text='white' className="mt-3 p-2 text-center">
                    <h2>
                        {`Tasks Completed: ${taskStatus.tasks.length
                            } / ${maxCompletableTasks.Total
                            } (${Math.round((taskStatus.tasks.length / maxCompletableTasks.Total) * 100)
                            }%)`}
                    </h2>
                    <div className="d-flex justify-content-around">
                        <div className="d-flex flex-column">
                            {taskData.difficulties.map(difficultyJson => {
                                const numComplete = getCompletedTasksWithDifficulty(difficultyJson.value, taskStatus).length;
                                const totalTasks = maxCompletableTasks[difficultyJson.value];
                                return (
                                    <div key={difficultyJson.value}>
                                        {`${difficultyJson.label}: ${numComplete} / ${totalTasks}`}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="d-flex flex-column">
                            {regionsToShow.map(region => {
                                const numComplete = getCompletedTasksInArea(region, taskStatus).length;
                                const totalTasks = maxCompletableTasks[region];
                                return (
                                    <div key={region}>
                                        {`${region}: ${numComplete} / ${totalTasks}`}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Card>
                <Card bg='dark' text='white' className="mt-3 p-2 text-center">
                    <h2>
                        {`Points Earned: ${getPointsEarned(taskStatus)} / ${maxCompletablePoints.Total}`}
                    </h2>
                    <div className="d-flex justify-content-around">
                        <div className="d-flex flex-column">
                            {taskData.difficulties.map(difficultyJson => {
                                const numEarned = getPointsEarned(taskStatus, null, difficultyJson.value);
                                const totalPoints = maxCompletablePoints[difficultyJson.value];
                                return (
                                    <div key={difficultyJson.value}>
                                        {`${difficultyJson.label}: ${numEarned} / ${totalPoints}`}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="d-flex flex-column">
                            {regionsToShow.map(region => {
                                const numEarned = getPointsEarned(taskStatus, region);
                                const totalPoints = maxCompletablePoints[region];
                                return (
                                    <div key={region}>
                                        {`${region}: ${numEarned} / ${totalPoints}`}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Card>
            </CardDeck>
            <Card bg='dark' text='white' className="mt-3">
                <Tabs fill defaultActiveKey={"all"} className="tab-bar-secondary" style={{ margin: '0', borderRadius: '.25rem .25rem 0rem 0rem' }}>
                    <Tab eventKey="all" title="All Tasks">
                        <TaskTableWrapper
                            taskStatus={taskStatus}
                            updateTaskStatus={updateTaskStatus}
                            unlockedRegions={regionsToShow}
                            screenSize={screenSize}
                            selectedStatus={selectedStatus}
                            setSelectedStatus={setSelectedStatus}
                            hideLockedAreas={hideLockedAreas}
                            setHideLockedAreas={setHideLockedAreas}
                            showHiddenTasks={showHiddenTasks}
                            setShowHiddenTasks={setShowHiddenTasks}
                        />
                    </Tab>
                    <Tab eventKey="todo" title="To-Do List">
                        <TaskTableWrapper
                            taskStatus={taskStatus}
                            updateTaskStatus={updateTaskStatus}
                            unlockedRegions={regionsToShow}
                            screenSize={screenSize}
                            taskFilters={[todoListFilter]}
                            selectedStatus={selectedStatus}
                            setSelectedStatus={setSelectedStatus}
                            hideLockedAreas={hideLockedAreas}
                            setHideLockedAreas={setHideLockedAreas}
                            plannedOnTodoList={plannedOnTodoList}
                            showHiddenTasks={showHiddenTasks}
                            setShowHiddenTasks={setShowHiddenTasks}
                        />
                    </Tab>
                </Tabs>
            </Card>
        </React.Fragment>
    );
}

function TaskTableWrapper({
        taskStatus,
        updateTaskStatus,
        unlockedRegions,
        screenSize,
        selectedStatus,
        setSelectedStatus,
        hideLockedAreas,
        setHideLockedAreas,
        plannedOnTodoList,
        showHiddenTasks,
        setShowHiddenTasks,
        taskFilters = []
}) {
    const [selectedArea, setSelectedArea] = useState('All');

    let allFilters = [...taskFilters];
    if (selectedStatus === "Incomplete") {
        allFilters.push((task) => !isTaskComplete(task.id, taskStatus));
    }
    if (selectedStatus === "Complete") {
        allFilters.push((task) => isTaskComplete(task.id, taskStatus));
    }
    if (hideLockedAreas) {
        allFilters.push((task, area) => {
            const taskArea = area === "All" ? taskData.tasksById[task.id].area : area;
            return unlockedRegions.includes(taskArea);
        });
    }
    if (!showHiddenTasks) {
        allFilters.push((task) => !isTaskHidden(task.id, taskStatus));
    }

    return (
        <Card bg='dark' text='white' style={{ border: '2px solid #6c757d', borderRadius: '0rem 0rem .25rem .25rem' }}>
            <div className="m-3 text-center">
                <Row>
                    <Col lg={2}>
                        <Tab.Container activeKey={selectedArea}>
                            <Form.Check
                                label="Hide locked areas"
                                checked={hideLockedAreas}
                                onChange={() => setHideLockedAreas(prevHideLocked => !prevHideLocked)}
                            />
                            <Form.Check
                                label="Show hidden tasks"
                                checked={showHiddenTasks}
                                onChange={() => setShowHiddenTasks(prevShowHidden => !prevShowHidden)}
                            />
                            <Divider />
                            <h5>Areas:</h5>
                            <Nav
                                variant="pills"
                                className={"mt-3 tab-bar-secondary " + (screenSize.isSizeOrLarger('xl')  ? "flex-column" : "d-flex justify-content-around") }
                            >
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
                                            <Nav.Link eventKey={area} onClick={() => setSelectedArea(area)}>{area}</Nav.Link>
                                        </Nav.Item>
                                    )
                                }
                            </Nav>
                        </Tab.Container>

                        <Tab.Container activeKey={selectedStatus}>
                            <Divider />
                            <h5>Status:</h5>
                            <Nav
                                variant="pills"
                                className={"mt-3 tab-bar-secondary " + (screenSize.isSizeOrLarger('lg')  ? "flex-column" : "d-flex justify-content-around") }
                            >
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

                    <Col lg={10}>
                        {plannedOnTodoList &&
                            <React.Fragment>
                                {screenSize.isSizeOrSmaller('md') && <Divider />}
                                <div className='d-flex justify-content-around align-items-center flex-wrap'>
                                    <h5 className="mb-1 mt-1 mr-2">
                                        Incomplete Tasks on To-do List: {plannedOnTodoList.tasks}
                                    </h5>
                                    <h5 className="mb-1 mt-1 mr-2">
                                        Points Remaining on To-do List: {plannedOnTodoList.points}
                                    </h5>
                                    <div className="mb-1 mt-1">
                                        <Button
                                            variant="outline-light"
                                            onClick={() => removeCompletedFromTodo(taskStatus, updateTaskStatus.setTodoListed)}
                                        >
                                            Remove completed tasks
                                        </Button>
                                    </div>
                                </div>
                            </React.Fragment>
                        }
                        <Nav>
                            <TaskTable
                                area={selectedArea}
                                taskStatus={taskStatus}
                                updateTaskStatus={updateTaskStatus}
                                taskFilters={allFilters}
                            />
                        </Nav>
                    </Col>
                </Row>
            </div>
        </Card>
    );
}
