import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import CALCULATOR_DATA from '../data/calculatorData.json';
import { getExpMultiplier } from '../util/getTier';
import Table from './common/Table';
import NumberCell from './common/calculator/NumberCell';
import ActivityCell from './common/calculator/ActivityCell';
import MaterialsCell from './common/calculator/MaterialsCell';
import InputCell from './common/calculator/InputCell';

export default function BankedExpTable({ setExpGained }) {
  const [plannedActions, setPlannedActions] = useState({});

  const updatePlannedActions = (value, actionId) => {
    setPlannedActions(prevState => ({ ...prevState, [actionId]: value }));
  };

  const renderInputCell = ({ row }) => {
    const [innerValue, setInnerValue] = useState(plannedActions[row.values.id] ?? 0);
    const onChangeValue = e => {
      setInnerValue(e.target.value);
      const newValue = parseInt(e.target.value, 10);
      if (!Number.isNaN(newValue) && newValue >= 0) {
        updatePlannedActions(e.target.value, row.id);
      }
    };

    return <InputCell value={innerValue} onChange={onChangeValue} />;
  };

  const {
    calculators: { skill, expValues, calculatorTier },
  } = useSelector(state => ({ calculators: state.calculators, tasks: state.tasks }));

  const expMultiplier = getExpMultiplier(calculatorTier);

  const RAW_DATA = CALCULATOR_DATA.calculators[skill.toLowerCase()].actions;
  let expGained = 0;
  const calculatedData = RAW_DATA.map(activity => {
    if (plannedActions[activity.id]) {
      expGained += activity.exp * expMultiplier * plannedActions[activity.id];
    }
    return {
      ...activity,
      exp: activity.exp * expMultiplier,
      actions: plannedActions[activity.id] ?? 0,
    };
  });
  setExpGained(expGained);

  const data = useMemo(() => calculatedData, [skill, expValues, calculatorTier, plannedActions]);

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
        Header: 'Actions planned',
        id: 'actions',
        accessor: row => plannedActions[row.id] ?? 0,
        Cell: renderInputCell,
      },
      {
        Header: 'Inputs',
        id: 'input',
        accessor: row =>
          row.inputs.map(input => ({
            ...input,
            actions: row.actions,
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
            actions: row.actions,
          })),
        Cell: MaterialsCell,
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

  return (
    <div className='basis-3/4 grow w-full xl:ml-1 bg-primary'>
      <Table
        columns={columns}
        data={data}
        defaultColumn={defaultColumn}
        initialState={initialState}
        enableResizeColumns
        reorderEnabled={false}
      />
    </div>
  );
}
