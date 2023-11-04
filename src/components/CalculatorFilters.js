import React from 'react';
import { useSelector } from 'react-redux';
import FilterButtons, { FilterSelectAll } from './common/FilterButtons';
import { TRAILBLAZER_REGIONS } from '../data/regions';
import { updateCalculatorsFilter } from '../store/filters';

export default function CalculatorFilters() {
  const filterState = useSelector(state => state.filters.calculators);

  return (
    <div className='mb-1'>
      <h3 className='heading-accent-md'>Regions</h3>
      <div className='flex flex-col px-3 text-sm w-full'>
        <FilterButtons
          filterName='regions'
          selectedValues={filterState.regions}
          updateFunc={updateCalculatorsFilter}
          values={Object.values(TRAILBLAZER_REGIONS)}
        />
        <FilterSelectAll
          filterName='regions'
          updateFunc={updateCalculatorsFilter}
          values={Object.values(TRAILBLAZER_REGIONS).map(({ label }) => label)}
        />
      </div>
    </div>
  );
}
