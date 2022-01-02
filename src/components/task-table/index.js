import React, { useMemo } from 'react';
import tasks from '../../resources/tasks';
import Cell from './Cell';
import Table from './Table';
import { sortTask, sortDifficulty, sortCategory } from './sort';
import { difficultyFilter, categoryFilter, subcategoryFilter, skillFilter } from './filter';

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
                accessor: row => {
                    return { label: row.label, description: row.description };
                },
                sortType: sortTask,
                Cell: Cell.Task,
            },
            {
                Header: 'Difficulty',
                id: 'difficulty',
                minWidth: 95,
                width: 150,
                accessor: row => row.difficulty,
                sortType: sortDifficulty,
                Cell: Cell.Difficulty,
            },
            {
                Header: 'Category',
                id: 'category',
                minWidth: 90,
                width: 150,
                accessor: row => {
                    return { category: row.category, subcategory: row.subcategory };
                },
                sortType: sortCategory,
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
    const defaultColumn = useMemo(
        () => ({
            minWidth: 30,
            width: 150,
            maxWidth: 1000,
        }),
        []
    );
    const filters = [difficultyFilter, categoryFilter, subcategoryFilter, skillFilter];

    return <Table columns={columns} data={data} filters={filters} defaultColumn={defaultColumn} />;
}
