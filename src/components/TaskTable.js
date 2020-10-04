import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import taskData from '../resources/taskData.json';
import { getFormatters, getRenderers, immutablyUpdateTaskCompletion, isTaskComplete } from "../util/task-util";

export default function TaskTable({ area, taskStatus, updateTaskStatusCallback }) {
    const { completedFormatter, pointsFormatter } = getFormatters();

    const setTaskCompletion = (isComplete, taskId, difficulty) => {
        immutablyUpdateTaskCompletion(isComplete, taskId, area, difficulty, taskStatus, updateTaskStatusCallback);
    }

    const columns = [
        {
            "dataField": "done",
            "text": "✓",
            "isDummyField": true,
            "headerStyle": { width: '5%' },
            "formatter": completedFormatter,
            "formatExtraData": { "updateTaskCallback": setTaskCompletion, "area": area, "taskStatus": taskStatus }
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

    const rowStyle = row => {
        const style = {};
        if (isTaskComplete(row.id, area, taskStatus)) {
            style.textDecoration = 'line-through';
            style.color = '#99b83d';
        }
        return style;
    };

    const { pageButtonRenderer } = getRenderers();
    return (
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
            rowStyle={rowStyle}
        />
    );
}
