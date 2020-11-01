import React, { useEffect, useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import taskData from '../resources/taskData.json';
import { applyFilters, getFormatters, getRenderers } from "../util/task-util";

const PAGE_SIZE = 20;

function getTableData(area, taskFilters) {
    const taskTableContent = area === "All" ? taskData.tasks : taskData.tasksByRegion[area];
    return taskFilters ? applyFilters(taskTableContent, area, taskFilters) : taskTableContent;
}

export default function TaskTable({ area, taskStatus, updateTaskStatus, taskFilters }) {
    const [tableData, setTableData] = useState(getTableData(area, taskFilters));
    const [paginatedData, setPaginatedData] = useState(tableData.slice(0, PAGE_SIZE));
    const [page, setPage] = useState(1);

    // hacky stuff to force table to reset to page 1 when new area is selected
    useEffect(() => {
        setTableData(getTableData(area, taskFilters));
    }, [area, taskFilters]);
    useEffect(() => {
        setPaginatedData(tableData.slice(0, PAGE_SIZE));
        setPage(1);
    }, [tableData]);

    const { completedFormatter, pointsFormatter, todoFormatter, nameFormatter } = getFormatters();

    const setTaskCompletion = (isComplete, taskId) => {
        updateTaskStatus.setCompleted(taskId, isComplete);
    }

    const setTaskTodo = (isOnTodoList, taskId) => {
        updateTaskStatus.setTodoListed(taskId, isOnTodoList);
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
            "formatExtraData": { "updateTaskCallback": setTaskTodo, "area": area, "taskStatus": taskStatus }
        },
    ];

    const { pageButtonRenderer } = getRenderers();

    const handleTableChange = (type, { page, sizePerPage }) => {
        const currentIndex = (page - 1) * sizePerPage;
        setPage(page);
        setPaginatedData(tableData.slice(currentIndex, currentIndex + sizePerPage));
    }

    const PaginatedTable = ({ data, columns, onTableChange, page, totalSize, sizePerPage, pageButtonRenderer }) => (
        <PaginationProvider
            pagination={
                paginationFactory({
                    custom: true,
                    pageButtonRenderer,
                    page,
                    sizePerPage,
                    hideSizePerPage: true,
                    hidePageListOnlyOnePage: true,
                    totalSize
                })
            }
        >
            {({ paginationProps, paginationTableProps }) => (
                <React.Fragment>
                    <BootstrapTable
                        bootstrap4
                        keyField='id'
                        data={data}
                        columns={columns}
                        bordered={false}
                        classes="light-text"
                        filter={filterFactory()}
                        filterPosition="top"
                        remote
                        onTableChange={onTableChange}
                        { ...paginationTableProps }
                    />
                    <div className='text-center' style={{margin: 'auto'}}>
                        <PaginationListStandalone
                            { ...paginationProps }
                        />
                    </div>
                </React.Fragment>
            )}
        </PaginationProvider>
    );

    return (
        <PaginatedTable
            data={paginatedData}
            columns={columns}
            page={page}
            sizePerPage={PAGE_SIZE}
            totalSize={tableData.length}
            onTableChange={handleTableChange}
            pageButtonRenderer={pageButtonRenderer}
        />
    );
}
