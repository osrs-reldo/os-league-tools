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

export default function TaskFilters() {
    const filterState = useSelector(state => state.filters.tasks);
    const unlockedSkills = useSelector(state => state.unlocks.skills);
    const dispatch = useDispatch();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-2 mt-3'>
            <div className='order-1'>
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
            <div className='xl:order-2 lg:order-4 sm:order-3 order-2'>
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
            <div className='xl:order-3 lg:order-6 sm:order-4 order-3'>
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
            <div className='xl:order-4 lg:order-2 sm:order-6 order-4'>
                <span className='heading-accent-md mt-1'>Difficulty</span>
                <div className='w-full px-3 text-sm'>
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
            </div>
            <div className='xl:order-6 lg:order-3 sm:order-5 order-6 row-span-2'>
                <span className='heading-accent-md mt-1'>Requirements</span>
                <div className='ml-2 mb-2'>
                    <LabeledCheckbox
                        className='text-sm'
                        label='Show tasks with no requirements'
                        defaultChecked={filterState.showNoRequirements}
                        onClick={e =>
                            dispatch(updateTaskFilter({ field: 'showNoRequirements', value: e.target.checked }))
                        }
                    />
                    <LabeledCheckbox
                        className='text-sm'
                        label='Show tasks with unmet requirements'
                        defaultChecked={filterState.showUnmetRequirements}
                        onClick={e =>
                            dispatch(updateTaskFilter({ field: 'showUnmetRequirements', value: e.target.checked }))
                        }
                    />
                    <LabeledCheckbox
                        className='text-sm'
                        label='Use unchained talent skill boost'
                        defaultChecked={filterState.isUnchainedTalent}
                        onClick={e =>
                            dispatch(updateTaskFilter({ field: 'isUnchainedTalent', value: e.target.checked }))
                        }
                    />
                </div>
                <div className='lg:w-full text-sm flex flex-col mb-2'>
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
                        |
                        <button
                            className='inline italic hover:underline ml-1'
                            type='button'
                            onClick={() => dispatch(updateTaskFilter({ field: 'skills', value: unlockedSkills }))}
                        >
                            unlocked
                        </button>
                    </span>
                </div>
            </div>
            <div className='lg:order-5 sm:order-2 order-5 row-span-2'>
                <p className='heading-accent-md mt-1'>Category</p>
                <div className='w-full px-3 text-sm'>
                    <CheckboxTree
                        checkboxName='categories'
                        filterState={filterState.categories}
                        nodes={formatCategoriesForCheckboxTree()}
                        onCheckFunc={updateTaskFilter}
                    />
                </div>
            </div>
            <div className='w-full px-3 gap-1 grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 order-7 sm:col-span-2 lg:col-span-1'>
                <button
                    type='button'
                    className='button-outline w-full mb-1 h-fit'
                    onClick={() => dispatch(resetTasks())}
                >
                    Clear filters
                </button>
                {/* TODO save reordered task state */}
                {/* {filterState.reorderEnabled ? (
                    <button
                        type='button'
                        className='button-outline w-full mb-1 h-fit'
                        onClick={() =>
                            batch(() => {
                                dispatch(updateTaskFilter({ field: 'reorderEnabled', value: false }));
                            })
                        }
                    >
                        Save custom task order
                    </button>
                ) : (
                    <button
                        type='button'
                        className='button-outline w-full mb-1 h-fit'
                        onClick={() => dispatch(updateTaskFilter({ field: 'reorderEnabled', value: true }))}
                    >
                        Enable drag-and-drop reordering
                    </button>
                )} */}
            </div>
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
