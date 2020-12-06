import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Accordion } from 'react-bootstrap';
import {
    isTaskComplete,
    isTaskCompletable,
    applyFilters,
    DIFFICULTY_POINTS,
    DIFFICULTIES,
    isTaskHidden,
    isTaskCompletableWithRegions,
} from '../util/task-util';
import { LOCALSTORAGE_KEYS } from '../util/browser-util';
import HiscoreLookup from './HiscoreLookup';
import taskData from '../resources/taskData.json';
import useLocalStorage from '../hooks/useLocalStorage';

export default function RandomTaskGenerator({
    taskStatus,
    updateTaskStatus,
    refreshHiscores,
    hiscores,
    unlockedRegions,
}) {
    const [onlyMetRequirements, setOnlyMetRequirements] = useState(false);
    const [currentTaskId, setCurrentTaskId] = useLocalStorage(LOCALSTORAGE_KEYS.GENERATED_TASK, -1);
    const [includedAreas, setIncludedAreas] = useState(unlockedRegions);
    const [useAreaFilter, setUseAreaFilter] = useState(true);
    const [includedDifficulties, setIncludedDifficulties] = useState(DIFFICULTIES);
    const [useDifficultyFilter, setUseDifficultyFilter] = useState(false);
    const [completeButtonEnabled, setCompleteButtonEnabled] = useState(currentTaskId >= 0);
    const [generateErrText, setGenerateErrText] = useState('');
    const taskFilters = [];

    taskFilters.push(
        task =>
            !isTaskComplete(task.id, taskStatus) &&
            !isTaskHidden(task.id, taskStatus) &&
            isTaskCompletableWithRegions(task.id, includedAreas)
    );
    taskFilters.push(task => !onlyMetRequirements || !hiscores || isTaskCompletable(task.id, hiscores));
    taskFilters.push(task => !useAreaFilter || includedAreas.includes(task.area));
    taskFilters.push(task => !useDifficultyFilter || includedDifficulties.includes(task.difficulty));

    return (
        <Card bg='dark' text='white' style={{ border: '2px solid #6c757d', borderRadius: '0rem 0rem .25rem .25rem' }}>
            <Row className='m-3'>
                <Col lg={4}>
                    <Card bg='dark' text='white' style={{ border: '0' }} className='p-3'>
                        <h4>Configure task generator:</h4>
                        <Accordion>
                            <Card bg='dark' text='white' style={{ border: '1px solid #6c757d' }} className='clickable'>
                                <Accordion.Toggle as={Card.Header} eventKey='0'>
                                    <h5>Skills</h5>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='0'>
                                    <div className='p-3'>
                                        <div className='pl-3'>
                                            <Form.Check
                                                label='Only include tasks with obtained requirements (requires hiscores lookup)'
                                                checked={onlyMetRequirements}
                                                onChange={() => setOnlyMetRequirements(prevState => !prevState)}
                                            />
                                        </div>
                                        <HiscoreLookup refreshStateCallback={refreshHiscores} />
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                            <Card bg='dark' text='white' style={{ border: '1px solid #6c757d' }} className='clickable'>
                                <Accordion.Toggle as={Card.Header} eventKey='1'>
                                    <h5>Areas</h5>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='1'>
                                    <div className='p-3'>
                                        <Form.Check
                                            label='Include all areas'
                                            checked={!useAreaFilter}
                                            onChange={event => {
                                                setUseAreaFilter(!event.target.checked);
                                                if (event.target.checked) {
                                                    setIncludedAreas(unlockedRegions);
                                                }
                                            }}
                                        />
                                        <Form.Control
                                            as='select'
                                            multiple
                                            htmlSize='5'
                                            value={includedAreas}
                                            onChange={event => {
                                                setUseAreaFilter(true);
                                                const { options } = event.target;
                                                const selectedAreas = [];
                                                for (let i = 0, l = options.length; i < l; i++) {
                                                    if (options[i].selected) {
                                                        selectedAreas.push(options[i].value);
                                                    }
                                                }
                                                setIncludedAreas(selectedAreas);
                                            }}
                                        >
                                            {unlockedRegions.map(area => (
                                                <option key={area}>{area}</option>
                                            ))}
                                        </Form.Control>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                            <Card bg='dark' text='white' style={{ border: '1px solid #6c757d' }} className='clickable'>
                                <Accordion.Toggle as={Card.Header} eventKey='2'>
                                    <h5>Difficulties</h5>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey='2'>
                                    <div className='p-3'>
                                        <Form.Check
                                            label='Include all difficulties'
                                            checked={!useDifficultyFilter}
                                            onChange={event => {
                                                setUseDifficultyFilter(!event.target.checked);
                                                if (event.target.checked) {
                                                    setIncludedDifficulties(DIFFICULTIES);
                                                }
                                            }}
                                        />
                                        <Form.Control
                                            as='select'
                                            multiple
                                            htmlSize='5'
                                            value={includedDifficulties}
                                            onChange={event => {
                                                setUseDifficultyFilter(true);
                                                const { options } = event.target;
                                                const selectedDifficulties = [];
                                                for (let i = 0, l = options.length; i < l; i++) {
                                                    if (options[i].selected) {
                                                        selectedDifficulties.push(options[i].value);
                                                    }
                                                }
                                                setIncludedDifficulties(selectedDifficulties);
                                            }}
                                        >
                                            {DIFFICULTIES.map(difficulty => (
                                                <option key={difficulty}>{difficulty}</option>
                                            ))}
                                        </Form.Control>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Card>
                </Col>
                <Col>
                    <Card
                        bg='dark'
                        text='white'
                        style={{ border: '1px solid #6c757d', borderRadius: '1rem' }}
                        className='p-3 text-center'
                    >
                        <h4>Current Generated Task:</h4>
                        <>
                            <div className='m-3'>
                                {currentTaskId === -1 ? (
                                    <div>No active task, click "Generate new task" to get your next task!</div>
                                ) : (
                                    <>
                                        <h5>{`${taskData.tasksById[currentTaskId].name}`}</h5>
                                        <div className='mb-1'>{taskData.tasksById[currentTaskId].description}</div>
                                        <div className='small'>
                                            {`Area: ${taskData.tasksById[currentTaskId].area} | ` +
                                                `Difficulty: ${taskData.tasksById[currentTaskId].difficulty} | ` +
                                                `Value: ${
                                                    DIFFICULTY_POINTS[taskData.tasksById[currentTaskId].difficulty]
                                                } pts`}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className='mt-3 text-center'>
                                <Button
                                    variant='outline-light'
                                    onClick={() => {
                                        setGenerateErrText('');
                                        const taskPool = applyFilters(taskData.tasks, taskFilters);
                                        if (taskPool.length === 0) {
                                            setGenerateErrText(
                                                'No tasks found with the given criteria! Check your configuration and try again.'
                                            );
                                            return;
                                        }
                                        const taskId = Math.floor(Math.random() * taskPool.length);
                                        const newTask = taskPool[taskId];
                                        setCompleteButtonEnabled(true);
                                        setCurrentTaskId(newTask.id);
                                    }}
                                >
                                    Generate new task
                                </Button>
                                <Button
                                    variant='light'
                                    className='ml-2'
                                    onClick={() => {
                                        setCompleteButtonEnabled(false);
                                        updateTaskStatus.setCompleted(currentTaskId, true);
                                        setCurrentTaskId(-1);
                                    }}
                                    disabled={!completeButtonEnabled}
                                >
                                    Complete task
                                </Button>
                                {generateErrText && <p className='mt-1 text-danger small'>{generateErrText}</p>}
                            </div>
                        </>
                    </Card>
                </Col>
            </Row>
        </Card>
    );
}
