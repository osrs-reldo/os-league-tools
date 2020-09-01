import React, { useState } from "react";
import { Card, InputGroup, FormControl, CardDeck, Button, Form } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import calcWoodcutting from '../resources/calcWoodcutting.json';
import { getLevelForExp, getExpForLevel } from '../util/exp-table'
import { AREAS } from '../util/map-areas'
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';

const actions = calcWoodcutting.actions;

function levelFormatter(cell, row, rowIndex, levelData) {
    const boostedLevel = getBoostedLevel(levelData.level, levelData.isSkillingProdigy);
    return (
        <div className={cell <= boostedLevel ? "unlocked" : "locked"}>{cell}</div>
    );
}

function iconFormatter(cell, row) {
    return (
        <React.Fragment>
            <img src={row.icon} alt={cell} />
            {' ' + cell}
        </React.Fragment>
    );
}

const amountFormatter = (cell, row, rowIndex, exp) => {
    return calcActionsRemaining(exp.current, exp.target, row.exp, exp.expMultiplier);
}

const outputsFormatter = (cell, row, rowIndex, exp) => {
    const numOfActions = calcActionsRemaining(exp.current, exp.target, row.exp, exp.expMultiplier);
    return (
        <ul>
            {cell.map(output => {
                var amount = numOfActions * output.amount * output.chance * exp.outputMultiplier;
                amount = +amount.toFixed(2);
                return <li key={output.name}>{amount + ' ' + output.name}</li>;
            })}
        </ul>
    );
}

export default function Calculators() {
    const [currentLevel, setCurrentLevel] = useState("1");
    const [currentExp, setCurrentExp] = useState(getExpForLevel(1));
    const [targetLevel, setTargetLevel] = useState("99");
    const [targetExp, setTargetExp] = useState(getExpForLevel(99));
    const [expMultiplier, setExpMultiplier] = useState(1);
    const [outputMultiplier, setOutputMultiplier] = useState(1);
    const [useLevelFilter, setUseLevelFilter] = useState(false);
    const [isSkillingProdigy, setIsSkillingProdigy] = useState(false);
    const [useAreaFilter, setUseAreaFilter] = useState(false);
    const [includedAreas, setIncludedAreas] = useState(AREAS);

    const columns = [
        {
            "dataField": "id",
            "text": "id",
            "hidden": true
        },
        {
            "dataField": "level",
            "text": "Level",
            "sort": true,
            "headerStyle": { width: '10%' },
            "formatter": levelFormatter,
            "formatExtraData": { "level": currentLevel, "isSkillingProdigy": isSkillingProdigy }
        },
        {
            "dataField": "name",
            "text": "Activity",
            "sort": true,
            "formatter": iconFormatter,
            "filter": textFilter({ placeholder: "Filter..." })
        },
        {
            "dataField": "exp",
            "text": "Exp",
            "sort": true,
            "headerStyle": { width: '10%' }
        },
        {
            "dataField": "category",
            "text": "Category",
            "filter": selectFilter({
                "options": calcWoodcutting.categories
            })
        },
        {
            "dataField": "amount",
            "text": "Amount",
            "isDummyField": true,
            "sort": true,
            "formatter": amountFormatter,
            "formatExtraData": { "current": currentExp, "target": targetExp, "expMultiplier": expMultiplier },
            "headerStyle": { width: '10%' }
        },
        {
            "dataField": "outputs",
            "text": "Outputs",
            "formatter": outputsFormatter,
            "formatExtraData": { "current": currentExp, "target": targetExp, "expMultiplier": expMultiplier, "outputMultiplier": outputMultiplier }
        }
    ];

    return (
        <div className="content-wrapper">
            <h1 className="mt-2 light-text text-center">Woodcutting</h1>
            <CardDeck style={{ margin: '1rem' }} >
                <Card bg='dark' text='white' >
                    <div className="p-3">
                        <h4>Exp multipliers:</h4>
                        <div className="pl-2">
                            {calcWoodcutting.expMultipliers.map(multiplier => {
                                return (
                                    <Form.Check
                                        label={multiplier.name}
                                        key={multiplier.id}
                                        onChange={(event) => {
                                            if (event.target.checked) {
                                                setExpMultiplier(prevMultiplier => prevMultiplier * multiplier.multiplier);
                                            } else {
                                                setExpMultiplier(prevMultiplier => prevMultiplier / multiplier.multiplier);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <br />
                        <h4>Output multipliers:</h4>
                        <div className="pl-2">
                            {calcWoodcutting.outputMultipliers.map(multiplier => {
                                return (
                                    <Form.Check
                                        label={multiplier.name}
                                        key={multiplier.id}
                                        onChange={(event) => {
                                            if (event.target.checked) {
                                                setOutputMultiplier(prevMultiplier => prevMultiplier * multiplier.multiplier);
                                            } else {
                                                setOutputMultiplier(prevMultiplier => prevMultiplier / multiplier.multiplier);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </div>
                        {!calcWoodcutting.isCombatSkill && (
                            <React.Fragment>
                                <br />
                                <h4>Boosts:</h4>
                                <div className="pl-2">
                                    <Form.Check
                                        label="Relic - Skilling Prodigy (+10)"
                                        onChange={(event) => {
                                            setIsSkillingProdigy(event.target.checked);
                                        }}
                                    />
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </Card>
                <Card bg='dark' text='white' >
                    <h4 className="pt-3 pl-3">Level/Experience:</h4>
                    <InputGroup className="p-3">
                        {/* TODO implement hiscores lookup */}
                        <FormControl
                            placeholder="Username"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-light">Lookup</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <InputGroup className="p-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Current</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Level"
                            value={currentLevel}
                            onChange={(event) => {
                                setCurrentLevel(event.target.value);
                                setCurrentExp(getExpForLevel(event.target.value));
                            }}
                        />
                        <FormControl
                            placeholder="Exp"
                            value={currentExp}
                            onChange={(event) => {
                                setCurrentExp(event.target.value);
                                setCurrentLevel(getLevelForExp(event.target.value));
                            }}
                        />
                    </InputGroup>
                    <InputGroup className="p-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Target</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Level"
                            value={targetLevel}
                            onChange={(event) => {
                                setTargetLevel(event.target.value);
                                setTargetExp(getExpForLevel(event.target.value));
                            }}
                        />
                        <FormControl
                            placeholder="Exp"
                            value={targetExp}
                            onChange={(event) => {
                                setTargetExp(event.target.value);
                                setTargetLevel(getLevelForExp(event.target.value));
                            }}
                        />
                    </InputGroup>
                    <div className="p-3">
                        <h5>Remaining until goal:</h5>
                        <ul>
                            <li>{targetExp - currentExp} Experience</li>
                            <li>{targetLevel - currentLevel} Levels</li>
                        </ul>
                    </div>
                </Card>
                <Card bg='dark' text='white' >
                    <div className="p-3">
                        <h4>Filters:</h4>
                        <div className="pl-2">
                            <Form.Check
                                label="Hide actions with missing level requirement"
                                onChange={(event) => {
                                    setUseLevelFilter(event.target.checked);
                                }}
                            />
                        </div>
                        <br />
                        <h4>Areas:</h4>
                        <div className="pl-2">
                            <Form.Check
                                label="Include all areas"
                                checked={!useAreaFilter}
                                onChange={(event) => {
                                    setUseAreaFilter(!event.target.checked);
                                    if (event.target.checked) {
                                        setIncludedAreas(AREAS);
                                    }
                                }}
                            />
                            <Form.Control
                                as="select"
                                multiple
                                htmlSize='8'
                                disabled={!useAreaFilter}
                                value={includedAreas}
                                onChange={event => {
                                    const options = event.target.options;
                                    const selectedAreas = [];
                                    for (var i = 0, l = options.length; i < l; i++) {
                                        if (options[i].selected) {
                                            selectedAreas.push(options[i].value);
                                        }
                                    }
                                    setIncludedAreas(selectedAreas)
                                }}
                            >
                                {AREAS.map(area => <option key={area}>{area}</option>)}
                            </Form.Control>
                        </div>
                    </div>
                </Card>
            </CardDeck>
            <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                <Card.Body>
                    <BootstrapTable
                        bootstrap4
                        keyField='id'
                        data={applyFilters(actions, currentLevel, useLevelFilter, isSkillingProdigy, useAreaFilter, includedAreas)}
                        columns={columns}
                        bordered={false}
                        classes="light-text"
                        filter={filterFactory()}
                        filterPosition="top"
                    />
                </Card.Body>
            </Card>
        </div>
    );
}

function calcActionsRemaining(curExp, targetExp, activityExp, expMultiplier) {
    const expLeft = targetExp - curExp;
    const expPerAction = activityExp * expMultiplier;
    return Math.ceil(expLeft / expPerAction);
}

function applyFilters(actions, currentLevel, useLevelFilter, isSkillingProdigy, useAreaFilter, includedAreas) {
    let filteredActions = actions;
    if (useLevelFilter) {
        const boostedLevel = getBoostedLevel(currentLevel, isSkillingProdigy);
        filteredActions = filteredActions.filter(action => boostedLevel >= action.level);
    }
    if (useAreaFilter) {
        filteredActions = filteredActions.filter(action => {
            if (action.areas.includes("All")) {
                return true;
            }
            return action.areas.some(r => includedAreas.includes(r));
        });
    }
    return filteredActions;
}

function getBoostedLevel(currentLevel, isSkillingProdigy) {
    return isSkillingProdigy ? Math.min(99, parseInt(currentLevel) + 10) : currentLevel;
}