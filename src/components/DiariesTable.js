import React, { useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import { useDispatch, useSelector } from 'react-redux';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import Table from './common/Table';
import LabeledIcon from './common/LabeledIcon';
import SkillRequirementList from './SkillRequirementList';
import { updateDiary } from '../store/unlocks/unlocks';
import diaries from '../data/diaries';

export default function DiariesTable() {
  const data = useMemo(() => diaries, []);
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
        accessor: 'task',
        width: 300,
        Cell: TaskCell,
      },
      {
        Header: 'Location',
        id: 'location',
        accessor: 'location',
        width: 80,
        Cell: IconCell,
      },
      {
        Header: 'Difficulty',
        id: 'difficulty',
        accessor: 'difficulty',
        width: 80,
        Cell: IconCell,
      },
      {
        Header: 'Skill reqs',
        id: 'skillReqs',
        accessor: 'skillReqs',
        width: 80,
        Cell: SkillReqCell,
      },
      {
        Header: 'Quest reqs',
        id: 'questReqs',
        accessor: 'questReqs',
        width: 80,
        Cell: TextReqCell,
      },
      {
        Header: 'Other reqs',
        id: 'otherReqs',
        accessor: 'otherReqs',
        width: 80,
        Cell: TextReqCell,
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
  const initialState = { hiddenColumns: ['id'] };
  const diariesState = useSelector(state => state.unlocks.diaries);
  const filterState = useSelector(state => state.filters.diaries);

  return (
    <Table
      columns={columns}
      data={data}
      filters={[completedFilter, difficultyFilter, locationFilter]}
      filterState={filterState}
      globalFilter={fuzzyTextFilter}
      defaultColumn={defaultColumn}
      initialState={initialState}
      customFilterProps={{ diariesState }}
      enableResizeColumns
    />
  );
}

function fuzzyTextFilter(rows, __, filterValue) {
  return matchSorter(rows, filterValue, {
    threshold: matchSorter.rankings.CONTAINS,
    keys: ['values.label', 'values.series.label'],
  });
}
fuzzyTextFilter.autoRemove = val => !val;

function TaskCell({ row, value }) {
  const diariesState = useSelector(state => state.unlocks.diaries);
  const taskComplete = diariesState[row.id] ?? false;
  const dispatch = useDispatch();

  return (
    <div className='flex flex-row items-center h-full gap-2'>
      <span
        className='icon-2xl text-accent cursor-pointer select-none'
        onClick={e => {
          dispatch(
            updateDiary({
              id: row.values.id,
              status: !taskComplete,
            })
          );
          e.stopPropagation();
        }}
      >
        {taskComplete ? 'check_box' : 'check_box_outline_blank'}
      </span>
      <span className='inline align-middle text-sm'>{value}</span>
    </div>
  );
}

function IconCell({ value }) {
  const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);

  if (value) {
    return (
      <div className='flex items-center h-full justify-center'>
        <LabeledIcon label={isMdOrSmallerViewport ? '' : value.label} icon={value.icon} />
      </div>
    );
  }
  return null;
}

function SkillReqCell({ value }) {
  return (
    <div className='w-full items-center h-full justify-center flex flex-col gap-0.5'>
      <SkillRequirementList value={value} className='ml-3' />
    </div>
  );
}

function TextReqCell({ value }) {
  if (value.length === 0) {
    return <span className='w-full h-full items-center flex italic text-xs'>none</span>;
  }
  return (
    <div className='w-full h-full justify-center flex flex-col gap-0.5 text-xs'>
      <ul>
        {value.map(req => (
          <li>{req}</li>
        ))}
      </ul>
    </div>
  );
}

function completedFilter(record, filterState, { diariesState }) {
  if (filterState.status === 'all') {
    return true;
  }
  return (filterState.status === 'cmpl') === !!diariesState[record.id];
}

function difficultyFilter(record, filterState) {
  if (filterState.difficulty === null) {
    return true;
  }
  return filterState.difficulty.includes(record.difficulty.label);
}

function locationFilter(record, filterState) {
  if (filterState.location === null) {
    return true;
  }
  return filterState.location.includes(record.location.label);
}
