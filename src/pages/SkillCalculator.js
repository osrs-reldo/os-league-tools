import React, { useState, useEffect } from 'react';
import { Card, CardDeck, Form, FormControl, InputGroup } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { useParams } from 'react-router';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import { INITIAL_REGIONS_STATE, REGIONS } from '../util/region-util';
import { getFormatters, getBoostedLevel, getBaseMultiplier } from '../util/calculator-util';
import calculatorData from '../resources/calculatorData.json';
import MultiplierGroup from '../components/MultiplierGroup';
import LevelExpInput from '../components/LevelExpInput';
import useLevel from '../hooks/useLevel';
import useMultiplier from '../hooks/useMultiplier';
import { isRelicUnlocked } from '../util/relic-util';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../util/browser-util';
import DoubleScrollbar from '../components/DoubleScrollbar';
import HiscoreLookup from '../components/HiscoreLookup';
import { getLevelForExp } from '../util/exp-table';
import { getContentWidthClass } from '../util/settings-util';

export default function SkillCalculator() {
    const currentLevel = useLevel(1);
    const targetLevel = useLevel(Math.min(currentLevel.level + 1, 99));
    const [totalLevel, setTotalLevel] = useState(1000);
    const [baseExpMultiplier, setBaseExpMultiplier] = useState('5');
    const expMultiplier = useMultiplier();
    const inputMultiplier = useMultiplier();
    const outputMultiplier = useMultiplier();
    const { skill } = useParams();
    const [useLevelFilter, setUseLevelFilter] = useState(false);
    const [useSkillingProdigy, setUseSkillingProdigy] = useState(isRelicUnlocked('1,3'));
    const [useDoubleCast, setUseDoubleCast] = useState(isRelicUnlocked('3,3') && skill === 'magic');
    const [useBotanist, setUseBotanist] = useState(isRelicUnlocked('5,1') && skill === 'farming');
    const [useAreaFilter, setUseAreaFilter] = useState(true);
    const [includedAreas, setIncludedAreas] = useState(
        getFromLocalStorage(LOCALSTORAGE_KEYS.UNLOCKED_REGIONS, INITIAL_REGIONS_STATE)
    );

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
        setUseSkillingProdigy(isRelicUnlocked('1,3') && !skillData.isCombatSkill);
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

    const {
        nameFormatter,
        levelFormatter,
        amountFormatter,
        outputListFormatter,
        inputListFormatter,
        expFormatter,
    } = getFormatters();

    const data = applyFilters(
        skillData.actions,
        currentLevel.level,
        useLevelFilter,
        useSkillingProdigy,
        useAreaFilter,
        includedAreas
    );

    const columns = [
        {
            dataField: 'id',
            text: 'id',
            hidden: true,
        },
        {
            dataField: 'level',
            text: 'Level',
            sort: true,
            headerStyle: { width: '5.5rem' },
            formatter: levelFormatter,
            formatExtraData: {
                level: currentLevel.level,
                isSkillingProdigy: useSkillingProdigy,
            },
        },
        {
            dataField: 'name',
            text: 'Activity',
            sort: true,
            headerStyle: { width: '15rem' },
            formatter: nameFormatter,
            filter: textFilter({ placeholder: 'Filter...' }),
        },
        {
            dataField: 'exp',
            text: 'Exp',
            sort: true,
            headerStyle: { width: '5rem' },
            formatter: expFormatter,
            formatExtraData: {
                baseMultiplier: baseExpMultiplier,
                expMultiplier,
                totalLevel,
            },
        },
        {
            dataField: 'category',
            text: 'Category',
            headerStyle: { width: '10rem' },
            filter: selectFilter({
                options: skillData.categories,
            }),
        },
        {
            dataField: 'amount',
            text: 'Amount',
            isDummyField: true,
            sort: true,
            headerStyle: { width: '7rem' },
            formatter: amountFormatter,
            sortValue: (cell, row) => row.exp,
            formatExtraData: {
                current: currentLevel.exp,
                target: targetLevel.exp,
                baseMultiplier: baseExpMultiplier,
                expMultiplier,
                totalLevel,
            },
        },
        {
            dataField: 'inputs',
            text: 'Inputs',
            formatter: inputListFormatter,
            headerStyle: { width: '10rem' },
            classes: 'small',
            formatExtraData: {
                current: currentLevel.exp,
                target: targetLevel.exp,
                baseMultiplier: baseExpMultiplier,
                expMultiplier,
                totalLevel,
                countMultiplier: inputMultiplier,
                useDoubleCast,
            },
            hidden: !data.some(datum => datum.inputs.length > 0),
        },
        {
            dataField: 'outputs',
            text: 'Outputs',
            headerStyle: { width: '10rem' },
            classes: 'small',
            formatter: outputListFormatter,
            formatExtraData: {
                current: currentLevel.exp,
                target: targetLevel.exp,
                baseMultiplier: baseExpMultiplier,
                expMultiplier,
                totalLevel,
                countMultiplier: outputMultiplier,
                useBotanist,
            },
            hidden: !data.some(datum => datum.outputs.length > 0),
        },
    ];

    return (
        <div className={getContentWidthClass()}>
            <h1 className='mt-2 light-text text-center'>{skillData.name}</h1>
            <CardDeck>
                <Card bg='dark' text='white' className='mt-2 mb-2' style={{ minWidth: '300px' }}>
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
                        {!skillData.isCombatSkill && (
                            <>
                                <h4>Boosts:</h4>
                                <div className='pl-2'>
                                    <Form.Check
                                        label='Relic - Skilling Prodigy (+12)'
                                        defaultChecked={useSkillingProdigy}
                                        onChange={event => {
                                            setUseSkillingProdigy(event.target.checked);
                                        }}
                                    />
                                </div>
                            </>
                        )}
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
                <Card bg='dark' text='white' className='mt-2 mb-2' style={{ minWidth: '300px' }}>
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
                        title='Current'
                        level={currentLevel.level}
                        exp={currentLevel.exp}
                        setLevelCallback={currentLevel.updateByLevel}
                        setExpCallback={currentLevel.updateByExp}
                    />
                    <LevelExpInput
                        title='Target'
                        level={targetLevel.level}
                        exp={targetLevel.exp}
                        setLevelCallback={targetLevel.updateByLevel}
                        setExpCallback={targetLevel.updateByExp}
                    />
                    <InputGroup className='p-3'>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Total Level</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={totalLevel} onChange={event => setTotalLevel(event.target.value)} />
                    </InputGroup>
                    <div className='p-3'>
                        <h5>Remaining until goal:</h5>
                        <ul>
                            <li>{`${targetLevel.exp - currentLevel.exp} Experience`}</li>
                            <li>{`${targetLevel.level - currentLevel.level} Levels`}</li>
                        </ul>
                    </div>
                </Card>
                <Card bg='dark' text='white' className='mt-2 mb-2' style={{ minWidth: '300px' }}>
                    <div className='p-3'>
                        <h4>Filters:</h4>
                        <div className='pl-2 mb-1'>
                            <Form.Check
                                label='Hide actions with missing level requirement'
                                onChange={event => {
                                    setUseLevelFilter(event.target.checked);
                                }}
                            />
                        </div>
                        <h4>Areas:</h4>
                        <div className='pl-2'>
                            <Form.Check
                                label='Include all areas'
                                checked={!useAreaFilter}
                                onChange={event => {
                                    setUseAreaFilter(!event.target.checked);
                                    if (event.target.checked) {
                                        setIncludedAreas(REGIONS);
                                    }
                                }}
                            />
                            <Form.Control
                                as='select'
                                multiple
                                htmlSize='8'
                                disabled={!useAreaFilter}
                                value={includedAreas}
                                onChange={event => {
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
                                {REGIONS.map(area => (
                                    <option key={area}>{area}</option>
                                ))}
                            </Form.Control>
                        </div>
                    </div>
                </Card>
            </CardDeck>
            <Card bg='dark' text='white' className='mt-3'>
                <Card.Body>
                    <DoubleScrollbar>
                        <BootstrapTable
                            bootstrap4
                            keyField='id'
                            data={data}
                            columns={columns}
                            bordered={false}
                            classes='light-text'
                            filter={filterFactory()}
                            filterPosition='top'
                        />
                    </DoubleScrollbar>
                </Card.Body>
            </Card>
        </div>
    );
}

function applyFilters(actions, currentLevel, useLevelFilter, isSkillingProdigy, useAreaFilter, includedAreas) {
    let filteredActions = actions;
    if (useLevelFilter) {
        const boostedLevel = getBoostedLevel(currentLevel, isSkillingProdigy);
        filteredActions = filteredActions.filter(action => boostedLevel >= action.level);
    }
    if (useAreaFilter) {
        filteredActions = filteredActions.filter(action => {
            if (action.areas.includes('All')) {
                return true;
            }
            return action.areas.some(r => includedAreas.includes(r));
        });
    }
    return filteredActions;
}
