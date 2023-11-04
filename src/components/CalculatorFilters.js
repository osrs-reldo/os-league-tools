import React from 'react';
import { useSelector } from 'react-redux';
import FilterButtons, { FilterSelectAll } from './common/FilterButtons';
import { regionsById, TRAILBLAZER_REGIONS } from '../data/regions';
import { updateCalculatorsFilter } from '../store/filters';

export const UNLOCKED_REGION_FILTER_VALUE = 'unlocked';

export default function CalculatorFilters() {
  const filterState = useSelector(state => state.filters.calculators);
  const regionsState = useSelector(state => state.unlocks.regions);
  const unlockedRegionNames = regionsState.filter(id => id >= 0).map(id => regionsById[id].label);

  return (
    <div className='mb-1'>
      <h3 className='heading-accent-md'>Regions</h3>
      <div className='flex flex-col px-3 text-sm w-full'>
        <FilterButtons
          filterName='regions'
          selectedValues={
            filterState.regions[0] === UNLOCKED_REGION_FILTER_VALUE ? unlockedRegionNames : filterState.regions
          }
          updateFunc={updateCalculatorsFilter}
          values={TRAILBLAZER_REGIONS}
        />
        <FilterSelectAll
          filterName='regions'
          updateFunc={updateCalculatorsFilter}
          values={TRAILBLAZER_REGIONS.map(({ label }) => label)}
          additionalButtons={[{ label: 'unlocked', value: [UNLOCKED_REGION_FILTER_VALUE] }]}
        />
      </div>
    </div>
  );
}
