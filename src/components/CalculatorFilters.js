import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import FilterButtons, { FilterSelectAll } from './common/FilterButtons';
import { regionsById, LEAGUES_REGIONS } from '../data/regions';
import { updateCalculatorsFilter } from '../store/filters';
import calculatorData from '../data/calculatorData.json';

export const UNLOCKED_REGION_FILTER_VALUE = 'unlocked';

export default function CalculatorFilters({ skill }) {
  const filterState = useSelector(state => state.filters.calculators);
  const regionsState = useSelector(state => state.unlocks.regions);
  const unlockedRegionNames = regionsState.filter(id => id >= 0).map(id => regionsById[id].label);
  const categoryValues = calculatorData.calculators[skill.toLowerCase()].categories;
  const updateCategoriesForSkill = useCallback(
    ({ field, value }) => updateCalculatorsFilter({ field, subfield: skill.toLowerCase(), value }),
    [skill]
  );

  return (
    <>
      <div className='mt-4'>
        <h3 className='heading-accent-md'>Categories</h3>
        <div className='flex flex-col px-3 text-sm w-full'>
          <FilterButtons
            filterName='categories'
            selectedValues={filterState.categories[skill.toLowerCase()] ?? categoryValues.map(({ label }) => label)}
            updateFunc={updateCategoriesForSkill}
            values={categoryValues}
          />
          <FilterSelectAll
            filterName='categories'
            updateFunc={updateCategoriesForSkill}
            values={categoryValues.map(({ label }) => label)}
          />
        </div>
      </div>
      <div className='mb-1 mt-4'>
        <h3 className='heading-accent-md'>Regions</h3>
        <div className='flex flex-col px-3 text-sm w-full'>
          <FilterButtons
            filterName='regions'
            selectedValues={
              filterState.regions[0] === UNLOCKED_REGION_FILTER_VALUE ? unlockedRegionNames : filterState.regions
            }
            updateFunc={updateCalculatorsFilter}
            values={LEAGUES_REGIONS}
          />
          <FilterSelectAll
            filterName='regions'
            updateFunc={updateCalculatorsFilter}
            values={LEAGUES_REGIONS.map(({ label }) => label)}
            additionalButtons={[{ label: 'unlocked', value: [UNLOCKED_REGION_FILTER_VALUE] }]}
          />
        </div>
      </div>
    </>
  );
}
