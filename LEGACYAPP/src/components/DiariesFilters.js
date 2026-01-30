import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetDiaries, updateDiariesFilter } from '../store/filters';
import ButtonGroup from './common/ButtonGroup';
import FilterButtons, { FilterSelectAll } from './common/FilterButtons';
import { DIARY_DIFFICULTY, DIARY_LOCATIONS } from '../data/constants';

export default function DiariesFilters() {
  const filterState = useSelector(state => state.filters.diaries);
  const dispatch = useDispatch();

  return (
    <>
      <div className='mb-3'>
        <p className='heading-accent-md'>Status</p>
        <div className='w-full px-3 text-sm'>
          <ButtonGroup
            buttons={[
              { value: 'all', label: 'All diaries' },
              { value: 'incl', label: 'Incomplete' },
              { value: 'cmpl', label: 'Complete' },
            ]}
            selection={filterState.status}
            setSelection={val => dispatch(updateDiariesFilter({ field: 'status', value: val }))}
          />
        </div>
      </div>
      <div className='mb-3'>
        <p className='heading-accent-md'>Requirements</p>
        <div className='w-full px-3 text-sm'>
          <ButtonGroup
            buttons={[
              { value: 'all', label: 'All tasks' },
              { value: 'yes', label: 'Reqs met' },
              { value: 'no', label: 'Reqs missing' },
            ]}
            selection={filterState.requirements}
            setSelection={val => dispatch(updateDiariesFilter({ field: 'requirements', value: val }))}
          />
        </div>
      </div>
      <div className='mb-3'>
        <p className='heading-accent-md'>Difficulty</p>
        <div className='w-full px-3 text-sm flex flex-col'>
          <FilterButtons
            cols={2}
            filterName='difficulty'
            selectedValues={filterState.difficulty}
            updateFunc={updateDiariesFilter}
            values={Object.values(DIARY_DIFFICULTY)}
          />
          <FilterSelectAll
            filterName='difficulty'
            updateFunc={updateDiariesFilter}
            values={Object.values(DIARY_DIFFICULTY).map(({ label }) => label)}
          />
        </div>
      </div>
      <div className='mb-3'>
        <p className='heading-accent-md'>Location</p>
        <div className='w-full px-3 text-sm flex flex-col'>
          <FilterButtons
            cols={2}
            filterName='location'
            selectedValues={filterState.location}
            updateFunc={updateDiariesFilter}
            values={Object.values(DIARY_LOCATIONS)}
          />
          <FilterSelectAll
            filterName='location'
            updateFunc={updateDiariesFilter}
            values={Object.values(DIARY_LOCATIONS).map(({ label }) => label)}
          />
        </div>
      </div>
      <button type='button' className='button-outline w-full mb-1 h-fit' onClick={() => dispatch(resetDiaries())}>
        Clear filters
      </button>
    </>
  );
}
