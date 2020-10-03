import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Card, Row, Col, Tab, Nav } from "react-bootstrap";
import taskData from '../resources/taskData.json';
import { getFormatters, getRenderers } from "../util/task-util";

export default function TaskTable() {
    const { completedFormatter, pointsFormatter } = getFormatters();
    const columns = [
        {
            "dataField": "done",
            "text": "✓",
            "isDummyField": true,
            "headerStyle": { width: '5%' },
            "formatter": completedFormatter,
        },
        {
            "dataField": "name",
            "text": "Task",
            "sort": true,
            "filter": textFilter({ placeholder: "Filter..." })
        },
        {
            "dataField": "points",
            "text": "Points",
            "isDummyField": true,
            "formatter": pointsFormatter,
            "sort": true
        },
        {
            "dataField": "difficulty",
            "text": "Difficulty",
            "sort": true,
            "filter": selectFilter({
                "placeholder": "(all)",
                "options": taskData.difficulties
            })
        },
        {
            "dataField": "skill",
            "text": "Skill",
            "sort": true,
            "filter": selectFilter({
                "placeholder": "(all)",
                "options": taskData.skills
            })
        },
        {
            "dataField": "category",
            "text": "Category",
            "sort": true,
            "filter": selectFilter({
                "placeholder": "(all)",
                "options": taskData.categories
            })
        },
    ];

    const { pageButtonRenderer } = getRenderers();
    return (
        <Card bg='dark' text='white' style={{ border: '2px solid #6c757d', borderRadius: '0rem 0rem .25rem .25rem' }}>
            <div className="m-3 text-center">
                <Tab.Container defaultActiveKey="common">
                    <Row>
                        <Col sm={2}>
                            <h5>Areas:</h5>
                            <Nav variant="pills" className="flex-column mt-3 tab-bar-secondary">
                                {taskData.areas.map(area =>
                                    <Nav.Item key={area}>
                                        <Nav.Link eventKey={area}>{area}</Nav.Link>
                                    </Nav.Item>
                                )}
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                {taskData.areas.map(area =>
                                    <Tab.Pane key={area} eventKey={area}>
                                        <BootstrapTable
                                            bootstrap4
                                            keyField='id'
                                            data={taskData.tasks[area]}
                                            columns={columns}
                                            bordered={false}
                                            classes="light-text"
                                            filter={filterFactory()}
                                            filterPosition="top"
                                            pagination={paginationFactory({
                                                pageButtonRenderer,
                                                sizePerPage: 20,
                                                hideSizePerPage: true,
                                                hidePageListOnlyOnePage: true
                                            })}
                                        />
                                    </Tab.Pane>
                                )}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </Card>
    );
}
