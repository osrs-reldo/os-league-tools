import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import taskData from '../resources/taskData.json';
import DoubleScrollbar from './DoubleScrollbar';
import { applyFilters, getFormatters, getRenderers, isTaskComplete } from '../util/task-util';

export default function TaskTable({ area, taskStatus, updateTaskStatus, taskFilters, hiscores, isSkillingProdigy }) {
    const {
        completedFormatter,
        pointsFormatter,
        nameFormatter,
        difficultyFormatter,
        skillsFormatter,
        manageFormatter,
    } = getFormatters();
    const taskTableContent = area === 'All' ? taskData.tasks : taskData.tasksByRegion[area];

    const setTaskCompletion = (isComplete, taskId) => {
        updateTaskStatus.setCompleted(taskId, isComplete);
    };
    const setTaskTodo = (isOnTodoList, taskId) => {
        updateTaskStatus.setTodoListed(taskId, isOnTodoList);
    };
    const setTaskHidden = (isHidden, taskId) => {
        updateTaskStatus.setHidden(taskId, isHidden);
    };

    const columns = [
        {
            dataField: 'done',
            text: 'Done',
            isDummyField: true,
            headerStyle: { width: '5rem' },
            formatter: completedFormatter,
            formatExtraData: { taskStatus },
            classes: 'clickable',
            events: {
                onClick: (event, column, columnIndex, row) => {
                    const isComplete = isTaskComplete(row.id, taskStatus);
                    setTaskCompletion(!isComplete, row.id);
                },
            },
        },
        {
            dataField: 'spacer',
            text: '',
            isDummyField: true,
        },
        {
            dataField: 'name',
            text: 'Task',
            sort: true,
            headerStyle: { width: '22rem' },
            filter: textFilter({ placeholder: 'Filter...' }),
            formatter: nameFormatter,
            formatExtraData: { taskStatus },
            classes: 'clickable',
            events: {
                onClick: (event, column, columnIndex, row) => {
                    const isComplete = isTaskComplete(row.id, taskStatus);
                    setTaskCompletion(!isComplete, row.id);
                },
            },
        },
        {
            dataField: 'spacer2',
            text: '',
            isDummyField: true,
        },
        {
            dataField: 'difficulty',
            text: 'Difficulty',
            sort: true,
            sortValue: pointsFormatter,
            headerStyle: { width: '10rem' },
            filter: selectFilter({
                placeholder: '(all)',
                options: taskData.difficulties,
            }),
            formatter: difficultyFormatter,
        },
        {
            dataField: 'category',
            text: 'Category',
            headerStyle: { width: '10rem' },
            sort: true,
            filter: selectFilter({
                placeholder: '(all)',
                options: taskData.categories,
            }),
        },
        {
            dataField: 'subcategory',
            text: 'Subcategory',
            headerStyle: { width: '10rem' },
            sort: true,
            filter: textFilter({ placeholder: 'Filter...' }),
        },
        {
            dataField: 'skills',
            text: 'Requires',
            formatter: skillsFormatter,
            formatExtraData: { hiscores, isSkillingProdigy },
            headerStyle: { width: '8rem' },
        },
        {
            dataField: 'manage',
            text: 'Manage',
            isDummyField: true,
            headerStyle: { width: '10rem' },
            formatter: manageFormatter,
            formatExtraData: {
                taskStatus,
                setTaskTodo,
                setTaskHidden,
            },
        },
    ];

    const { pageButtonRenderer, pageListRenderer, sizePerPageRenderer } = getRenderers();
    const tableData = taskFilters ? applyFilters(taskTableContent, area, taskFilters) : taskTableContent;

    return (
        <div style={{ maxWidth: '100%' }}>
            <DoubleScrollbar>
                <BootstrapTable
                    bootstrap4
                    keyField='id'
                    data={tableData}
                    columns={columns}
                    bordered={false}
                    classes='light-text'
                    filter={filterFactory()}
                    filterPosition='top'
                    hover
                    rowClasses='text-light'
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
                        alwaysShowAllBtns: true,
                    })}
                />
            </DoubleScrollbar>
        </div>
    );
}
