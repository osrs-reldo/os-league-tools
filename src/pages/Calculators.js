import React, { useState } from "react";
import { Card, InputGroup, FormControl, CardDeck, Button } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import calcWoodcutting from '../resources/calcWoodcutting.json';
import { getLevelForExp, getExpForLevel } from '../util/exp-table'
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';

const actions = calcWoodcutting.actions;

function iconFormatter(cell, row) {
    return (
        <React.Fragment>
            <img src={row.icon} alt={cell} />
            {' ' + cell}
        </React.Fragment>
    );
}

export default function Calculators() {
    const [currentLevel, setCurrentLevel] = useState("1");
    const [currentExp, setCurrentExp] = useState(getExpForLevel(1));
    const [targetLevel, setTargetLevel] = useState("99");
    const [targetExp, setTargetExp] = useState(getExpForLevel(99));

    const amountFormatter = (cell, row, rowIndex, exp) => {
        return calcActionsRemaining(exp.current, exp.target, row.exp);
    }

    const outputsFormatter = (cell, row, rowIndex, exp) => {
        const numOfActions = calcActionsRemaining(exp.current, exp.target, row.exp);
        return (
            <ul>
                {cell.map(output => {
                    var amount = numOfActions * output.amount * output.chance;
                    amount = +amount.toFixed(2);
                    return (
                        <React.Fragment>
                            <li key="output.name">{amount + ' ' + output.name}</li>
                        </React.Fragment>
                    );
                })}
            </ul>
        );
    }

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
            "headerStyle": { width: '10%' }
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
            "formatExtraData": { "current": currentExp, "target": targetExp },
            "headerStyle": { width: '10%' }
        },
        {
            "dataField": "outputs",
            "text": "Outputs",
            "formatter": outputsFormatter,
            "formatExtraData": { "current": currentExp, "target": targetExp }
        }
    ];

    return (
        <div className="content-wrapper">
            <h1 className="mt-2 light-text text-center">Woodcutting</h1>
            <CardDeck style={{ margin: '1rem' }} >
                <Card bg='dark' text='white' >
                    <h4 className="pt-3 pl-3">Modifiers:</h4>
                    TODO: input multipliers (skilling outfits, relic bonuses, etc); output
                    multipliers (more relics, other outfits like rogue)
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
                                console.log(event.target.value);
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
                    <h4 className="pt-3 pl-3">Settings:</h4>
                    TODO settings like: configure area restrictions/hide activities you can't do in your areas;
                    checkbox to hide things you don't have the level for (might also need to include whether
                    you have skilling prodigy for this)
                </Card>
            </CardDeck>
            <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                <Card.Body>
                    <BootstrapTable
                        bootstrap4
                        keyField='id'
                        data={actions}
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

function calcActionsRemaining(curExp, targetExp, activityExp) {
    const expLeft = targetExp - curExp;
    return Math.ceil(expLeft / activityExp);
}