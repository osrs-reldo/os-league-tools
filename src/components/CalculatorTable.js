import React, { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from './common/Table';
import NumberCell from './common/calculator/NumberCell';
import ActivityCell from './common/calculator/ActivityCell';
import MaterialsCell from './common/calculator/MaterialsCell';
import RegionsCell from './common/calculator/RegionsCell';
import { regionsById } from '../data/regions';
import { UNLOCKED_REGION_FILTER_VALUE } from './CalculatorFilters';
import useCalculatorData from '../hooks/useCalculatorData';

export default function CalculatorTable({ skill, expValues, baseMultiplier, multipliersState }) {
  const { data } = useCalculatorData(skill, expValues, baseMultiplier, multipliersState);

  // Force reset page to 1 when skill is changed
  const [forceResetPage, setForceResetPage] = useState(false);
  useEffect(() => setForceResetPage(prev => !prev), [skill]);

  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        id: 'id',
        accessor: 'id',
      },
      {
        Header: 'Activity',
        id: 'activity',
        accessor: 'name',
        minWidth: 300,
        Cell: ActivityCell,
      },
      {
        Header: 'Level',
        id: 'level',
        accessor: 'level',
        maxWidth: 70,
        minWidth: 70,
        width: 70,
        Cell: NumberCell,
      },
      {
        Header: 'Exp',
        id: 'xp',
        accessor: 'exp',
        maxWidth: 70,
        minWidth: 70,
        Cell: NumberCell,
      },
      {
        Header: 'Actions',
        id: 'actions',
        maxWidth: 80,
        minWidth: 80,
        accessor: 'actionsRequired',
        Cell: NumberCell,
      },
      {
        Header: 'Inputs',
        id: 'input',
        accessor: row =>
          row.inputs.map(input => ({
            ...input,
            actions: row.actionsRequired,
          })),
        Cell: MaterialsCell,
        disableSortBy: true,
      },
      {
        Header: 'Outputs',
        id: 'outputs',
        accessor: row =>
          row.outputs.map(output => ({
            ...output,
            actions: row.actionsRequired,
          })),
        Cell: MaterialsCell,
        disableSortBy: true,
      },
      {
        Header: 'Regions',
        id: 'regions',
        accessor: 'areas',
        maxWidth: 110,
        Cell: RegionsCell,
        disableSortBy: true,
      },
    ],
    []
  );
  const defaultColumn = useMemo(() => ({
    minWidth: 10,
    width: 200,
    maxWidth: 1000,
  }));

  const initialState = useMemo(() => ({ hiddenColumns: ['id'], pageSize: 100 }), []);
  const regionsState = useSelector(state => state.unlocks.regions);
  const filterState = useSelector(state => state.filters.calculators);

  return (
    <div className='basis-3/4 grow w-full xl:ml-1 bg-primary'>
      <Table
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
        filters={[regionsFilter, categoryFilter]}
        filterState={filterState}
        initialState={initialState}
        customFilterProps={{ regionsState, skill }}
        enableResizeColumns
        reorderEnabled={false}
        forceResetPage={forceResetPage}
      />
    </div>
  );
}

function regionsFilter(record, filterState, { regionsState }) {
  const unlockedRegionNames = regionsState.filter(id => id >= 0).map(id => regionsById[id].label);
  if (record.areas[0] === 'All' && filterState.regions.length) {
    return true;
  }
  if (filterState.regions[0] === UNLOCKED_REGION_FILTER_VALUE) {
    return record.areas.some(area => unlockedRegionNames.includes(area));
  }
  return record.areas.some(area => filterState.regions.includes(area));
}

function categoryFilter(record, filterState, { skill }) {
  if (!filterState.categories[skill.toLowerCase()]) {
    return true;
  }
  return filterState.categories[skill.toLowerCase()].includes(record.category);
}
