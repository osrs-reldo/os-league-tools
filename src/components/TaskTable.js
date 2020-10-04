import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import taskData from '../resources/taskData.json';
import { getFormatters, getRenderers, immutablyUpdateTaskCompletion, immutablyUpdateTaskTodoList } from "../util/task-util";

export default function TaskTable({ area, taskStatus, updateTaskStatusCallback, taskFilter = () => { return true; } }) {
    const { completedFormatter, pointsFormatter, todoFormatter, nameFormatter } = getFormatters();

    const setTaskCompletion = (isComplete, taskId, difficulty) => {
        immutablyUpdateTaskCompletion(isComplete, taskId, area, difficulty, taskStatus, updateTaskStatusCallback);
    }

    const setTaskTodo = (isOnTodoList, taskId) => {
        immutablyUpdateTaskTodoList(isOnTodoList, taskId, area, taskStatus, updateTaskStatusCallback);
    }

    const columns = [
        {
            "dataField": "done",
            "text": "Done",
            "isDummyField": true,
            "headerStyle": { width: '5rem' },
            "formatter": completedFormatter,
            "formatExtraData": { "updateTaskCallback": setTaskCompletion, "area": area, "taskStatus": taskStatus }
        },
        {
            "dataField": "name",
            "text": "Task",
            "sort": true,
            "filter": textFilter({ placeholder: "Filter..." }),
            "formatter": nameFormatter,
            "formatExtraData": { "area": area, "taskStatus": taskStatus }
        },
        {
            "dataField": "points",
            "text": "Points",
            "isDummyField": true,
            "headerStyle": { width: '6rem' },
            "formatter": pointsFormatter,
            "sort": true
        },
        {
            "dataField": "difficulty",
            "text": "Difficulty",
            "sort": true,
            "headerStyle": { width: '10rem' },
            "filter": selectFilter({
                "placeholder": "(all)",
                "options": taskData.difficulties
            })
        },
        {
            "dataField": "skill",
            "text": "Skill",
            "headerStyle": { width: '10rem' },
            "sort": true,
            "filter": selectFilter({
                "placeholder": "(all)",
                "options": taskData.skills
            })
        },
        {
            "dataField": "category",
            "text": "Category",
            "headerStyle": { width: '10rem' },
            "sort": true,
            "filter": selectFilter({
                "placeholder": "(all)",
                "options": taskData.categories
            })
        },
        {
            "dataField": "todo",
            "text": "To-Do",
            "isDummyField": true,
            "headerStyle": { width: '8rem' },
            "formatter": todoFormatter,
            "formatExtraData": { "updateTaskCallback": setTaskTodo, "area": area, "taskStatus": taskStatus }
        },
    ];

    const { pageButtonRenderer } = getRenderers();
    return (
        <BootstrapTable
            bootstrap4
            keyField='id'
            data={applyFilter(taskData.tasks[area], area, taskFilter)}
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
    );
}

function applyFilter(tasks, area, filterFunction) {
    return tasks.filter(task => filterFunction(task, area));
}
