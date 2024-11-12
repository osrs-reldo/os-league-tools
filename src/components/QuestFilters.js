import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuestFilter, resetQuests } from '../store/filters';
import ButtonGroup from './common/ButtonGroup';
import FilterButtons, { FilterSelectAll } from './common/FilterButtons';
import { QUEST_DIFFICULTY, QUEST_LENGTH } from '../data/quests';
import { UNLOCKED_REGION_FILTER_VALUE } from './CalculatorFilters';
import { regionsById, LEAGUES_REGIONS } from '../data/regions';

export default function QuestFilters() {
  const filterState = useSelector(state => state.filters.quests);
  const regionsState = useSelector(state => state.unlocks.regions);
  const unlockedRegionNames = regionsState.filter(id => id >= 0).map(id => regionsById[id].label);
  const dispatch = useDispatch();

  return (
    <>
      <div className='mb-3'>
        <p className='heading-accent-md'>Status</p>
        <div className='w-full px-3 text-sm'>
          <ButtonGroup
            buttons={[
              { value: 'all', label: 'All quests' },
              { value: 'incl', label: 'Incomplete' },
              { value: 'cmpl', label: 'Complete' },
            ]}
            selection={filterState.status}
            setSelection={val => dispatch(updateQuestFilter({ field: 'status', value: val }))}
          />
        </div>
      </div>
      <div className='mb-3'>
        <p className='heading-accent-md'>Requirements</p>
        <div className='w-full px-3 text-sm'>
          <ButtonGroup
            buttons={[
              { value: 'all', label: 'All quests' },
              { value: 'yes', label: 'Reqs met' },
              { value: 'no', label: 'Reqs missing' },
            ]}
            selection={filterState.requirements}
            setSelection={val => dispatch(updateQuestFilter({ field: 'requirements', value: val }))}
          />
        </div>
      </div>
      <div className='mb-3'>
        <h3 className='heading-accent-md'>Regions</h3>
        <div className='flex flex-col px-3 text-sm w-full'>
          <FilterButtons
            filterName='regions'
            selectedValues={
              filterState.regions[0] === UNLOCKED_REGION_FILTER_VALUE ? unlockedRegionNames : filterState.regions
            }
            updateFunc={updateQuestFilter}
            values={LEAGUES_REGIONS}
          />
          <FilterSelectAll
            filterName='regions'
            updateFunc={updateQuestFilter}
            values={LEAGUES_REGIONS.map(({ label }) => label)}
            additionalButtons={[{ label: 'unlocked', value: [UNLOCKED_REGION_FILTER_VALUE] }]}
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
            updateFunc={updateQuestFilter}
            values={Object.values(QUEST_DIFFICULTY)}
          />
          <FilterSelectAll
            filterName='difficulty'
            updateFunc={updateQuestFilter}
            values={Object.values(QUEST_DIFFICULTY).map(({ label }) => label)}
          />
        </div>
      </div>
      <div className='mb-3'>
        <p className='heading-accent-md'>Length</p>
        <div className='w-full px-3 text-sm flex flex-col'>
          <FilterButtons
            cols={2}
            filterName='length'
            selectedValues={filterState.length}
            updateFunc={updateQuestFilter}
            values={Object.values(QUEST_LENGTH)}
          />
          <FilterSelectAll
            filterName='length'
            updateFunc={updateQuestFilter}
            values={Object.values(QUEST_LENGTH).map(({ label }) => label)}
          />
        </div>
      </div>
      <button type='button' className='button-outline w-full mb-1 h-fit' onClick={() => dispatch(resetQuests())}>
        Clear filters
      </button>
    </>
  );
}
