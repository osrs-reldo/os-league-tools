import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { update, reset } from '../reducer/filters';
import ButtonGroup from './common/ButtonGroup';
import InputSelect from './common/InputSelect';
import { CATEGORY, SUBCATEGORY, DIFFICULTY, SKILLS } from '../util/constants';

export default function TaskFilters() {
    const filterState = useSelector(state => state.filters);
    const dispatch = useDispatch();

    return (
        <div className='flex flex-col gap-2 mt-3'>
            <span className='heading-accent-md mt-1'>Status</span>
            <div className='w-full px-3 text-sm'>
                <ButtonGroup
                    buttons={[
                        { id: 'all', text: 'All tasks' },
                        { id: 'incl', text: 'Incomplete' },
                        { id: 'cmpl', text: 'Complete' },
                    ]}
                    selection={filterState.status}
                    setSelection={val => dispatch(update({ field: 'status', value: val }))}
                />
            </div>
            <span className='heading-accent-md mt-1'>To-do tasks</span>
            <div className='w-full px-3 text-sm'>
                <ButtonGroup
                    buttons={[
                        { id: 'all', text: 'All tasks' },
                        { id: 'hide', text: 'Hide to-do' },
                        { id: 'only', text: 'To-do only' },
                    ]}
                    selection={filterState.todo}
                    setSelection={val => dispatch(update({ field: 'todo', value: val }))}
                />
            </div>
            <span className='heading-accent-md mt-1'>Ignored tasks</span>
            <div className='w-full px-3 text-sm'>
                <ButtonGroup
                    buttons={[
                        { id: 'all', text: 'All tasks' },
                        { id: 'hide', text: 'Hide ignored' },
                        { id: 'only', text: 'Ignored only' },
                    ]}
                    selection={filterState.ignored}
                    setSelection={val => dispatch(update({ field: 'ignored', value: val }))}
                />
            </div>
            <span className='heading-accent-md mt-1'>Difficulty</span>
            <div className='w-full px-3 text-sm flex flex-col'>
                <div className='mb-1'>
                    <input
                        type='checkbox'
                        className='checkbox-primary'
                        defaultChecked={!filterState.difficulty}
                        onClick={e =>
                            dispatch(
                                update({
                                    field: 'difficulty',
                                    value: e.target.checked ? null : Object.values(DIFFICULTY).map(x => x.text),
                                })
                            )
                        }
                    />
                    <span className='ml-1 font-semibold'>All difficulties</span>
                </div>
                <ButtonGroup
                    buttons={Object.values(DIFFICULTY).map(difficulty => ({
                        id: difficulty.text,
                        text: difficulty.text,
                    }))}
                    enabled={!!filterState.difficulty}
                    selection={filterState.difficulty || Object.values(DIFFICULTY).map(x => x.text)}
                    setSelection={val => dispatch(update({ field: 'difficulty', value: val }))}
                    multi
                />
            </div>
            <span className='heading-accent-md mt-1'>Category</span>
            <div className='w-full px-3 text-sm flex gap-1'>
                <div>
                    <div className='mb-1'>
                        <input
                            type='checkbox'
                            className='checkbox-primary'
                            defaultChecked={!filterState.categories}
                            onClick={e =>
                                dispatch(update({ field: 'categories', value: e.target.checked ? null : 'all' }))
                            }
                        />
                        <span className='ml-1 font-semibold'>All categories</span>
                    </div>
                    <InputSelect
                        label='categories'
                        options={Object.values(CATEGORY).map(category => ({
                            value: category.text,
                            label: category.text,
                        }))}
                        multiple
                        className='text-sm'
                        enabled={!!filterState.categories}
                        selection={filterState.categories}
                        setSelection={val => dispatch(update({ field: 'categories', value: val }))}
                    />
                </div>
                <div>
                    <div className='mb-1'>
                        <input
                            type='checkbox'
                            className='checkbox-primary'
                            defaultChecked={!filterState.subcategories}
                            onClick={e =>
                                dispatch(update({ field: 'subcategories', value: e.target.checked ? null : 'all' }))
                            }
                        />
                        <span className='ml-1 font-semibold'>All subcategories</span>
                    </div>
                    <InputSelect
                        label='subcategories'
                        options={_.sortBy(
                            Object.values(SUBCATEGORY).map(subcategory => ({
                                value: subcategory.text,
                                label: subcategory.text,
                            })),
                            ['label']
                        )}
                        multiple
                        className='text-sm'
                        enabled={!!filterState.subcategories}
                        selection={filterState.subcategories}
                        setSelection={val => dispatch(update({ field: 'subcategories', value: val }))}
                    />
                </div>
            </div>
            <span className='heading-accent-md mt-1'>Skills</span>
            <div className='w-full px-3 text-sm flex flex-col gap-2'>
                <div>
                    <div className='mb-1'>
                        <input
                            type='checkbox'
                            className='checkbox-primary'
                            defaultChecked={!filterState.skills}
                            onClick={e => dispatch(update({ field: 'skills', value: e.target.checked ? null : 'all' }))}
                        />
                        <span className='ml-1 font-semibold'>All skills</span>
                    </div>
                    <InputSelect
                        label='skills'
                        options={SKILLS.ALPHABETICAL.map(skill => ({ value: skill, label: skill }))}
                        multiple
                        className='w-full text-sm'
                        enabled={!!filterState.skills}
                        selection={filterState.skills}
                        setSelection={val => dispatch(update({ field: 'skills', value: val }))}
                    />
                </div>
                <div className='mb-1'>
                    <input type='checkbox' className='checkbox-primary' />
                    <span className='ml-1 font-semibold'>Hide tasks with missing skill requirements</span>
                </div>
            </div>
            <span className='heading-accent-md mt-1'>Manage</span>
            <div className='w-full px-3'>
                <button type='button' className='button-outline w-full mb-1' onClick={() => dispatch(reset())}>
                    Clear filters
                </button>
                <button type='button' className='button-outline w-full'>
                    Undo last completed task
                </button>
            </div>
        </div>
    );
}
