import React, { useMemo } from 'react';
import tasks from '../../resources/tasks';
import Cell from './Cell';
import Column from './Column';
import Table from './Table';

export default function TaskTable() {
    const data = useMemo(() => tasks, []);
    const columns = useMemo(
        () => [
            {
                Header: 'Id',
                id: 'id',
                accessor: 'id',
            },
            {
                Header: 'Task',
                id: 'task',
                width: 470,
                accessor: Column.data.task,
                sortType: Column.sort.task,
                Cell: Cell.Task,
            },
            {
                Header: 'Difficulty',
                id: 'difficulty',
                minWidth: 95,
                width: 150,
                accessor: row => row.difficulty,
                sortType: Column.sort.difficulty,
                Cell: Cell.Difficulty,
            },
            {
                Header: 'Category',
                id: 'category',
                minWidth: 90,
                width: 150,
                accessor: Column.data.category,
                sortType: Column.sort.category,
                Cell: Cell.Category,
            },
            {
                Header: 'Requirements',
                id: 'requirements',
                minWidth: 120,
                width: 150,
                disableSortBy: true,
                accessor: row => row.skillReqs,
                Cell: Cell.Requirements,
            },
            {
                Header: 'Manage',
                accessor: 'wiki',
                minWidth: 70,
                width: 190,
                disableSortBy: true,
                Cell: Cell.Manage,
            },
        ],
        []
    );

    return <Table columns={columns} data={data} />;
}
