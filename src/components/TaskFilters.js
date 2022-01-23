/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import _ from 'lodash';
import { updateTaskFilter, reset } from '../store/filters';
import { update as updateUserData } from '../store/userData';
import { updateHiscores, updateUsername } from '../store/character/character';
import ButtonGroup from './common/ButtonGroup';
import InputSelect from './common/InputSelect';
import { CATEGORY, SUBCATEGORY, DIFFICULTY, STATS } from '../data/constants';
import LabeledCheckbox from './common/LabeledCheckbox';
import getSkillsPanelData from '../util/getSkillsPanelData';
import HiscoreLookup from './HiscoreLookup';

export default function TaskFilters() {
    const filterState = useSelector(state => state.filters.tasks);
    const unlockedSkills = useSelector(state => state.unlocks.skills);
    const username = useSelector(state => state.character.username);
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
                <div className='w-full px-3 text-sm flex flex-col'>
                    <LabeledCheckbox
                        label='All difficulties'
                        defaultChecked={!filterState.difficulty}
                        onClick={e =>
                            dispatch(
                                updateTaskFilter({
                                    field: 'difficulty',
                                    value: e.target.checked ? null : Object.values(DIFFICULTY).map(x => x.label),
                                })
                            )
                        }
                        className='mb-1'
                    />
                    <ButtonGroup
                        buttons={Object.values(DIFFICULTY).map(difficulty => ({
                            value: difficulty.label,
                            label: difficulty.label,
                        }))}
                        enabled={!!filterState.difficulty}
                        selection={filterState.difficulty || Object.values(DIFFICULTY).map(x => x.label)}
                        setSelection={val => dispatch(updateTaskFilter({ field: 'difficulty', value: val }))}
                        multi
                    />
                </div>
            </div>
            <div className='lg:order-5 sm:order-2 order-5 row-span-2'>
                <span className='heading-accent-md mt-1'>Category</span>
                <p className='text-sm italic'>Filter temporarily disabled until new tasks are finished importing!</p>
                <div className='w-full px-3 text-sm flex gap-1'>
                    <div>
                        <LabeledCheckbox
                            label='All categories'
                            defaultChecked
                            // defaultChecked={!filterState.categories}
                            // onClick={e =>
                            //     dispatch(updateTaskFilter({ field: 'categories', value: e.target.checked ? null : 'all' }))
                            // }
                            className='mb-1'
                        />
                        <InputSelect
                            label='categories'
                            options={Object.values(CATEGORY).map(category => ({
                                value: category.label,
                                label: category.label,
                            }))}
                            multiple
                            className='text-sm'
                            enabled={false}
                            // enabled={!!filterState.categories}
                            selection={filterState.categories}
                            setSelection={val => dispatch(updateTaskFilter({ field: 'categories', value: val }))}
                        />
                    </div>
                    <div>
                        <LabeledCheckbox
                            label='All subcategories'
                            defaultChecked
                            // defaultChecked={!filterState.subcategories}
                            // onClick={e =>
                            //     dispatch(
                            //         updateTaskFilter({ field: 'subcategories', value: e.target.checked ? null : 'all' })
                            //     )
                            // }
                            className='mb-1'
                        />
                        <InputSelect
                            label='subcategories'
                            options={_.sortBy(
                                Object.values(SUBCATEGORY).map(subcategory => ({
                                    value: subcategory.label,
                                    label: subcategory.label,
                                })),
                                ['label']
                            )}
                            multiple
                            className='text-sm'
                            enabled={false}
                            // enabled={!!filterState.subcategories}
                            selection={filterState.subcategories}
                            setSelection={val => dispatch(updateTaskFilter({ field: 'subcategories', value: val }))}
                        />
                    </div>
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
                </div>
                <div className='lg:w-full px-3 text-sm flex flex-col mb-2'>
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
            <div className='w-full px-3 gap-1 grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 order-7 sm:col-span-2 lg:col-span-1'>
                <button type='button' className='button-outline w-full mb-1 h-fit' onClick={() => dispatch(reset())}>
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
                                dispatch(updateUserData({ field: 'taskOrder', value: null })); // TODO
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
    const skillsData = getSkillsPanelData({ exclusions: ['QP', 'Overall'] });
    return (
        <table className='table-fixed w-fit'>
            <tbody>
                {Array.from({ length: 8 }, (__, i) => (
                    <tr key={i} className='border-b border-subdued last:border-none'>
                        {Array.from({ length: 3 }, (___, j) => {
                            const skillData = skillsData[j][i];
                            if (!skillData) {
                                return null;
                            }
                            return (
                                <SkillTile
                                    key={skillsData[j][i].label}
                                    skillData={skillsData[j][i]}
                                    filterState={filterState}
                                />
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function SkillTile({ skillData, filterState }) {
    const skillName = skillData.label;
    const selectedSkills = filterState.skills;
    const isSelected = selectedSkills.includes(skillName);
    const dispatch = useDispatch();

    return (
        <td
            className={`p-1 border-r border-subdued last:border-none bg-hover cursor-pointer ${
                isSelected && 'bg-secondary text-accent'
            }`}
            onClick={() => {
                if (isSelected) {
                    dispatch(updateTaskFilter({ field: 'skills', value: _.without(selectedSkills, skillName) }));
                } else {
                    dispatch(updateTaskFilter({ field: 'skills', value: [...selectedSkills, skillName] }));
                }
            }}
        >
            <div className='flex items-center text-xs'>
                <img src={`/img/${skillData.icon}`} alt={skillName} className='inline mx-1' />
                {skillName}
            </div>
        </td>
    );
}
