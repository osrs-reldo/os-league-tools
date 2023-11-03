import React from 'react';
import { TRAILBLAZER_REGIONS } from '../../../data/regions';

export default function RegionsCell({ value }) {
  return (
    <div className='flex flex-row flex-wrap py-2 h-full'>
      {value.map(area => {
        const { icon } = TRAILBLAZER_REGIONS.find(region => region.label === area) || {};
        return (
          <div className='flex items-center'>
            <img className='mr-1' width={18} src={icon} alt={area} title={area} />
          </div>
        );
      })}
    </div>
  );
}
