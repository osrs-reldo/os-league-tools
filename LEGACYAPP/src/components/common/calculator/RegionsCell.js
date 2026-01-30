import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { regionNames, regionsByName } from '../../../data/regions';

export default function RegionsCell({ value }) {
  const regionsToDisplay = value[0] === 'All' ? regionNames : value;
  return (
    <div className='flex flex-row flex-wrap py-2 w-full h-full gap-1 justify-center items-center'>
      {regionsToDisplay.map(region => {
        const { icon } = regionsByName[region] || {};
        return (
          <div key={region}>
            <img width={16} src={icon} alt={region} data-tip data-for={region} />
            <ReactTooltip id={region}>{region}</ReactTooltip>
          </div>
        );
      })}
    </div>
  );
}
