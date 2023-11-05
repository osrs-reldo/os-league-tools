/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import React, { useMemo } from 'react';
import { matchSorter } from 'match-sorter';
import { useDispatch, useSelector } from 'react-redux';
import useBreakpoint, { MEDIA_QUERIES, MODE } from '../hooks/useBreakpoint';
import Table from './common/Table';
import LabeledIcon from './common/LabeledIcon';
import SkillRequirementList from './SkillRequirementList';
import { updateQuest } from '../store/unlocks/unlocks';
import quests, { questsById, QUEST_STATUS, REGION_IMPOSSIBLE_TO_COMPLETE } from '../data/quests';
import images from '../assets/images';
import titleSort from '../util/titleSort';
import { UNLOCKED_REGION_FILTER_VALUE } from './CalculatorFilters';
import { regionNames, regionsById, regionsByName } from '../data/regions';
import ReactTooltip from 'react-tooltip';

export default function QuestTable() {
  const isMdOrSmallerViewport = useBreakpoint(MEDIA_QUERIES.MD, MODE.LESS_OR_EQ);

  const data = useMemo(() => quests, []);
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        id: 'id',
        accessor: 'id',
      },
      {
        Header: 'Quest',
        id: 'label',
        accessor: 'label',
        width: 300,
        sortType: (a, b) => titleSort(a.values.label, b.values.label),
        Cell: QuestCell,
      },
      {
        Header: 'QP',
        id: 'points',
        accessor: 'points',
        width: 80,
        Cell: PointsCell,
      },
      {
        Header: isMdOrSmallerViewport ? 'Diff' : 'Difficulty',
        id: 'difficulty',
        accessor: 'difficulty',
        width: isMdOrSmallerViewport ? 75 : 175,
        sortType: (a, b) => a.values.difficulty.id - b.values.difficulty.id,
        Cell: IconCell,
      },
      {
        Header: isMdOrSmallerViewport ? 'Len' : 'Length',
        id: 'length',
        accessor: 'length',
        width: isMdOrSmallerViewport ? 75 : 175,
        sortType: (a, b) => a.values.length.id - b.values.length.id,
        Cell: IconCell,
      },
      {
        Header: 'Series',
        id: 'series',
        accessor: 'series',
        width: isMdOrSmallerViewport ? 75 : 250,
        sortType: (a, b) => {
          const labelA = a.values.series ? a.values.series.label : 'zzz';
          const labelB = b.values.series ? b.values.series.label : 'zzz';
          return labelA.localeCompare(labelB);
        },
        Cell: IconCell,
      },
      {
        Header: 'Regions',
        id: 'regions',
        accessor: 'regions',
        maxWidth: 110,
        Cell: RegionsCell,
        disableSortBy: true,
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
  const questState = useSelector(state => state.unlocks.quests);
  const filterState = useSelector(state => state.filters.quests);
  const regionsState = useSelector(state => state.unlocks.regions);

  return (
    <Table
      columns={columns}
      data={data}
      filters={[completedFilter, difficultyFilter, lengthFilter, regionsFilter]}
      filterState={filterState}
      globalFilter={fuzzyTextFilter}
      defaultColumn={defaultColumn}
      initialState={initialState}
      customFilterProps={{ questState, regionsState }}
      ExpandedRow={ExpandedRow}
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

function QuestCell({ row, value }) {
  const questState = useSelector(state => state.unlocks.quests);
  const questStatus = questState[row.id] || QUEST_STATUS.NOT_STARTED;
  const dispatch = useDispatch();

  return (
    <div {...row.getToggleRowExpandedProps()}>
      <div className='flex flex-row items-center h-full gap-2'>
        <span className='icon-2xl text-accent'>{row.isExpanded ? 'arrow_drop_down' : 'arrow_right'}</span>
        <span
          className='icon-2xl text-accent cursor-pointer select-none'
          onClick={e => {
            dispatch(
              updateQuest({
                id: row.values.id,
                status: questStatus === QUEST_STATUS.FINISHED ? QUEST_STATUS.NOT_STARTED : QUEST_STATUS.FINISHED,
              })
            );
            e.stopPropagation();
          }}
        >
          {questStatus === QUEST_STATUS.FINISHED ? 'check_box' : 'check_box_outline_blank'}
        </span>
        <span className='inline align-middle'>{value}</span>
      </div>
    </div>
  );
}

function PointsCell({ value }) {
  return (
    <div className='flex items-center h-full justify-center'>
      {value ? (
        <LabeledIcon label={value} icon={images['task-quest.png']} />
      ) : (
        <span className='text-xs italic'>n/a</span>
      )}
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

function completedFilter(record, filterState, { questState }) {
  if (filterState.status === 'all') {
    return true;
  }
  const status = questState[record.id] === QUEST_STATUS.FINISHED;
  return (filterState.status === 'cmpl') === !!status;
}

function difficultyFilter(record, filterState) {
  if (filterState.difficulty === null) {
    return true;
  }
  return filterState.difficulty.includes(record.difficulty.label);
}

function lengthFilter(record, filterState) {
  if (filterState.length === null) {
    return true;
  }
  return filterState.length.includes(record.length.label);
}

function regionsFilter(record, filterState, { regionsState }) {
  const unlockedRegionNames = regionsState.filter(id => id >= 0).map(id => regionsById[id].label);
  const filteredRegions =
    filterState.regions[0] === UNLOCKED_REGION_FILTER_VALUE ? unlockedRegionNames : filterState.regions;
  const { regions, autoUnlockRegions } = record;

  if (regions[0] === REGION_IMPOSSIBLE_TO_COMPLETE && !autoUnlockRegions.length) {
    return false;
  }
  if (autoUnlockRegions.length) {
    return autoUnlockRegions.some(area => filteredRegions.includes(area));
  }
  const requiresAllOf = regions.filter(item => typeof item === 'string') ?? [];
  const requiresOneOf = regions.filter(item => typeof item !== 'string')[0] ?? [];
  return (
    (!requiresAllOf.length || requiresAllOf.every(area => filteredRegions.includes(area))) &&
    (!requiresOneOf.length || requiresOneOf.some(area => filteredRegions.includes(area)))
  );
}

function RegionsCell({ row }) {
  const { regions, autoUnlockRegions } = row.original;

  if (regions[0] === REGION_IMPOSSIBLE_TO_COMPLETE && !autoUnlockRegions.length) {
    return <>Impossible to complete</>;
  }

  return (
    <div className='flex flex-col justify-center h-full'>
      {autoUnlockRegions.length > 0 && (
        <div className='flex flex-row items-center gap-2' key='auto'>
          <span className='text-xs text-accent'>Auto:</span>
          <div className='flex flex-row flex-wrap w-full h-full gap-1 items-center'>
            {autoUnlockRegions.map(region => {
              const { icon } = regionsByName[region] || {};
              return (
                <div key={region}>
                  <img src={icon} alt={region} data-tip data-for={region} />
                  <ReactTooltip id={region}>{region}</ReactTooltip>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {regions.length > 0 && regions[0] !== REGION_IMPOSSIBLE_TO_COMPLETE && (
        <div className='flex flex-row items-center gap-2' key='manual'>
          <span className='text-xs text-accent'>Manual:</span>
          <div className='flex flex-row flex-wrap w-full h-full gap-1 items-center'>
            {regions.map(region => {
              if (typeof region === 'string') {
                const { icon } = regionsByName[region] || {};
                return (
                  <div key={region}>
                    <img src={icon} alt={region} data-tip data-for={region} />
                    <ReactTooltip id={region}>{region}</ReactTooltip>
                  </div>
                );
              }
              return (
                <div className='flex flex-row'>
                  <span className='text-xs'>(</span>
                  {region.map((r, i) => {
                    const { icon } = regionsByName[r] || {};
                    return (
                      <div key={r} className='flex flex-row items-center'>
                        <img src={icon} alt={r} data-tip data-for={r} />
                        <ReactTooltip id={r}>{r}</ReactTooltip>
                        {i < region.length - 1 && <span className='text-xs mx-1'>OR</span>}
                      </div>
                    );
                  })}
                  <span className='text-xs'>)</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function ExpandedRow({ original }) {
  return (
    <div className='flex flex-row items-center h-full gap-2 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]'>
      {/* hack: invisible dummy icons to align the expanded text with the previous row */}
      <div className='flex flex-row invisible'>
        <span className='icon-2xl text-accent'>x</span>
        <span className='icon-2xl text-accent'>x</span>
      </div>
      <div className='w-full flex flex-col gap-0.5'>
        <span className='text-xs mr-1'>Skill requirements:</span>
        <SkillRequirementList value={original.skillReqs} className='ml-3' />
        <span className='text-xs mr-1 mt-1'>Quest requirements:</span>
        {original.prereqs.length ? (
          <ul className='list-disc text-xs mb-2 ml-3'>
            {original.prereqs.map(prereqId => (
              <li key={prereqId}>{questsById[prereqId].label}</li>
            ))}
          </ul>
        ) : (
          <span className='italic text-xs ml-3 mb-2'>none</span>
        )}
      </div>
    </div>
  );
}
