import React from "react";
import { Card } from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import calcWoodcutting from '../resources/calcWoodcutting.json';

const actions = calcWoodcutting.actions;
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
        "formatter": iconFormatter
    },
    {
        "dataField": "exp",
        "text": "Exp",
        "sort": true,
        "headerStyle": { width: '10%' }
    },
    {
        "dataField": "amount",
        "text": "Amount",
        "isDummyField": true,
        "sort": true,
        "formatter": amountFormatter,
        "headerStyle": { width: '10%' }
    },
    {
        "dataField": "category",
        "text": "Category",
        "hidden": true
    },
    {
        "dataField": "outputs",
        "text": "Outputs",
        "formatter": outputsFormatter
    }
];

function iconFormatter(cell, row) {
    return (
        <React.Fragment>
            <img src={row.icon} alt={cell} />
            {' ' + cell}
        </React.Fragment>
    );
}

function outputsFormatter(cell, row) {
    return (
        <ul>
            {cell.map(output => {
                var amount = output.amount * output.chance;
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

function amountFormatter(cell, row) {
    return 1;
}

export default function Calculators() {
    return (
        <div className="content-wrapper">
            <Card bg='dark' text='white' style={{ margin: '1rem' }} >
                <Card.Body>
                    <BootstrapTable bootstrap4 keyField='id' data={actions} columns={columns} bordered={false} classes="light-text" />
                </Card.Body>
            </Card>
        </div>
    );
}