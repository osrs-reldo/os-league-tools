import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function ActivityCell({ row, value }) {
  return (
    <div className='flex items-center py-2 h-full'>
      <img className='mx-2' src={row.original.icon} alt={value} />
      <div className='flex flex-col'>
        <div>
          {value} <EquilibriumTooltip activityId={row.original.id} equilibriumInfo={row.original.equilibriumInfo} />
        </div>
        <p className='text-sm italic'>{row.original.subtitle}</p>
      </div>
    </div>
  );
}

function EquilibriumTooltip({ activityId, equilibriumInfo }) {
  if (!equilibriumInfo) {
    return null;
  }

  return (
    <>
      <span className='icon-sm' data-tip data-for={`equilibrium-${activityId}`}>
        balance
      </span>
      <ReactTooltip id={`equilibrium-${activityId}`}>For equilibrium: {equilibriumInfo}</ReactTooltip>
    </>
  );
}
