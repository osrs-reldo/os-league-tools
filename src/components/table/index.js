import React, { useMemo } from 'react';
import tasks from '../../resources/tasks';
import Cell from './Cell';
import Table from './Table';
import { sortTask, sortDifficulty, sortCategory } from './sort';
import { difficultyFilter, categoryFilter, subcategoryFilter, skillFilter } from './filter';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../../hooks/useBreakpoint';

export default function TaskTable() {
    const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);
    const isSmViewport = useBreakpoint(MEDIA_QUERIES.SM, MODE.STRICT);
    const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);

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
                // eslint-disable-next-line no-nested-ternary
                width: isXsViewport ? 0 : isSmViewport ? 375 : 470,
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
                width: isMdOrSmallerViewport ? 100 : 150,
                accessor: row => row.difficulty,
                sortType: sortDifficulty,
                Cell: Cell.Difficulty,
            },
            {
                Header: 'Category',
                id: 'category',
                minWidth: 90,
                width: isMdOrSmallerViewport ? 100 : 150,
                accessor: row => {
                    return { category: row.category, subcategory: row.subcategory };
                },
                sortType: sortCategory,
                Cell: Cell.Category,
            },
        ],
        [isXsViewport, isSmViewport, isMdOrSmallerViewport]
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
    const initialState = isXsViewport ? { hiddenColumns: ['id', 'difficulty', 'category'] } : { hiddenColumns: ['id'] };

    return (
        <Table
            columns={columns}
            data={data}
            filters={filters}
            defaultColumn={defaultColumn}
            initialState={initialState}
            ExpandedRow={Cell.ExpandedTask}
            enableResizeColumns={!isXsViewport}
        />
    );
}
