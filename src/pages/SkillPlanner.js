import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { useParams } from 'react-router';
import SelectSearch from 'react-select-search';
import update from 'immutability-helper';
import _ from 'lodash';
import { InlineIcon } from '@iconify/react';
import plusIcon from '@iconify/icons-mdi/plus';
import {
    calculateTotalGained,
    generatePlannerActivities,
    getBaseMultiplier,
    getCalcData,
    getFormatters,
} from '../util/calculator-util';
import calculatorData from '../resources/calculatorData.json';
import MultiplierGroup from '../components/MultiplierGroup';
import LevelExpInput from '../components/LevelExpInput';
import useLevel from '../hooks/useLevel';
import useMultiplier from '../hooks/useMultiplier';
import { isRelicUnlocked } from '../util/relic-util';
import HiscoreLookup from '../components/HiscoreLookup';
import { getLevelForExp } from '../util/exp-table';
import { getContentWidthClass } from '../util/settings-util';
import DoubleScrollbar from '../components/DoubleScrollbar';
import 'react-select-search/style.css';
import { Container } from '../../node_modules/react-bootstrap/esm/index';

export default function SkillPlanner() {
    const currentLevel = useLevel(1);
    const targetLevel = useLevel(Math.min(currentLevel.level + 1, 99));
    const [totalLevel, setTotalLevel] = useState(1000);
    const [baseExpMultiplier, setBaseExpMultiplier] = useState('5');
    const expMultiplier = useMultiplier();
    const inputMultiplier = useMultiplier();
    const outputMultiplier = useMultiplier();
    const { skill } = useParams();
    const [useDoubleCast, setUseDoubleCast] = useState(isRelicUnlocked('3,3') && skill === 'magic');
    const [useBotanist, setUseBotanist] = useState(isRelicUnlocked('5,1') && skill === 'farming');
    const [currentActivity, setCurrentActivity] = useState();
    const [activityAmount, setActivityAmount] = useState(1);
    const [plannedActivities, setPlannedActivities] = useState([]);

    let skillData;
    useEffect(() => {
        if (!skillData) {
            return;
        }

        setBaseExpMultiplier(getBaseMultiplier());
        // only want this to run a single time on first load, so don't depend on anything here
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        expMultiplier.clear();
        inputMultiplier.clear();
        outputMultiplier.clear();
        setUseDoubleCast(isRelicUnlocked('3,3') && skill === 'magic');
        setUseBotanist(isRelicUnlocked('5,1') && skill === 'farming');
    }, [skill]);

    skillData = calculatorData.calculators[skill];
    if (!skillData) {
        return (
            <h4 className='mt-5 light-text text-center'>
                {`No calculator found for "${skill}". Check your link and try again.`}
            </h4>
        );
    }

    const activityOptions = generatePlannerActivities(skill);
    const {
        nameFormatter,
        expFormatter,
        inputAmountFormatter,
        plannerTotalExpFormatter,
        deleteFormatter,
    } = getFormatters();
    const tableColumns = [
        {
            dataField: 'name',
            text: 'Activity',
            headerStyle: { width: '12rem' },
            formatter: nameFormatter,
        },
        {
            dataField: 'amount',
            text: 'Amount',
            headerStyle: { width: '7rem' },
            isDummyField: true,
            formatter: inputAmountFormatter,
            formatExtraData: {
                onChange: (id, newAmount) => {
                    const activityIdx = plannedActivities.findIndex(action => action.id === id);
                    setPlannedActivities(update(plannedActivities, { [activityIdx]: { amount: { $set: newAmount } } }));
                },
            },
        },
        {
            dataField: 'exp',
            text: 'Exp each',
            headerStyle: { width: '5rem' },
            formatter: expFormatter,
            formatExtraData: {
                baseMultiplier: baseExpMultiplier,
                expMultiplier,
                totalLevel,
            },
        },
        {
            dataField: 'total',
            text: 'Total exp',
            headerStyle: { width: '5rem' },
            isDummyField: true,
            formatter: plannerTotalExpFormatter,
            formatExtraData: {
                baseMultiplier: baseExpMultiplier,
                expMultiplier,
                totalLevel,
            },
        },
        {
            dataField: 'delete',
            text: 'Delete',
            headerStyle: { width: '5rem' },
            isDummyField: true,
            formatter: deleteFormatter,
            classes: 'clickable',
            events: {
                onClick: (event, column, columnIndex, row) => {
                    const activity = plannedActivities.find(action => action.id === row.id);
                    setPlannedActivities(_.without(plannedActivities, activity));
                },
            },
        },
    ];

    const totalGained = calculateTotalGained(
        currentLevel.exp,
        plannedActivities,
        baseExpMultiplier,
        expMultiplier,
        totalLevel
    );
    return (
        <div className={getContentWidthClass()}>
            <h1 className='mt-2 light-text text-center'>{`${skillData.name} Planner`}</h1>
            <Container fluid>
                <Row className='m-3 flex-lg-nowrap'>
                    <Col lg={3}>
                        <Card bg='dark' text='white' className='mb-2'>
                            <h4 className='pt-3 pl-3'>Level/Experience:</h4>
                            <HiscoreLookup
                                skill={skill}
                                setExpCallback={newExp => {
                                    currentLevel.updateByExp(newExp);
                                    targetLevel.updateByLevel(Math.min(getLevelForExp(newExp) + 1, 99));
                                }}
                                setTotalLvlCallback={setTotalLevel}
                            />
                            <LevelExpInput
                                title='Current lvl/exp'
                                level={currentLevel.level}
                                exp={currentLevel.exp}
                                setLevelCallback={currentLevel.updateByLevel}
                                setExpCallback={currentLevel.updateByExp}
                            />
                            <InputGroup className='p-3'>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Total Level</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl value={totalLevel} onChange={event => setTotalLevel(event.target.value)} />
                            </InputGroup>
                        </Card>
                        <Card bg='dark' text='white' className='mt-2 mb-2'>
                            <div className='p-3'>
                                <h4>League base multiplier:</h4>
                                <div className='pl-2 pb-2'>
                                    <Form.Check
                                        label='5x'
                                        inline
                                        type='radio'
                                        id='5'
                                        checked={baseExpMultiplier === '5'}
                                        onChange={event => {
                                            setBaseExpMultiplier(event.target.id);
                                        }}
                                    />
                                    <Form.Check
                                        label='8x'
                                        inline
                                        type='radio'
                                        id='8'
                                        checked={baseExpMultiplier === '8'}
                                        onChange={event => {
                                            setBaseExpMultiplier(event.target.id);
                                        }}
                                    />
                                    <Form.Check
                                        label='12x'
                                        inline
                                        type='radio'
                                        id='12'
                                        checked={baseExpMultiplier === '12'}
                                        onChange={event => {
                                            setBaseExpMultiplier(event.target.id);
                                        }}
                                    />
                                    <Form.Check
                                        label='16x'
                                        inline
                                        type='radio'
                                        id='16'
                                        checked={baseExpMultiplier === '16'}
                                        onChange={event => {
                                            setBaseExpMultiplier(event.target.id);
                                        }}
                                    />
                                </div>
                                <MultiplierGroup
                                    title='Exp multipliers'
                                    multiplierData={skillData.expMultipliers}
                                    globalMultiplierData={calculatorData.globalMultipliers.expMultipliers}
                                    multipliers={expMultiplier}
                                />
                                <MultiplierGroup
                                    title='Input multipliers'
                                    multiplierData={skillData.inputMultipliers}
                                    multipliers={inputMultiplier}
                                />
                                {skill === 'farming' && (
                                    <>
                                        <h4>Output multiplier:</h4>
                                        <div className='pl-2'>
                                            <Form.Check
                                                label='Relic - Botanist'
                                                defaultChecked={useBotanist}
                                                onChange={event => {
                                                    setUseBotanist(event.target.checked);
                                                }}
                                            />
                                        </div>
                                    </>
                                )}
                                <MultiplierGroup
                                    title='Output multipliers'
                                    multiplierData={skillData.outputMultipliers}
                                    multipliers={outputMultiplier}
                                />
                                {skill === 'magic' && (
                                    <>
                                        <h4>Input Modifiers:</h4>
                                        <div className='pl-2'>
                                            <Form.Check
                                                label='Relic - Double Cast'
                                                defaultChecked={useDoubleCast}
                                                onChange={event => {
                                                    setUseDoubleCast(event.target.checked);
                                                }}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg='dark' text='white'>
                            <Card.Body>
                                <h4>Add a planned activity:</h4>

                                <Row>
                                    <Col>
                                        <div className='mt-1 mb-1'>
                                            <SelectSearch
                                                options={activityOptions}
                                                name='task'
                                                placeholder='Begin typing to find an activity...'
                                                search
                                                renderOption={renderActivity}
                                                onChange={setCurrentActivity}
                                            />
                                        </div>
                                    </Col>
                                    <Col lg={2}>
                                        <InputGroup className='mt-1 mb-1'>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>Amount</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                type='number'
                                                value={activityAmount}
                                                onChange={event => setActivityAmount(event.target.value)}
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col lg={2}>
                                        <Button
                                            className='mt-1 mb-1'
                                            variant='outline-light'
                                            onClick={() => {
                                                const calcData = getCalcData(skill, currentActivity);
                                                setPlannedActivities([
                                                    ...plannedActivities,
                                                    { ...calcData, amount: activityAmount },
                                                ]);
                                                setActivityAmount(1);
                                            }}
                                        >
                                            <InlineIcon icon={plusIcon} /> Add to plan
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card bg='dark' text='white' className='mt-2'>
                            <Card.Body>
                                <p>
                                    Upon completion, you will be level <b>{totalGained.level}</b> with{' '}
                                    <b>{totalGained.exp}</b> exp ({totalGained.expToNextLevel} exp from next level).
                                </p>

                                <DoubleScrollbar>
                                    <BootstrapTable
                                        bootstrap4
                                        keyField='id'
                                        data={plannedActivities}
                                        columns={tableColumns}
                                        bordered={false}
                                        classes='light-text'
                                        filterPosition='top'
                                        hover
                                        rowClasses='text-light'
                                    />
                                </DoubleScrollbar>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

function renderActivity(props, option, snapshot, className) {
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <button {...props} className={className} type='button'>
            <img alt='' className='mr-1' src={option.icon} />
            {option.name}
            {option.description && <span className='small ml-1'>{`(${option.description})`}</span>}
        </button>
    );
}
