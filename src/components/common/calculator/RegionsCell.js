import React from 'react';
import ReactTooltip from 'react-tooltip';
import { regionNames, regionsByName } from '../../../data/regions';

export default function RegionsCell({ value }) {
  const regionsToDisplay = value[0] === 'All' ? regionNames : value;
  return (
    <div className='flex flex-row flex-wrap py-2 w-full h-full gap-1 justify-center'>
      {regionsToDisplay.map(region => {
        const { icon } = regionsByName[region] || {};
        return (
          <>
            <div className='flex items-center' data-tip data-for={region}>
              <img width={16} src={icon} alt={region} />
            </div>
            <ReactTooltip id={region}>{region}</ReactTooltip>
          </>
        );
      })}
    </div>
  );
}
