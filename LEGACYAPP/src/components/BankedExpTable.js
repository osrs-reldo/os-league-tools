import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import CALCULATOR_DATA from '../data/calculatorData.json';
import Table from './common/Table';
import NumberCell from './common/calculator/NumberCell';
import ActivityCell from './common/calculator/ActivityCell';
import MaterialsCell from './common/calculator/MaterialsCell';
import InputCell from './common/calculator/InputCell';

export default function BankedExpTable({ setExpGained, multipliersState, equilibriumState }) {
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
    calculators: { skill, expValues, baseMultiplier },
  } = useSelector(state => ({ calculators: state.calculators, tasks: state.tasks }));

  const RAW_DATA = CALCULATOR_DATA.calculators[skill.toLowerCase()].actions;
  let expGained = 0;
  const calculatedData = RAW_DATA.map(activity => {
    const equilibriumExpPerAction = equilibriumState.getBonusExp(activity.expActions);
    const expPerAction =
      multipliersState.applyMultipliers(activity.exp * baseMultiplier, activity, undefined, {
        exp: true,
      }) + equilibriumExpPerAction;
    if (plannedActions[activity.id]) {
      expGained += expPerAction * plannedActions[activity.id];
    }
    return {
      ...activity,
      exp: expPerAction,
      actions: plannedActions[activity.id] ?? 0,
      expGained: expPerAction * (plannedActions[activity.id] ?? 0),
      inputs: activity.inputs.map(input => ({
        ...input,
        amount: multipliersState.applyMultipliers(input.amount, activity, input, { inputs: true }),
      })),
      outputs: activity.outputs.map(output => ({
        ...output,
        amount: multipliersState.applyMultipliers(output.amount, activity, output, { outputs: true }),
      })),
    };
  });
  setExpGained(expGained);

  const data = useMemo(() => calculatedData, [calculatedData, skill, expValues, baseMultiplier, plannedActions]);

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
        width: 250,
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
      {
        Header: 'Exp gained',
        id: 'expGained',
        accessor: 'expGained',
        width: 100,
        Cell: NumberCell,
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
