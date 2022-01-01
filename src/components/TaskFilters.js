import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../reducer/filters';
import ButtonGroup from './common/ButtonGroup';
import InputSelect from './common/InputSelect';

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
                                    value: e.target.checked ? null : ['easy', 'med', 'hard', 'elite', 'mstr'],
                                })
                            )
                        }
                    />
                    <span className='ml-1 font-semibold'>All difficulties</span>
                </div>
                <ButtonGroup
                    buttons={[
                        { id: 'easy', text: 'Easy' },
                        { id: 'med', text: 'Medium' },
                        { id: 'hard', text: 'Hard' },
                        { id: 'elite', text: 'Elite' },
                        { id: 'mstr', text: 'Master' },
                    ]}
                    enabled={!!filterState.difficulty}
                    selection={filterState.difficulty || ['easy', 'med', 'hard', 'elite', 'mstr']}
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
                        options={[
                            { value: 'Bossing', label: 'Bossing' },
                            { value: 'Clues', label: 'Clues' },
                            { value: 'Combat', label: 'Combat' },
                            { value: 'Diaries', label: 'Diaries' },
                            { value: 'Levels/Exp', label: 'Levels/Exp' },
                            { value: 'Quests', label: 'Quests' },
                            { value: 'Raids', label: 'Raids' },
                            { value: 'Skilling', label: 'Skilling' },
                            { value: 'Other', label: 'Other' },
                        ]}
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
                        options={[
                            { value: 'Abyssal Sire', label: 'Abyssal Sire' },
                            { value: 'Agility', label: 'Agility' },
                            { value: 'Ardougne', label: 'Ardougne' },
                            { value: 'Attack', label: 'Attack' },
                            { value: 'Barbarian assault', label: 'Barbarian assault' },
                            { value: 'Barrows', label: 'Barrows' },
                            { value: 'Base level', label: 'Base level' },
                            { value: 'Beginner clues', label: 'Beginner clues' },
                            { value: 'Callisto', label: 'Callisto' },
                            { value: 'Castle wars', label: 'Castle wars' },
                            { value: 'Chaos Elemental', label: 'Chaos Elemental' },
                            { value: 'Chaos Fanatic', label: 'Chaos Fanatic' },
                            { value: 'Combat level', label: 'Combat level' },
                            { value: 'Construction', label: 'Construction' },
                            { value: 'Cooking', label: 'Cooking' },
                            { value: 'Corporeal beast', label: 'Corporeal beast' },
                            { value: 'Crafting', label: 'Crafting' },
                            { value: 'Crazy Archaeologist', label: 'Crazy Archaeologist' },
                            { value: 'Crystal chests', label: 'Crystal chests' },
                            { value: 'Dagannoth Kings', label: 'Dagannoth Kings' },
                            { value: 'Defence', label: 'Defence' },
                            { value: 'Demonic gorillas', label: 'Demonic gorillas' },
                            { value: 'Desert diary', label: 'Desert diary' },
                            { value: 'Easy clues', label: 'Easy clues' },
                            { value: 'Elite clues', label: 'Elite clues' },
                            { value: 'Experienced', label: 'Experienced' },
                            { value: 'Falador', label: 'Falador' },
                            { value: 'Farming', label: 'Farming' },
                            { value: 'Fight caves', label: 'Fight caves' },
                            { value: 'Firemaking', label: 'Firemaking' },
                            { value: 'First level', label: 'First level' },
                            { value: 'Fishing', label: 'Fishing' },
                            { value: 'Fishing Trawler', label: 'Fishing Trawler' },
                            { value: 'Fletching', label: 'Fletching' },
                            { value: 'Fremennik', label: 'Fremennik' },
                            { value: 'Gauntlet', label: 'Gauntlet' },
                            { value: 'General', label: 'General' },
                            { value: 'Giant mole', label: 'Giant mole' },
                            { value: 'Giants', label: 'Giants' },
                            { value: 'God Wars', label: 'God Wars' },
                            { value: 'Grandmaster', label: 'Grandmaster' },
                            { value: 'Hard clues', label: 'Hard clues' },
                            { value: 'Herblore', label: 'Herblore' },
                            { value: 'Hitpoints', label: 'Hitpoints' },
                            { value: 'Hunter', label: 'Hunter' },
                            { value: 'Inferno', label: 'Inferno' },
                            { value: 'Intermediate', label: 'Intermediate' },
                            { value: 'Kalphite Queen', label: 'Kalphite Queen' },
                            { value: 'Kandarin diary', label: 'Kandarin diary' },
                            { value: 'Karamja diary', label: 'Karamja diary' },
                            { value: 'King Black Dragon', label: 'King Black Dragon' },
                            { value: 'Locations', label: 'Locations' },
                            { value: 'Lumbridge diary', label: 'Lumbridge diary' },
                            { value: 'Mage Training Arena', label: 'Mage Training Arena' },
                            { value: 'Magic', label: 'Magic' },
                            { value: 'Master clues', label: 'Master clues' },
                            { value: 'Medium clues', label: 'Medium clues' },
                            { value: 'Melee', label: 'Melee' },
                            { value: 'Mining', label: 'Mining' },
                            { value: 'Morytania', label: 'Morytania' },
                            { value: 'Nightmare', label: 'Nightmare' },
                            { value: 'Novice', label: 'Novice' },
                            { value: 'Other', label: 'Other' },
                            { value: 'Pest control', label: 'Pest control' },
                            { value: 'Pets', label: 'Pets' },
                            { value: 'Prayer', label: 'Prayer' },
                            { value: 'Ranged', label: 'Ranged' },
                            { value: 'Revenants', label: 'Revenants' },
                            { value: 'Runecraft', label: 'Runecraft' },
                            { value: 'Scorpia', label: 'Scorpia' },
                            { value: "Shades of Mort'ton", label: "Shades of Mort'ton" },
                            { value: 'Shared clue log', label: 'Shared clue log' },
                            { value: 'Shops', label: 'Shops' },
                            { value: 'Slayer', label: 'Slayer' },
                            { value: 'Smithing', label: 'Smithing' },
                            { value: 'Strength', label: 'Strength' },
                            { value: 'Tai Bwo Wannai', label: 'Tai Bwo Wannai' },
                            { value: 'Temple trekking', label: 'Temple trekking' },
                            { value: 'Theater of Blood', label: 'Theater of Blood' },
                            { value: 'Thieving', label: 'Thieving' },
                            { value: 'Total level', label: 'Total level' },
                            { value: 'Transportation', label: 'Transportation' },
                            { value: 'Tutorial', label: 'Tutorial' },
                            { value: 'Varrock', label: 'Varrock' },
                            { value: 'Venenatis', label: 'Venenatis' },
                            { value: "Vet'ion", label: "Vet'ion" },
                            { value: 'Vorkath', label: 'Vorkath' },
                            { value: 'Western Provinces', label: 'Western Provinces' },
                            { value: 'Wilderness', label: 'Wilderness' },
                            { value: 'Woodcutting', label: 'Woodcutting' },
                            { value: 'Zulrah', label: 'Zulrah' },
                        ]}
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
                        options={[
                            { value: 'Agility', label: 'Agility' },
                            { value: 'Attack', label: 'Attack' },
                            { value: 'Construction', label: 'Construction' },
                            { value: 'Cooking', label: 'Cooking' },
                            { value: 'Crafting', label: 'Crafting' },
                            { value: 'Defence', label: 'Defence' },
                            { value: 'Farming', label: 'Farming' },
                            { value: 'Firemaking', label: 'Firemaking' },
                            { value: 'Fishing', label: 'Fishing' },
                            { value: 'Fletching', label: 'Fletching' },
                            { value: 'Herblore', label: 'Herblore' },
                            { value: 'Hitpoints', label: 'Hitpoints' },
                            { value: 'Hunter', label: 'Hunter' },
                            { value: 'Magic', label: 'Magic' },
                            { value: 'Mining', label: 'Mining' },
                            { value: 'Prayer', label: 'Prayer' },
                            { value: 'Ranged', label: 'Ranged' },
                            { value: 'Runecraft', label: 'Runecraft' },
                            { value: 'Slayer', label: 'Slayer' },
                            { value: 'Smithing', label: 'Smithing' },
                            { value: 'Strength', label: 'Strength' },
                            { value: 'Thieving', label: 'Thieving' },
                            { value: 'Woodcutting', label: 'Woodcutting' },
                        ]}
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
                <button type='button' className='button-outline w-full mb-1'>
                    Clear filters
                </button>
                <button type='button' className='button-outline w-full'>
                    Undo last completed task
                </button>
            </div>
        </div>
    );
}
