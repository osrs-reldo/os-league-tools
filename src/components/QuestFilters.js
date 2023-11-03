import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuestFilter, resetQuests } from '../store/filters';
import ButtonGroup from './common/ButtonGroup';
import FilterButtons, { FilterSelectAll } from './common/FilterButtons';
import { QUEST_DIFFICULTY, QUEST_LENGTH } from '../data/quests';

export default function QuestFilters() {
  const filterState = useSelector(state => state.filters.quests);
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
