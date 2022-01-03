import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTable, useFlexLayout, useResizeColumns, useSortBy, useGlobalFilter, useExpanded } from 'react-table';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import Row from './Row';
import SearchBox from './Search';
import { fuzzyTextFilter, applyFilterSet } from './filter';

export default function Table({ columns, data, filters, defaultColumn, ExpandedRow }) {
    const [records, setRecords] = useState(data);

    const filterState = useSelector(state => state.filters);
    useEffect(() => {
        setRecords(applyFilterSet(data, filterState, filters));
    }, [filterState]);

    const table = useTable(
        {
            initialState: { hiddenColumns: ['id'] },
            columns,
            data: records,
            defaultColumn,
            globalFilter: fuzzyTextFilter,
            getRowId: useCallback(row => row.id, []),
        },
        useFlexLayout,
        useResizeColumns,
        useGlobalFilter,
        useSortBy,
        useExpanded
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
            <div className='flex flex-row flex-wrap justify-between pb-3 px-3 items-end'>
                <span className='italic text-sm'>Showing: {table.rows.length} tasks</span>
                <SearchBox globalFilter={table.state.globalFilter} setGlobalFilter={table.setGlobalFilter} />
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
                                                    {column.isSortedDesc ? 'arrow_drop_down' : 'arrow_drop_up'}
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
                                        <Row
                                            index={index}
                                            row={row}
                                            moveRow={moveRow}
                                            isReorderEnabled={filterState.reorderEnabled}
                                            ExpandedRow={ExpandedRow}
                                            {...row.getRowProps()}
                                        />
                                    )
                            )}
                        </div>
                    </div>
                </DndProvider>
            </div>
        </>
    );
}
