import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { without } from 'lodash';
import { updateTaskFilter, resetTasks } from '../store/filters';
import ButtonGroup from './common/ButtonGroup';
import FilterButtons, { FilterSelectAll } from './common/FilterButtons';
import LabeledCheckbox from './common/LabeledCheckbox';
import CheckboxTree from './common/CheckboxTree';
import { DIFFICULTY, STATS } from '../data/constants';
import { formatCategoriesForCheckboxTree } from '../data/categories';
import getSkillsPanelData from '../util/getSkillsPanelData';
import { UNLOCKED_REGION_FILTER_VALUE } from './CalculatorFilters';
import { regionsById, LEAGUES_REGIONS, GLOBAL_REGION } from '../data/regions';
import { REGION_ANY } from '../data/tasks';

export default function TaskFilters({ history }) {
  const filterState = useSelector(state => state.filters.tasks);
  const regionsState = useSelector(state => state.unlocks.regions);
  const unlockedRegionNames = regionsState.filter(id => id >= 0).map(id => regionsById[id].label);
  const dispatch = useDispatch();

  const StatusFilters = (
    <>
      <div>
        <span className='heading-accent-md mt-1'>Status</span>
        <div className='w-full px-3 text-sm'>
          <ButtonGroup
            buttons={[
              { value: 'all', label: 'All tasks' },
              { value: 'incl', label: 'Incomplete' },
              { value: 'cmpl', label: 'Complete' },
            ]}
            selection={filterState.status}
            setSelection={val => dispatch(updateTaskFilter({ field: 'status', value: val }))}
          />
        </div>
      </div>
      <div>
        <span className='heading-accent-md mt-1'>To-do tasks</span>
        <div className='w-full px-3 text-sm'>
          <ButtonGroup
            buttons={[
              { value: 'all', label: 'All tasks' },
              { value: 'hide', label: 'Hide to-do' },
              { value: 'only', label: 'To-do only' },
            ]}
            selection={filterState.todo}
            setSelection={val => dispatch(updateTaskFilter({ field: 'todo', value: val }))}
          />
        </div>
      </div>
      <div>
        <span className='heading-accent-md mt-1'>Ignored tasks</span>
        <div className='w-full px-3 text-sm'>
          <ButtonGroup
            buttons={[
              { value: 'all', label: 'All tasks' },
              { value: 'hide', label: 'Hide ignored' },
              { value: 'only', label: 'Ignored only' },
            ]}
            selection={filterState.ignored}
            setSelection={val => dispatch(updateTaskFilter({ field: 'ignored', value: val }))}
          />
        </div>
      </div>
    </>
  );
  const RegionFilter = (
    <>
      <h3 className='heading-accent-md'>Regions</h3>
      <div className='flex flex-col px-3 text-sm max-w-[320px]'>
        <FilterButtons
          filterName='regions'
          selectedValues={
            filterState.regions[0] === UNLOCKED_REGION_FILTER_VALUE
              ? [...unlockedRegionNames, REGION_ANY]
              : filterState.regions
          }
          updateFunc={updateTaskFilter}
          values={[...LEAGUES_REGIONS, GLOBAL_REGION]}
        />
        <FilterSelectAll
          filterName='regions'
          updateFunc={updateTaskFilter}
          values={[...LEAGUES_REGIONS, GLOBAL_REGION].map(({ label }) => label)}
          additionalButtons={[{ label: 'unlocked', value: [UNLOCKED_REGION_FILTER_VALUE] }]}
        />
      </div>
    </>
  );
  const DifficultyFilter = (
    <>
      <span className='heading-accent-md mt-1'>Difficulty</span>
      <div className='px-3 text-sm max-w-[320px]'>
        <FilterButtons
          cols={3}
          filterName='difficulty'
          selectedValues={filterState.difficulty}
          updateFunc={updateTaskFilter}
          values={Object.values(DIFFICULTY)}
        />
        <FilterSelectAll
          filterName='difficulty'
          updateFunc={updateTaskFilter}
          values={Object.values(DIFFICULTY).map(diff => diff.label)}
        />
      </div>
    </>
  );
  const RequirementsFilter = (
    <>
      <span className='heading-accent-md mt-1'>Requirements</span>
      <div className='ml-2 mb-2'>
        <LabeledCheckbox
          className='text-sm'
          label='Show tasks with no requirements'
          checked={filterState.showNoRequirements}
          onClick={e => dispatch(updateTaskFilter({ field: 'showNoRequirements', value: e.target.checked }))}
        />
        <LabeledCheckbox
          className='text-sm'
          label='Show tasks with unmet requirements'
          checked={filterState.showUnmetRequirements}
          onClick={e => dispatch(updateTaskFilter({ field: 'showUnmetRequirements', value: e.target.checked }))}
        />
        {/* TODO re-enable after prereqs are mapped
        <LabeledCheckbox
          className='text-sm'
          label='Show tasks with incomplete prerequisites'
          checked={filterState.showIncompletePrereqs}
          onClick={e => dispatch(updateTaskFilter({ field: 'showIncompletePrereqs', value: e.target.checked }))}
        /> */}
      </div>
      <div className='lg:w-full text-sm flex flex-col mb-2 max-w-[320px]'>
        <SkillsFilter filterState={filterState} />
        <span className='inline italic text-center'>
          <span className='mr-1'>Quick select skills:</span>
          <button
            className='inline italic hover:underline mx-1'
            type='button'
            onClick={() => dispatch(updateTaskFilter({ field: 'skills', value: Object.keys(STATS) }))}
          >
            all
          </button>
          |
          <button
            className='inline italic hover:underline mx-1'
            type='button'
            onClick={() => dispatch(updateTaskFilter({ field: 'skills', value: [] }))}
          >
            none
          </button>
        </span>
      </div>
    </>
  );
  const CategoryFilter = (
    <>
      <p className='heading-accent-md mt-1'>Category</p>
      <div className='w-full px-3 text-sm'>
        <CheckboxTree
          checkboxName='categories'
          filterState={filterState.categories}
          nodes={formatCategoriesForCheckboxTree()}
          onCheckFunc={updateTaskFilter}
        />
      </div>
    </>
  );
  const ActionButtons = (
    <>
      <button type='button' className='button-outline w-full mb-1 h-fit' onClick={() => dispatch(resetTasks())}>
        Clear filters
      </button>
      <div className='flex gap-1'>
        <button
          type='button'
          className={`${history.canUndo ? 'button-outline' : 'button-outline-disabled'} w-full h-fit`}
          disabled={!history.canUndo}
          onClick={history.undo}
        >
          Undo
        </button>
        <button
          type='button'
          className={`${history.canRedo ? 'button-outline' : 'button-outline-disabled'} w-full h-fit`}
          disabled={!history.canRedo}
          onClick={history.redo}
        >
          Redo
        </button>
      </div>
    </>
  );

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-1 gap-2 mt-3'>
      <div className='flex flex-col gap-2'>{StatusFilters}</div>
      <div className='w-full'>{RegionFilter}</div>
      <div className='w-full'>{DifficultyFilter}</div>
      <div className='w-full'>{RequirementsFilter}</div>
      <div className='w-full'>{CategoryFilter}</div>
      <div className='w-full px-3 gap-1 grid grid-cols-1 max-w-[320px]'>{ActionButtons}</div>
    </div>
  );
}

function SkillsFilter({ filterState }) {
  const skillsData = [...getSkillsPanelData({ customExclusions: ['Overall'] }), {}];
  return (
    <div className='grid grid-cols-3 gap-px bg-subdued overflow-hidden ml-3 w-fit'>
      {Object.values(skillsData).map((data, i) => (
        <SkillTile key={i} skillData={data} filterState={filterState} />
      ))}
    </div>
  );
}

function SkillTile({ skillData, filterState }) {
  const skillName = skillData.label;
  const selectedSkills = filterState.skills;
  const isSelected = selectedSkills.includes(skillName);
  const dispatch = useDispatch();

  return (
    <div
      className={`p-1 bg-hover cursor-pointer ${isSelected ? 'bg-secondary text-accent' : 'bg-primary'}`}
      onClick={() => {
        if (isSelected) {
          dispatch(updateTaskFilter({ field: 'skills', value: without(selectedSkills, skillName) }));
        } else {
          dispatch(updateTaskFilter({ field: 'skills', value: [...selectedSkills, skillName] }));
        }
      }}
    >
      <div className='flex items-center text-xs'>
        <img src={skillData.icon} alt={skillName} className='inline mx-1' />
        {skillName}
      </div>
    </div>
  );
}
