import React, { useMemo, useState, useCallback } from 'react';
import { useTable, useFlexLayout, useResizeColumns, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import Row from './Row';
import Column from './Column';
import { GlobalTextSearch, filterTypes, fuzzyTextFilter } from './Filter';

export default function Table({ columns, data }) {
    const [records, setRecords] = useState(data);

    const table = useTable(
        {
            initialState: { ...Column.initialState },
            columns,
            data: records,
            defaultColumn: useMemo(Column.defaultColumn, []),
            filterTypes: useMemo(filterTypes, []),
            globalFilter: fuzzyTextFilter,
            getRowId: useCallback(row => row.id, []),
        },
        useFlexLayout,
        useResizeColumns,
        useFilters,
        useGlobalFilter,
        useSortBy
    );

    const moveRow = (dragIndex, hoverIndex) => {
        const dragRecord = records[dragIndex];
        setRecords(
            update(records, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragRecord],
                ],
            })
        );
    };

    return (
        <>
            <div className='flex flex-row flex-wrap justify-between pl-6 p-3 items-end'>
                <span className='italic'>Showing: {table.rows.length} tasks</span>
                <GlobalTextSearch globalFilter={table.state.globalFilter} setGlobalFilter={table.setGlobalFilter} />
            </div>
            <div className='block overflow-auto ml-3 pr-2'>
                <DndProvider backend={HTML5Backend}>
                    <div {...table.getTableProps()}>
                        <div>
                            {table.headerGroups.map(headerGroup => (
                                <div
                                    {...headerGroup.getHeaderGroupProps()}
                                    className='heading-accent-md leading-loose border-b border-accent overflow-hidden'
                                >
                                    {headerGroup.headers.map(column => (
                                        <div
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            className='relative font-bold text-center'
                                        >
                                            {column.render('Header')}
                                            {column.isSorted && (
                                                <span className='icon-base absolute'>
                                                    {column.isSortedDesc ? 'arrow_drop_up' : 'arrow_drop_down'}
                                                </span>
                                            )}
                                            <span {...column.getResizerProps()} className='resizer icon-lg'>
                                                drag_handle
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div {...table.getTableBodyProps()}>
                            {table.rows.map(
                                (row, index) =>
                                    table.prepareRow(row) || (
                                        <Row index={index} row={row} moveRow={moveRow} {...row.getRowProps()} />
                                    )
                            )}
                        </div>
                    </div>
                </DndProvider>
            </div>
        </>
    );
}
