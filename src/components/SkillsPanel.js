/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

const SKILLS = [
    'Attack',
    'Hitpoints',
    'Mining',
    'Strength',
    'Agility',
    'Smithing',
    'Defence',
    'Herblore',
    'Fishing',
    'Ranged',
    'Thieving',
    'Cooking',
    'Prayer',
    'Crafting',
    'Firemaking',
    'Magic',
    'Fletching',
    'Woodcutting',
    'Runecraft',
    'Slayer',
    'Farming',
    'Construction',
    'Hunter',
];
const UNLOCKED_SKILLS = ['Runecraft', 'Agility', 'Firemaking'];

export default function SkillsPanel() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const SkillTile = ({ skill }) => {
        return (
            <td
                className={`p-1 border-r border-subdued last:border-none bg-hover cursor-pointer ${
                    selectedSkill === skill && 'bg-secondary'
                }`}
                onClick={() => setSelectedSkill(skill)}
            >
                <div className='flex items-center'>
                    <img src={`/img/${skill.toLowerCase()}.gif`} alt={skill} className='inline mx-1' />
                    {UNLOCKED_SKILLS.includes(skill) ? (
                        <span className='text-center grow mr-1'>99 / 99</span>
                    ) : (
                        <span className='text-error icon-outline text-lg text-center grow'>lock</span>
                    )}
                </div>
            </td>
        );
    };

    return (
        <div>
            <table className='table-auto'>
                <tbody>
                    {Array.from({ length: 8 }, (_, i) => {
                        return (
                            <tr key={i} className='border-b border-subdued last:border-none'>
                                <SkillTile skill={SKILLS[i * 3]} />
                                <SkillTile skill={SKILLS[i * 3 + 1]} />
                                {i * 3 + 2 < SKILLS.length ? <SkillTile skill={SKILLS[i * 3 + 2]} /> : <td />}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='w-full px-1 mt-2 align-top'>
                {selectedSkill ? (
                    <>
                        <span className='heading-accent-md'>{selectedSkill}</span>
                        <p className='italic text-sm'>Cost: 500 league points</p>
                        <button className='button-outline px-1 my-1 w-full' type='button'>
                            {UNLOCKED_SKILLS.includes(selectedSkill)
                                ? `Re-lock ${selectedSkill}`
                                : `Unlock ${selectedSkill}`}
                        </button>
                    </>
                ) : (
                    <span className='italic text-sm'>Click on a skill to lock/unlock it.</span>
                )}
            </div>
        </div>
    );
}
