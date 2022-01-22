import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuestFilter } from '../store/filters';
import ButtonGroup from './common/ButtonGroup';
import InputSelect from './common/InputSelect';
import { QUEST_DIFFICULTY, QUEST_LENGTH } from '../data/constants';
import LabeledCheckbox from './common/LabeledCheckbox';

export default function QuestFilters() {
    const filterState = useSelector(state => state.filters.quests);
    const dispatch = useDispatch();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-2 mt-3'>
            <div className='order-1'>
                <span className='heading-accent-md mt-1'>Status</span>
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
            <div className='xl:order-4 lg:order-2 sm:order-6 order-4'>
                <span className='heading-accent-md mt-1'>Difficulty</span>
                <div className='w-full px-3 text-sm flex flex-col'>
                    <LabeledCheckbox
                        label='All difficulties'
                        defaultChecked={!filterState.difficulty}
                        onClick={e =>
                            dispatch(
                                updateQuestFilter({
                                    field: 'difficulty',
                                    value: e.target.checked ? null : Object.values(QUEST_DIFFICULTY).map(x => x.label),
                                })
                            )
                        }
                        className='mb-1'
                    />
                    <InputSelect
                        label='difficulty'
                        options={Object.values(QUEST_DIFFICULTY).map(difficulty => ({
                            value: difficulty.label,
                            label: difficulty.label,
                        }))}
                        multiple
                        className='text-sm'
                        enabled={!!filterState.difficulty}
                        selection={filterState.difficulty}
                        setSelection={val => dispatch(updateQuestFilter({ field: 'difficulty', value: val }))}
                    />
                </div>
            </div>
            <div className='xl:order-4 lg:order-2 sm:order-6 order-4'>
                <span className='heading-accent-md mt-1'>Length</span>
                <div className='w-full px-3 text-sm flex flex-col'>
                    <LabeledCheckbox
                        label='All lengths'
                        defaultChecked={!filterState.length}
                        onClick={e =>
                            dispatch(
                                updateQuestFilter({
                                    field: 'length',
                                    value: e.target.checked ? null : Object.values(QUEST_LENGTH).map(x => x.label),
                                })
                            )
                        }
                        className='mb-1'
                    />
                    <InputSelect
                        label='length'
                        options={Object.values(QUEST_LENGTH).map(length => ({
                            value: length.label,
                            label: length.label,
                        }))}
                        multiple
                        className='text-sm'
                        enabled={!!filterState.length}
                        selection={filterState.length}
                        setSelection={val => dispatch(updateQuestFilter({ field: 'length', value: val }))}
                    />
                </div>
            </div>
        </div>
    );
}
