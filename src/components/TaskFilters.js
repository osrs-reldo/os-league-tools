import React from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import _ from 'lodash';
import { update as updateFilter, reset } from '../reducer/filters';
import { update as updateUserData } from '../reducer/userData';
import ButtonGroup from './common/ButtonGroup';
import InputSelect from './common/InputSelect';
import { CATEGORY, SUBCATEGORY, DIFFICULTY, SKILLS } from '../util/constants';
import LabeledCheckbox from './common/LabeledCheckbox';

export default function TaskFilters() {
    const filterState = useSelector(state => state.filters);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col gap-2 mt-3'>
            <span className='heading-accent-md mt-1'>Status</span>
            <div className='w-full px-3 text-sm'>
                <ButtonGroup
                    buttons={[
                        { value: 'all', label: 'All tasks' },
                        { value: 'incl', label: 'Incomplete' },
                        { value: 'cmpl', label: 'Complete' },
                    ]}
                    selection={filterState.status}
                    setSelection={val => dispatch(updateFilter({ field: 'status', value: val }))}
                />
            </div>
            <span className='heading-accent-md mt-1'>To-do tasks</span>
            <div className='w-full px-3 text-sm'>
                <ButtonGroup
                    buttons={[
                        { value: 'all', label: 'All tasks' },
                        { value: 'hide', label: 'Hide to-do' },
                        { value: 'only', label: 'To-do only' },
                    ]}
                    selection={filterState.todo}
                    setSelection={val => dispatch(updateFilter({ field: 'todo', value: val }))}
                />
            </div>
            <span className='heading-accent-md mt-1'>Ignored tasks</span>
            <div className='w-full px-3 text-sm'>
                <ButtonGroup
                    buttons={[
                        { value: 'all', label: 'All tasks' },
                        { value: 'hide', label: 'Hide ignored' },
                        { value: 'only', label: 'Ignored only' },
                    ]}
                    selection={filterState.ignored}
                    setSelection={val => dispatch(updateFilter({ field: 'ignored', value: val }))}
                />
            </div>
            <span className='heading-accent-md mt-1'>Difficulty</span>
            <div className='w-full px-3 text-sm flex flex-col'>
                <LabeledCheckbox
                    label='All difficulties'
                    defaultChecked={!filterState.difficulty}
                    onClick={e =>
                        dispatch(
                            updateFilter({
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
                    setSelection={val => dispatch(updateFilter({ field: 'difficulty', value: val }))}
                    multi
                />
            </div>
            <span className='heading-accent-md mt-1'>Category</span>
            <div className='w-full px-3 text-sm flex gap-1'>
                <div>
                    <LabeledCheckbox
                        label='All categories'
                        defaultChecked={!filterState.categories}
                        onClick={e =>
                            dispatch(updateFilter({ field: 'categories', value: e.target.checked ? null : 'all' }))
                        }
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
                        enabled={!!filterState.categories}
                        selection={filterState.categories}
                        setSelection={val => dispatch(updateFilter({ field: 'categories', value: val }))}
                    />
                </div>
                <div>
                    <LabeledCheckbox
                        label='All subcategories'
                        defaultChecked={!filterState.subcategories}
                        onClick={e =>
                            dispatch(updateFilter({ field: 'subcategories', value: e.target.checked ? null : 'all' }))
                        }
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
                        enabled={!!filterState.subcategories}
                        selection={filterState.subcategories}
                        setSelection={val => dispatch(updateFilter({ field: 'subcategories', value: val }))}
                    />
                </div>
            </div>
            <span className='heading-accent-md mt-1'>Skills</span>
            <div className='w-full px-3 text-sm flex flex-col gap-2'>
                <LabeledCheckbox
                    label='All skills'
                    defaultChecked={!filterState.skills}
                    onClick={e => dispatch(updateFilter({ field: 'skills', value: e.target.checked ? null : 'all' }))}
                />
                <InputSelect
                    label='skills'
                    options={SKILLS.ALPHABETICAL.map(skill => ({ value: skill, label: skill }))}
                    multiple
                    className='w-full text-sm'
                    enabled={!!filterState.skills}
                    selection={filterState.skills}
                    setSelection={val => dispatch(updateFilter({ field: 'skills', value: val }))}
                />
                <LabeledCheckbox label='Hide tasks with unmet requirements' className='mb-1' />
            </div>
            <div className='w-full px-3'>
                <button type='button' className='button-outline w-full mb-1' onClick={() => dispatch(reset())}>
                    Clear filters
                </button>
                {filterState.reorderEnabled ? (
                    <button
                        type='button'
                        className='button-outline w-full mb-1'
                        onClick={() =>
                            batch(() => {
                                dispatch(updateFilter({ field: 'reorderEnabled', value: false }));
                                dispatch(updateUserData({ field: 'taskOrder', value: null })); // TODO
                            })
                        }
                    >
                        Save custom task order
                    </button>
                ) : (
                    <button
                        type='button'
                        className='button-outline w-full mb-1'
                        onClick={() => dispatch(updateFilter({ field: 'reorderEnabled', value: true }))}
                    >
                        Enable drag-and-drop reordering
                    </button>
                )}
            </div>
        </div>
    );
}
