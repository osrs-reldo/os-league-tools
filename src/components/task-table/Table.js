import React, { useMemo, useState, useCallback } from 'react';
import { useTable, useFlexLayout, useResizeColumns, useSortBy } from 'react-table';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import Row from './Row';
import Column from './Column';

export default function Table({ columns, data }) {
    const [records, setRecords] = useState(data);

    const getRowId = useCallback(row => {
        return row.id;
    }, []);

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
            initialState: { ...Column.initialState },
            columns,
            data: records,
            defaultColumn,
            getRowId,
        },
        useFlexLayout,
        useResizeColumns,
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
        <DndProvider backend={HTML5Backend}>
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
                    {tableState.rows.map(
                        (row, index) =>
                            tableState.prepareRow(row) || (
                                <Row index={index} row={row} moveRow={moveRow} {...row.getRowProps()} />
                            )
                    )}
                </div>
            </div>
        </DndProvider>
    );
}
