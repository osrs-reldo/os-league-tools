import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CALCULATOR_DATA from '../data/calculatorData.json';
import { getExpMultiplier } from '../util/getTier';
import Table from './common/Table';
import NumberCell from './common/calculator/NumberCell';
import ActivityCell from './common/calculator/ActivityCell';
import MaterialsCell from './common/calculator/MaterialsCell';

export default function CalculatorTable({ applyExpMultipliers, applyInputMultipliers, applyOutputMultipliers }) {
  const {
    calculators: { skill, expValues, calculatorTier },
  } = useSelector(state => ({ calculators: state.calculators, tasks: state.tasks }));

  const expMultiplier = getExpMultiplier(calculatorTier);

  const RAW_DATA = CALCULATOR_DATA.calculators[skill.toLowerCase()].actions;
  const expRequired = expValues.target.xp - expValues.start.xp;
  const calculatedData = RAW_DATA.map(activity => {
    const totalExp = applyExpMultipliers(activity.exp * expMultiplier, activity.expMultipliers);
    return {
      ...activity,
      exp: totalExp,
      expActions: Math.ceil(expRequired / totalExp),
      inputs: activity.inputs.map(input => ({
        ...input,
        amount: applyInputMultipliers(input.amount, activity.inputMultipliers),
      })),
      outputs: activity.outputs.map(output => ({
        ...output,
        amount: applyOutputMultipliers(output.amount, activity.outputMultipliers),
      })),
    };
  });

  const data = useMemo(() => calculatedData, [skill, expValues, calculatorTier, calculatedData]);

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
        Header: 'Actions required',
        id: 'actions',
        accessor: 'expActions',
        Cell: NumberCell,
      },
      {
        Header: 'Inputs',
        id: 'input',
        accessor: row =>
          row.inputs.map(input => ({
            ...input,
            actions: row.expActions,
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
            actions: row.expActions,
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
