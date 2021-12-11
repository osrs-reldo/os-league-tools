import React, { useState } from 'react';
import { Card, Row, Col, Tabs, Tab, Nav, Form, Button } from 'react-bootstrap';
import taskData from '../../resources/taskData.json';
import {
    getMaxCompletableTaskPoints,
    isTaskComplete,
    isTaskOnTodoList,
    getTaskPointsOnTodoList,
    getCompletedTasksInArea,
    getCompletedTasksWithDifficulty,
    getPointsEarned,
    isTaskHidden,
    removeCompletedFromTodo,
    isTaskCompletable,
    isTaskCompletableWithRegions,
} from '../../util/task-util';
import { isRelicUnlocked } from '../../util/relic-util';
import TaskTable from './TaskTable';
import RandomTaskGenerator from './RandomTaskGenerator';
import { INITIAL_REGIONS_STATE } from '../../util/region-util';
import useLocalStorage from '../../hooks/useLocalStorage';
import { LOCALSTORAGE_KEYS, SESSIONSTORAGE_KEYS } from '../../util/browser-util';
import { CardDeck } from '../../../node_modules/react-bootstrap/esm/index';
import useScreenSize from '../../hooks/useScreenSize';
import Divider from './Divider';
import HiscoreLookup from './HiscoreLookup';

export default function TaskTracker({ taskStatus, updateTaskStatus, unlockedRegions = INITIAL_REGIONS_STATE }) {
    const [hideLockedAreas, setHideLockedAreas] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_HIDE_LOCKED_AREAS, true);
    const [selectedStatus, setSelectedStatus] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_SELECTED_STATUS, 'All');
    const [showHiddenTasks, setShowHiddenTasks] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_SHOW_HIDDEN_TASKS, false);
    const [hideTodoTasks, setHideTodoTasks] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_HIDE_TODO_TASKS, false);
    const [hiscores, , refreshHiscores] = useLocalStorage(SESSIONSTORAGE_KEYS.HISCORES_CACHE, null, true);
    const screenSize = useScreenSize();

    const regionsToShow = ['Common', ...unlockedRegions];
    const maxCompletableTaskPoints = getMaxCompletableTaskPoints(regionsToShow, taskStatus);
    const plannedOnTodoList = getTaskPointsOnTodoList(taskStatus, regionsToShow);

    const todoListFilter = task => {
        return isTaskOnTodoList(task.id, taskStatus);
    };

    return (
        <>
            <CardDeck>
                <Card bg='dark' text='white' className='mt-3 p-2 text-center'>
                    <h2>
                        {`Tasks Completed: ${taskStatus.tasks.length} / ${
                            maxCompletableTaskPoints.tasks.Total
                        } (${Math.round((taskStatus.tasks.length / maxCompletableTaskPoints.tasks.Total) * 100)}%)`}
                    </h2>
                    <div className='d-flex justify-content-around'>
                        <div className='d-flex flex-column'>
                            {taskData.difficulties.map(difficultyJson => {
                                const numComplete = getCompletedTasksWithDifficulty(difficultyJson.value, taskStatus)
                                    .length;
                                const totalTasks = maxCompletableTaskPoints.tasks[difficultyJson.value];
                                return (
                                    <div key={difficultyJson.value}>
                                        {`${difficultyJson.label}: ${numComplete} / ${totalTasks}`}
                                    </div>
                                );
                            })}
                        </div>
                        <div className='d-flex flex-column'>
                            {regionsToShow.map(region => {
                                const numComplete = getCompletedTasksInArea(region, taskStatus).length;
                                const totalTasks = maxCompletableTaskPoints.tasks[region];
                                return <div key={region}>{`${region}: ${numComplete} / ${totalTasks}`}</div>;
                            })}
                        </div>
                    </div>
                </Card>
                <Card bg='dark' text='white' className='mt-3 p-2 text-center'>
                    <h2>
                        {`Points Earned: ${getPointsEarned(taskStatus)} / ${maxCompletableTaskPoints.points.Total}`}
                    </h2>
                    <div className='d-flex justify-content-around'>
                        <div className='d-flex flex-column'>
                            {taskData.difficulties.map(difficultyJson => {
                                const numEarned = getPointsEarned(taskStatus, null, difficultyJson.value);
                                const totalPoints = maxCompletableTaskPoints.points[difficultyJson.value];
                                return (
                                    <div key={difficultyJson.value}>
                                        {`${difficultyJson.label}: ${numEarned} / ${totalPoints}`}
                                    </div>
                                );
                            })}
                        </div>
                        <div className='d-flex flex-column'>
                            {regionsToShow.map(region => {
                                const numEarned = getPointsEarned(taskStatus, region);
                                const totalPoints = maxCompletableTaskPoints.points[region];
                                return <div key={region}>{`${region}: ${numEarned} / ${totalPoints}`}</div>;
                            })}
                        </div>
                    </div>
                </Card>
            </CardDeck>
            <Card bg='dark' text='white' className='mt-3'>
                <Tabs
                    fill
                    defaultActiveKey='all'
                    className='tab-bar-secondary'
                    style={{ margin: '0', borderRadius: '.25rem .25rem 0rem 0rem' }}
                >
                    <Tab eventKey='all' title='All Tasks'>
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
                            hideTodoTasks={hideTodoTasks}
                            setHideTodoTasks={setHideTodoTasks}
                            hiscores={hiscores}
                            refreshHiscores={refreshHiscores}
                        />
                    </Tab>
                    <Tab eventKey='random' title='Generate Random Task'>
                        <RandomTaskGenerator
                            refreshHiscores={refreshHiscores}
                            hiscores={hiscores}
                            unlockedRegions={regionsToShow}
                            taskStatus={taskStatus}
                            updateTaskStatus={updateTaskStatus}
                        />
                    </Tab>
                    <Tab eventKey='todo' title='To-Do List'>
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
                            hiscores={hiscores}
                            refreshHiscores={refreshHiscores}
                        />
                    </Tab>
                </Tabs>
            </Card>
        </>
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
    hideTodoTasks,
    setHideTodoTasks,
    hiscores,
    refreshHiscores,
    taskFilters = [],
}) {
    const [selectedArea, setSelectedArea] = useState('All');
    const [selectedReqs, setSelectedReqs] = useState('All');
    const [isSkillingProdigy, setIsSkillingProdigy] = useState(isRelicUnlocked('1,3'));

    const allFilters = [...taskFilters];
    if (selectedStatus === 'Incomplete') {
        allFilters.push(task => !isTaskComplete(task.id, taskStatus));
    } else if (selectedStatus === 'Complete') {
        allFilters.push(task => isTaskComplete(task.id, taskStatus));
    }
    if (hideLockedAreas) {
        allFilters.push(task => {
            return isTaskCompletableWithRegions(task.id, unlockedRegions);
        });
    }
    if (!showHiddenTasks) {
        allFilters.push(task => !isTaskHidden(task.id, taskStatus));
    }
    if (hideTodoTasks) {
        allFilters.push(task => !isTaskOnTodoList(task.id, taskStatus));
    }
    if (selectedReqs === 'Missing') {
        allFilters.push(task => !isTaskCompletable(task.id, hiscores, isSkillingProdigy));
    } else if (selectedReqs === 'Have') {
        allFilters.push(task => isTaskCompletable(task.id, hiscores, isSkillingProdigy));
    }

    return (
        <Card bg='dark' text='white' style={{ border: '2px solid #6c757d', borderRadius: '0rem 0rem .25rem .25rem' }}>
            <div className='m-3 text-center'>
                <Row>
                    <Col lg={2}>
                        Hiscores lookup:
                        <HiscoreLookup refreshStateCallback={refreshHiscores} />
                        <Form.Check
                            label='Include Skilling Prodigy boost'
                            defaultChecked={isSkillingProdigy}
                            onChange={event => {
                                setIsSkillingProdigy(event.target.checked);
                            }}
                        />
                        <Divider />
                        <Form.Check
                            label='Hide tasks in locked areas'
                            checked={hideLockedAreas}
                            onChange={() => setHideLockedAreas(prevHideLocked => !prevHideLocked)}
                        />
                        <Form.Check
                            label={`Show hidden tasks (${taskStatus.hidden.length} tasks)`}
                            checked={showHiddenTasks}
                            onChange={() => setShowHiddenTasks(prevShowHidden => !prevShowHidden)}
                        />
                        {!plannedOnTodoList && (
                            <>
                                <Form.Check
                                    label='Hide to-do tasks'
                                    checked={hideTodoTasks}
                                    onChange={() => setHideTodoTasks(prevHideTodo => !prevHideTodo)}
                                />
                            </>
                        )}
                        <Tab.Container activeKey={selectedArea}>
                            <Divider />
                            <h5>Areas:</h5>
                            <Nav
                                variant='pills'
                                className={`mt-3 tab-bar-secondary ${
                                    screenSize.isSizeOrLarger('xl') ? 'flex-column' : 'd-flex justify-content-around'
                                }`}
                            >
                                <Nav.Item key='All'>
                                    <Nav.Link eventKey='All' onClick={() => setSelectedArea('All')}>
                                        All
                                    </Nav.Link>
                                </Nav.Item>
                                {hideLockedAreas
                                    ? unlockedRegions.map(area => (
                                          <Nav.Item key={area}>
                                              <Nav.Link eventKey={area} onClick={() => setSelectedArea(area)}>
                                                  {area}
                                              </Nav.Link>
                                          </Nav.Item>
                                      ))
                                    : taskData.areas.map(area => (
                                          <Nav.Item key={area}>
                                              <Nav.Link eventKey={area} onClick={() => setSelectedArea(area)}>
                                                  {area}
                                              </Nav.Link>
                                          </Nav.Item>
                                      ))}
                            </Nav>
                        </Tab.Container>
                        <Tab.Container activeKey={selectedStatus}>
                            <Divider />
                            <h5>Status:</h5>
                            <Nav
                                variant='pills'
                                className={`mt-3 mb-3 tab-bar-secondary ${
                                    screenSize.isSizeOrLarger('lg') ? 'flex-column' : 'd-flex justify-content-around'
                                }`}
                            >
                                <Nav.Item key='All'>
                                    <Nav.Link eventKey='All' onClick={() => setSelectedStatus('All')}>
                                        All
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item key='Complete'>
                                    <Nav.Link eventKey='Complete' onClick={() => setSelectedStatus('Complete')}>
                                        Complete
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item key='Incomplete'>
                                    <Nav.Link eventKey='Incomplete' onClick={() => setSelectedStatus('Incomplete')}>
                                        Incomplete
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                        <Tab.Container activeKey={selectedReqs}>
                            <Divider />
                            <h5>Skill requirements:</h5>
                            <Nav
                                variant='pills'
                                className={`mt-3 mb-3 tab-bar-secondary ${
                                    screenSize.isSizeOrLarger('lg') ? 'flex-column' : 'd-flex justify-content-around'
                                }`}
                            >
                                <Nav.Item key='All'>
                                    <Nav.Link eventKey='All' onClick={() => setSelectedReqs('All')}>
                                        All tasks
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item key='Missing'>
                                    <Nav.Link eventKey='Missing' onClick={() => setSelectedReqs('Missing')}>
                                        Missing requirements
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item key='Have'>
                                    <Nav.Link eventKey='Have' onClick={() => setSelectedReqs('Have')}>
                                        Have requirements
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Tab.Container>
                    </Col>

                    <Col lg={10}>
                        {plannedOnTodoList && (
                            <>
                                {screenSize.isSizeOrSmaller('md') && <Divider />}
                                <div className='d-flex justify-content-around align-items-center flex-wrap mb-2'>
                                    <h5 className='mb-1 mt-1 mr-2'>
                                        {`Incomplete Tasks on To-do List: ${plannedOnTodoList.tasks}`}
                                    </h5>
                                    <h5 className='mb-1 mt-1 mr-2'>
                                        {`Points Remaining on To-do List: ${plannedOnTodoList.points}`}
                                    </h5>
                                    <div className='mb-1 mt-1'>
                                        <Button
                                            variant='outline-light'
                                            onClick={() =>
                                                removeCompletedFromTodo(taskStatus, updateTaskStatus.setTodoListed)
                                            }
                                        >
                                            Remove completed tasks
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                        <Nav>
                            <TaskTable
                                area={selectedArea}
                                taskStatus={taskStatus}
                                updateTaskStatus={updateTaskStatus}
                                taskFilters={allFilters}
                                hiscores={hiscores}
                                isSkillingProdigy={isSkillingProdigy}
                            />
                        </Nav>
                    </Col>
                </Row>
            </div>
        </Card>
    );
}
