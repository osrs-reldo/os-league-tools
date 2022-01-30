import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFragmentFilter, resetFragments } from '../store/filters';
import ButtonGroup from './common/ButtonGroup';
import FilterButtons, { FilterSelectAll } from './common/FilterButtons';
import { ACTIVITIES, SETS, TAGS } from '../data/relics';

export default function RelicFilters() {
    const filterState = useSelector(state => state.filters.fragments);
    const dispatch = useDispatch();

    return (
        <>
            <div className='mb-3'>
                <p className='heading-accent-md mb-1'>Status</p>
                <div className='w-full px-3 text-sm'>
                    <ButtonGroup
                        buttons={[
                            { value: 'all', label: 'All fragments' },
                            { value: 'locked', label: 'Locked' },
                            { value: 'unlocked', label: 'Unlocked' },
                        ]}
                        selection={filterState.status}
                        setSelection={val => dispatch(updateFragmentFilter({ field: 'status', value: val }))}
                    />
                </div>
            </div>
            <div className='mb-3'>
                <p className='heading-accent-md mb-1'>Level</p>
                <div className='w-full px-3 text-sm'>
                    <ButtonGroup
                        buttons={[
                            { value: 'all', label: 'All' },
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                        ]}
                        selection={filterState.levels}
                        setSelection={val => dispatch(updateFragmentFilter({ field: 'levels', value: val }))}
                    />
                </div>
            </div>
            <div className='mb-3'>
                <p className='heading-accent-md mb-1'>Set effect</p>
                <div className='w-full px-3 text-xs flex flex-col'>
                    <FilterButtons
                        cols={3}
                        filterName='sets'
                        selectedValues={filterState.sets}
                        updateFunc={updateFragmentFilter}
                        values={Object.values(SETS)}
                        orientation='col'
                    />
                    <FilterSelectAll filterName='sets' updateFunc={updateFragmentFilter} values={Object.values(SETS)} />
                </div>
            </div>
            <div className='mb-3'>
                <p className='heading-accent-md mb-1'>Skills/Activities</p>
                <div className='w-full px-3 text-xs flex flex-col'>
                    <FilterButtons
                        cols={3}
                        filterName='activities'
                        selectedValues={filterState.activities}
                        updateFunc={updateFragmentFilter}
                        values={Object.values(ACTIVITIES)}
                    />
                    <FilterSelectAll
                        filterName='activities'
                        updateFunc={updateFragmentFilter}
                        values={Object.values(ACTIVITIES)}
                    />
                </div>
            </div>
            <div className='mb-3'>
                <p className='heading-accent-md mb-1'>Effect type</p>
                <div className='w-full px-3 text-xs flex flex-col'>
                    <FilterButtons
                        cols={2}
                        filterName='tags'
                        selectedValues={filterState.tags}
                        updateFunc={updateFragmentFilter}
                        values={Object.values(TAGS)}
                    />
                    <FilterSelectAll filterName='tags' updateFunc={updateFragmentFilter} values={Object.values(TAGS)} />
                </div>
            </div>
            <button
                type='button'
                className='button-outline w-full mb-1 h-fit'
                onClick={() => dispatch(resetFragments())}
            >
                Clear filters
            </button>
        </>
    );
}
