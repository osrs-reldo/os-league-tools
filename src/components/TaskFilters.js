import React from 'react';
import ButtonGroup from './common/ButtonGroup';
import InputSelect from './common/InputSelect';

export default function TaskFilters() {
    return (
        <div className='flex flex-col gap-2 mt-3'>
            <span className='heading-accent-md mt-1'>Sort</span>
            <div className='w-full px-3'>
                <InputSelect
                    label='sort'
                    options={[
                        'Default (ingame)',
                        'Name',
                        'Difficulty',
                        'Status',
                        'Category',
                        'Subcategory',
                        'Date completed',
                        'Custom',
                    ]}
                    defaultSelection='default'
                    className='text-sm'
                />
            </div>
            <span className='heading-accent-md mt-1'>Status</span>
            <div className='w-full px-3 text-sm'>
                <ButtonGroup
                    buttons={[
                        { id: 'all', text: 'All tasks' },
                        { id: 'incl', text: 'Incomplete' },
                        { id: 'cmpl', text: 'Complete' },
                    ]}
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
                    defaultSelectedButtonId='hide'
                />
            </div>
            <span className='heading-accent-md mt-1'>Difficulty</span>
            <div className='w-full px-3 text-sm flex flex-col'>
                <div className='mb-1'>
                    <input type='checkbox' className='checkbox-primary' defaultChecked />
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
                    enabled={false}
                />
            </div>
            <span className='heading-accent-md mt-1'>Category</span>
            <div className='w-full px-3 text-sm flex gap-1'>
                <div>
                    <div className='mb-1'>
                        <input type='checkbox' className='checkbox-primary' defaultChecked />
                        <span className='ml-1 font-semibold'>All categories</span>
                    </div>
                    <InputSelect
                        label='categories'
                        options={[
                            'Bossing',
                            'Clues',
                            'Combat',
                            'Diaries',
                            'Levels/Exp',
                            'Quests',
                            'Raids',
                            'Skilling',
                            'Other',
                        ]}
                        multiple
                        disabled
                    />
                </div>
                <div>
                    <div className='mb-1'>
                        <input type='checkbox' className='checkbox-primary' defaultChecked />
                        <span className='ml-1 font-semibold'>All subcategories</span>
                    </div>
                    <InputSelect
                        label='subcategories'
                        options={[
                            'Abyssal Sire',
                            'Agility',
                            'Ardougne',
                            'Attack',
                            'Barbarian assault',
                            'Barrows',
                            'Base level',
                            'Beginner clues',
                            'Callisto',
                            'Castle wars',
                            'Chaos Elemental',
                            'Chaos Fanatic',
                            'Combat level',
                            'Construction',
                            'Cooking',
                            'Corporeal beast',
                            'Crafting',
                            'Crazy Archaeologist',
                            'Crystal chests',
                            'Dagannoth Kings',
                            'Defence',
                            'Demonic gorillas',
                            'Desert diary',
                            'Easy clues',
                            'Elite clues',
                            'Experienced',
                            'Falador',
                            'Farming',
                            'Fight caves',
                            'Firemaking',
                            'First level',
                            'Fishing',
                            'Fishing Trawler',
                            'Fletching',
                            'Fremennik',
                            'Gauntlet',
                            'General',
                            'Giant mole',
                            'Giants',
                            'God Wars',
                            'Grandmaster',
                            'Hard clues',
                            'Herblore',
                            'Hitpoints',
                            'Hunter',
                            'Inferno',
                            'Intermediate',
                            'Kalphite Queen',
                            'Kandarin diary',
                            'Karamja diary',
                            'King Black Dragon',
                            'Locations',
                            'Lumbridge diary',
                            'Mage Training Arena',
                            'Magic',
                            'Master clues',
                            'Medium clues',
                            'Melee',
                            'Mining',
                            'Morytania',
                            'Nightmare',
                            'Novice',
                            'Other',
                            'Pest control',
                            'Pets',
                            'Prayer',
                            'Ranged',
                            'Revenants',
                            'Runecraft',
                            'Scorpia',
                            "Shades of Mort'ton",
                            'Shared clue log',
                            'Shops',
                            'Slayer',
                            'Smithing',
                            'Strength',
                            'Tai Bwo Wannai',
                            'Temple trekking',
                            'Theater of Blood',
                            'Thieving',
                            'Total level',
                            'Transportation',
                            'Tutorial',
                            'Varrock',
                            'Venenatis',
                            "Vet'ion",
                            'Vorkath',
                            'Western Provinces',
                            'Wilderness',
                            'Woodcutting',
                            'Zulrah',
                        ]}
                        multiple
                        disabled
                    />
                </div>
            </div>
            <span className='heading-accent-md mt-1'>Skills</span>
            <div className='w-full px-3 text-sm flex flex-col gap-2'>
                <div>
                    <div className='mb-1'>
                        <input type='checkbox' className='checkbox-primary' defaultChecked />
                        <span className='ml-1 font-semibold'>All skills</span>
                    </div>
                    <InputSelect
                        label='skills'
                        options={[
                            'Agility',
                            'Attack',
                            'Construction',
                            'Cooking',
                            'Crafting',
                            'Defence',
                            'Farming',
                            'Firemaking',
                            'Fishing',
                            'Fletching',
                            'Herblore',
                            'Hitpoints',
                            'Hunter',
                            'Magic',
                            'Mining',
                            'Prayer',
                            'Ranged',
                            'Runecraft',
                            'Slayer',
                            'Smithing',
                            'Strength',
                            'Thieving',
                            'Woodcutting',
                        ]}
                        multiple
                        disabled
                        className='w-full'
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
