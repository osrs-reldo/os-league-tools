import React, { useState } from "react";
import { Card, CardDeck, Form } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import { MAP_AREAS } from '../util/constants';
import { getSkillFromCalcUrl } from '../util/browser-util';
import { getFormatters, getBoostedLevel } from '../util/calculator-util';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import calculatorData from '../resources/calculatorData.json';
import MultiplierGroup from "../components/MultiplierGroup";
import LevelExpInput from "../components/LevelExpInput";
import HiscoreLookup from "../components/HiscoreLookup";
import useLevel from "../hooks/useLevel";

export default function SkillCalculator(props) {
    const [currentLevel, currentExp, setCurrentLevel, setCurrentExp] = useLevel(1);
    const [targetLevel, targetExp, setTargetLevel, setTargetExp] = useLevel(currentLevel + 1);
    const [expMultiplier, setExpMultiplier] = useState(1);
    const [outputMultiplier, setOutputMultiplier] = useState(1);
    const [useLevelFilter, setUseLevelFilter] = useState(false);
    const [isSkillingProdigy, setIsSkillingProdigy] = useState(false);
    const [useAreaFilter, setUseAreaFilter] = useState(false);
    const [includedAreas, setIncludedAreas] = useState(MAP_AREAS);

    const skill = getSkillFromCalcUrl(props.location.pathname);
    const skillData = calculatorData.calculators[skill];
    if (!skillData) {
        return (
            <h4 className="mt-5 light-text text-center">
                No calculator found for "{skill}". Check your link and try again.
            </h4>
        );
    }

    const { levelFormatter, iconFormatter, amountFormatter, itemListFormatter } = getFormatters();
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
                "options": skillData.categories
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
            "dataField": "inputs",
            "text": "Inputs",
            "formatter": itemListFormatter,
            "formatExtraData": { "current": currentExp, "target": targetExp, "expMultiplier": expMultiplier }
        },
        {
            "dataField": "outputs",
            "text": "Outputs",
            "formatter": itemListFormatter,
            "formatExtraData": { "current": currentExp, "target": targetExp, "expMultiplier": expMultiplier, "countMultiplier": outputMultiplier }
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
                            setMultiplierCallback={setExpMultiplier}
                        />
                        <br />
                        <MultiplierGroup
                            title="Output multipliers"
                            multiplierData={skillData.outputMultipliers}
                            setMultiplierCallback={setOutputMultiplier}
                        />
                        {!skillData.isCombatSkill && (
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
                    <HiscoreLookup
                        setLevelCallback={setCurrentLevel}
                        setExpCallback={setCurrentExp}
                    />
                    <LevelExpInput
                        title="Current"
                        level={currentLevel}
                        exp={currentExp}
                        setLevelCallback={setCurrentLevel}
                        setExpCallback={setCurrentExp}
                    />
                    <LevelExpInput
                        title="Target"
                        level={targetLevel}
                        exp={targetExp}
                        setLevelCallback={setTargetLevel}
                        setExpCallback={setTargetExp}
                    />
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
                                        setIncludedAreas(MAP_AREAS);
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
                                {MAP_AREAS.map(area => <option key={area}>{area}</option>)}
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
                        data={applyFilters(skillData.actions, currentLevel, useLevelFilter, isSkillingProdigy, useAreaFilter, includedAreas)}
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
