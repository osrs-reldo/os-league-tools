import React, { useCallback, useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import { useSelector } from 'react-redux';
import tasks from '../data/tasks';
import ALL_FILTERS from '../util/taskFilters';
import Cell from './TaskTableCell';
import Difficulty from './Difficulty';
import Category from './Category';
import Table from './common/Table';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';

export default function TaskTable({ history }) {
  const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);
  const isSmViewport = useBreakpoint(MEDIA_QUERIES.SM, MODE.STRICT);
  const isXsViewport = useBreakpoint(MEDIA_QUERIES.XS, MODE.STRICT);

  const renderCell = useCallback(
    ({ row, value }) => <Cell.Task row={row} value={value} addToHistory={history.addHistory} />,
    [history.history]
  );

  const data = useMemo(() => Object.values(tasks), []);
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
        accessor: row => ({ label: row.label, description: row.description }),
        sortType: sortTask,
        Cell: renderCell,
      },
      {
        Header: 'Difficulty',
        id: 'difficulty',
        minWidth: 95,
        width: isMdOrSmallerViewport ? 100 : 150,
        accessor: row => row.difficulty,
        sortType: sortDifficulty,
        Cell: Difficulty,
      },
      {
        Header: 'Category',
        id: 'category',
        minWidth: 90,
        width: isMdOrSmallerViewport ? 100 : 150,
        accessor: row => ({ category: row.category, subcategory: row.subcategory }),
        sortType: sortCategory,
        Cell: Category,
      },
      {
        Header: 'Completed at',
        id: 'completedAt',
        Cell: Cell.TaskCompletedAt,
        sortType: sortCompletedAt,
        accessor: 'completedAt',
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
  const filters = [...Object.values(ALL_FILTERS)];
  const initialState = isXsViewport ? { hiddenColumns: ['id', 'difficulty', 'category'] } : { hiddenColumns: ['id'] };
  initialState.pageSize = 50;

  const filterState = useSelector(state => state.filters.tasks);
  const tasksState = useSelector(state => state.tasks.tasks);
  const hiscoresState = useSelector(state => state.character.hiscoresCache.data);

  return (
    <Table
      columns={columns}
      data={data}
      filters={filters}
      filterState={filterState}
      globalFilter={fuzzyTextFilter}
      customFilterProps={{ tasksState, hiscoresState }}
      defaultColumn={defaultColumn}
      initialState={initialState}
      ExpandedRow={Cell.ExpandedTask}
      enableResizeColumns={!isXsViewport}
    />
  );
}

function sortTask(a, b) {
  return a.values.task.label.localeCompare(b.values.task.label);
}

function sortDifficulty(a, b) {
  return a.values.difficulty.sortOrder - b.values.difficulty.sortOrder;
}

function sortCategory(a, b) {
  if (!a?.values?.category?.category) {
    return -1;
  }

  const compareVal = a.values.category.category.label.localeCompare(b.values.category.category.label);
  if (compareVal === 0) {
    const subA = a.values.category.subcategory;
    const subB = b.values.category.subcategory;
    return subA.customSort && subB.customSort
      ? subA.customSort - subB.customSort
      : subA.label.localeCompare(subB.label);
  }
  return compareVal;
}

function sortCompletedAt(a, b) {
  return a.values.completedAt - b.values.completedAt;
}

function fuzzyTextFilter(rows, __, filterValue) {
  return matchSorter(rows, filterValue, {
    threshold: matchSorter.rankings.CONTAINS,
    keys: [
      'values.task.label',
      'values.task.description',
      'values.category.category.label',
      'values.category.subcategory.label',
      'values.requirements.*.skill',
    ],
  });
}
fuzzyTextFilter.autoRemove = val => !val;
