import React, { useState } from "react";
import { Card, CardDeck, Form, FormControl, InputGroup } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import { useParams } from "react-router";
import { INITIAL_REGIONS_STATE, REGIONS } from '../util/region-util';
import { getFormatters, getBoostedLevel } from '../util/calculator-util';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import calculatorData from '../resources/calculatorData.json';
import MultiplierGroup from "../components/MultiplierGroup";
import LevelExpInput from "../components/LevelExpInput";
import useLevel from "../hooks/useLevel";
import useMultiplier from "../hooks/useMultiplier";
import { isRelicUnlocked } from "../util/relic-util";
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from "../util/browser-util";

export default function SkillCalculator() {
    const currentLevel = useLevel(1);
    const targetLevel = useLevel(currentLevel.level + 1);
    const [totalLevel, setTotalLevel] = useState(1000);
    const expMultiplier = useMultiplier();
    const inputMultiplier = useMultiplier();
    const outputMultiplier = useMultiplier();
    const [useLevelFilter, setUseLevelFilter] = useState(false);
    const [isSkillingProdigy, setIsSkillingProdigy] = useState(isRelicUnlocked('1,3'));
    const [useAreaFilter, setUseAreaFilter] = useState(true);
    const [includedAreas, setIncludedAreas] = useState(getFromLocalStorage(LOCALSTORAGE_KEYS.UNLOCKED_REGIONS, INITIAL_REGIONS_STATE));
    const { skill } = useParams();

    const skillData = calculatorData.calculators[skill];
    if (!skillData) {
        return (
            <h4 className="mt-5 light-text text-center">
                No calculator found for "{skill}". Check your link and try again.
            </h4>
        );
    }

    const { levelFormatter, iconFormatter, amountFormatter, inputListFormatter, outputListFormatter } = getFormatters();
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
            "formatExtraData": { "level": currentLevel.level, "isSkillingProdigy": isSkillingProdigy }
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
                "options": skillData.categories
            })
        },
        {
            "dataField": "amount",
            "text": "Amount",
            "isDummyField": true,
            "sort": true,
            "formatter": amountFormatter,
            "sortValue": (cell, row) => row.exp,
            "formatExtraData": { "current": currentLevel.exp, "target": targetLevel.exp, "expMultiplier": expMultiplier },
            "headerStyle": { width: '10%' }
        },
        {
            "dataField": "inputs",
            "text": "Inputs",
            "formatter": inputListFormatter,
            "formatExtraData": { "current": currentLevel.exp, "target": targetLevel.exp, "expMultiplier": expMultiplier, "countMultiplier": inputMultiplier }
        },
        {
            "dataField": "outputs",
            "text": "Outputs",
            "formatter": outputListFormatter,
            "formatExtraData": { "current": currentLevel.exp, "target": targetLevel.exp, "expMultiplier": expMultiplier, "countMultiplier": outputMultiplier }
        }
    ];

    return (
        <div className="content-wrapper">
            <h1 className="mt-2 light-text text-center">{skillData.name}</h1>
            <CardDeck style={{ margin: '1rem' }} >
                <Card bg='dark' text='white' >
                    <div className="p-3">
                        <MultiplierGroup
                            title="Exp multipliers"
                            multiplierData={skillData.expMultipliers}
                            globalMultiplierData={calculatorData.globalMultipliers.expMultipliers}
                            multipliers={expMultiplier}
                        />
                        <MultiplierGroup
                            title="Input multipliers"
                            multiplierData={skillData.inputMultipliers}
                            multipliers={inputMultiplier}
                        />
                        <MultiplierGroup
                            title="Output multipliers"
                            multiplierData={skillData.outputMultipliers}
                            multipliers={outputMultiplier}
                        />
                        {!skillData.isCombatSkill && (
                            <React.Fragment>
                                <h4>Boosts:</h4>
                                <div className="pl-2">
                                    <Form.Check
                                        label="Relic - Skilling Prodigy (+12)"
                                        defaultChecked={isSkillingProdigy}
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
                    {/* TODO
                    <HiscoreLookup
                        setLevelCallback={currentLevel.updateByLevel}
                        setExpCallback={currentLevel.updateByExp}
                    /> */}
                    <LevelExpInput
                        title="Current"
                        level={currentLevel.level}
                        exp={currentLevel.exp}
                        setLevelCallback={currentLevel.updateByLevel}
                        setExpCallback={currentLevel.updateByExp}
                    />
                    <LevelExpInput
                        title="Target"
                        level={targetLevel.level}
                        exp={targetLevel.exp}
                        setLevelCallback={targetLevel.updateByLevel}
                        setExpCallback={targetLevel.updateByExp}
                    />
                    <InputGroup className="p-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Total Level (for Equilibrium)</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={totalLevel}
                            onChange={(event) => setTotalLevel(event.target.value)}
                        />
                    </InputGroup>
                    <div className="p-3">
                        <h5>Remaining until goal:</h5>
                        <ul>
                            <li>{targetLevel.exp - currentLevel.exp} Experience</li>
                            <li>{targetLevel.level - currentLevel.level} Levels</li>
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
                                        setIncludedAreas(REGIONS);
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
                                {REGIONS.map(area => <option key={area}>{area}</option>)}
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
                        data={applyFilters(skillData.actions, currentLevel.level, useLevelFilter, isSkillingProdigy, useAreaFilter, includedAreas)}
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
