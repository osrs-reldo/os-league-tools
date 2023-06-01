import React, { useState, useCallback, useEffect } from 'react';
import {
  useTable,
  useFlexLayout,
  useResizeColumns,
  useSortBy,
  useGlobalFilter,
  useExpanded,
  usePagination,
} from 'react-table';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import Row from './TableRow';
import SearchBox from './TableSearchBox';

export default function Table({
  columns,
  data,
  filters = [],
  filterState,
  globalFilter,
  defaultColumn,
  initialState,
  ExpandedRow,
  customFilterProps = {},
  enableResizeColumns = true,
}) {
  const [records, setRecords] = useState(data);

  useEffect(() => {
    if (filters.length) {
      setRecords(data.filter(record => filters.every(filter => filter(record, filterState, customFilterProps))));
    } else {
      setRecords(data);
    }
  }, [filterState, data, customFilterProps]);

  const table = useTable(
    {
      initialState: { pageSize: 25, ...initialState },
      columns,
      data: records,
      defaultColumn,
      globalFilter,
      manualFilters: true,
      autoResetGlobalFilter: false,
      autoResetSortBy: false,
      autoResetPage: false,
      autoResetExpanded: false,
      getRowId: useCallback(row => row.id, []),
    },
    useFlexLayout,
    useResizeColumns,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination
  );

  useEffect(() => {
    // Reset to first page when filters are changed
    table.gotoPage(0);
  }, [filterState]);

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
        <span className='italic text-sm'>Showing: {table.page.length} rows</span>
        <SearchBox globalFilter={table.state.globalFilter} setGlobalFilter={table.setGlobalFilter} />
      </div>
      <div className='overflow-auto px-3'>
        <DndProvider backend={HTML5Backend}>
          <div {...table.getTableProps()} style={{ minWidth: 'min-content' }}>
            <div>
              {table.headerGroups.map(headerGroup => (
                <div
                  {...headerGroup.getHeaderGroupProps()}
                  className='heading-accent-md leading-loose border-b border-accent w-full'
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
                      {enableResizeColumns && (
                        <span {...column.getResizerProps()} className='resizer icon-lg'>
                          drag_handle
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div {...table.getTableBodyProps()}>
              {table.page.map(
                (row, index) =>
                  table.prepareRow(row) || (
                    <Row
                      index={index}
                      row={row}
                      moveRow={moveRow}
                      isReorderEnabled={filterState?.reorderEnabled}
                      ExpandedRow={ExpandedRow}
                      {...row.getRowProps()}
                    />
                  )
              )}
            </div>
            <div className='flex flex-col justify-center text-center'>
              <div>
                <PageButton onClick={() => table.gotoPage(0)} disabled={!table.canPreviousPage} text='<<' />
                <PageButton onClick={() => table.previousPage()} disabled={!table.canPreviousPage} text='<' />
                <span className='text-xs'>
                  {table.state.pageIndex + 1} of {table.pageOptions.length}
                </span>
                <PageButton onClick={() => table.nextPage()} disabled={!table.canNextPage} text='>' />
                <PageButton
                  onClick={() => table.gotoPage(table.pageCount - 1)}
                  disabled={!table.canNextPage}
                  text='>>'
                />
              </div>

              <span className='text-xs'>
                Show:
                <select
                  className='input-primary text-xs p-0 ml-1 text-center'
                  value={table.state.pageSize}
                  onChange={e => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  {[25, 50, 100, 200].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </span>
            </div>
          </div>
        </DndProvider>
      </div>
    </>
  );
}

function PageButton({ onClick, disabled, text }) {
  return (
    <button onClick={onClick} disabled={disabled} type='button' className='tracking-tighter m-1 hover:underline'>
      {text}
    </button>
  );
}
