import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import taskData from '../resources/taskData.json';
import { applyFilters, getFormatters, getRenderers } from "../util/task-util";

export default function TaskTable({ area, taskStatus, updateTaskStatus, taskFilters }) {
    const { completedFormatter, pointsFormatter, todoFormatter, nameFormatter, hideFormatter } = getFormatters();

    const taskTableContent = area === "All" ? taskData.tasks : taskData.tasksByRegion[area];

    const setTaskCompletion = (isComplete, taskId) => {
        updateTaskStatus.setCompleted(taskId, isComplete);
    }
    const setTaskTodo = (isOnTodoList, taskId) => {
        updateTaskStatus.setTodoListed(taskId, isOnTodoList);
    }
    const setTaskHidden = (isHidden, taskId) => {
        updateTaskStatus.setHidden(taskId, isHidden);
    }

    const columns = [
        {
            "dataField": "done",
            "text": "Done",
            "isDummyField": true,
            "headerStyle": { width: '5rem' },
            "formatter": completedFormatter,
            "formatExtraData": { "updateTaskCallback": setTaskCompletion, "taskStatus": taskStatus }
        },
        {
            "dataField": "name",
            "text": "Task",
            "sort": true,
            "filter": textFilter({ placeholder: "Filter..." }),
            "formatter": nameFormatter,
            "formatExtraData": { "taskStatus": taskStatus }
        },
        {
            "dataField": "points",
            "text": "Points",
            "isDummyField": true,
            "headerStyle": { width: '6rem' },
            "formatter": pointsFormatter,
            "sortValue": pointsFormatter,
            "sort": true
        },
        {
            "dataField": "difficulty",
            "text": "Difficulty",
            "sort": true,
            "sortValue": pointsFormatter,
            "headerStyle": { width: '10rem' },
            "filter": selectFilter({
                "placeholder": "(all)",
                "options": taskData.difficulties
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
            "formatExtraData": { "updateTaskCallback": setTaskTodo, "taskStatus": taskStatus }
        },
        {
            "dataField": "hide",
            "text": "Hide",
            "isDummyField": true,
            "headerStyle": { width: '8rem' },
            "formatter": hideFormatter,
            "formatExtraData": { "updateTaskCallback": setTaskHidden, "taskStatus": taskStatus }
        },
    ];

    const { pageButtonRenderer, pageListRenderer, sizePerPageRenderer } = getRenderers();
    const tableData = taskFilters ? applyFilters(taskTableContent, area, taskFilters) : taskTableContent;

    return (
        <BootstrapTable
            bootstrap4
            keyField='id'
            data={tableData}
            columns={columns}
            bordered={false}
            classes="light-text"
            filter={filterFactory()}
            filterPosition="top"
            pagination={paginationFactory({
                pageButtonRenderer,
                pageListRenderer,
                sizePerPageRenderer,
                sizePerPage: 20,
                sizePerPageList: [
                    { text: '20', value: 20 },
                    { text: '50', value: 50 },
                    { text: '100', value: 100 },
                    { text: 'All', value: 1000 },
                ],
                alwaysShowAllBtns: true
            })}
        />
    );
}
