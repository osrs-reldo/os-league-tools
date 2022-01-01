import React, { useMemo } from 'react';
import { useTable, useFlexLayout, useResizeColumns, useSortBy } from 'react-table';

export default function Table({ columns, data }) {
    const defaultColumn = useMemo(
        () => ({
            minWidth: 30,
            width: 150,
            maxWidth: 1000,
        }),
        []
    );

    const tableState = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useFlexLayout,
        useResizeColumns,
        useSortBy
    );

    return (
        <div {...tableState.getTableProps()}>
            <div>
                {tableState.headerGroups.map(headerGroup => (
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
            <div {...tableState.getTableBodyProps()}>
                {tableState.rows.map(row => {
                    tableState.prepareRow(row);
                    return (
                        <div {...row.getRowProps()} className='task-table-row'>
                            {row.cells.map(cell => {
                                return (
                                    <div {...cell.getCellProps()} className='relative'>
                                        {cell.render('Cell')}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
