import React, { useState } from 'react';
import { SKILLS } from '../data/constants';

const UNLOCKED_SKILLS = ['Defence', 'Thieving', 'Fishing'];

export default function SkillsPanel() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    return (
        <div>
            <table className='table-auto'>
                <tbody>
                    {Array.from({ length: 8 }, (_, i) => (
                        <tr key={i} className='border-b border-subdued last:border-none'>
                            <SkillTile
                                skill={SKILLS.SKILL_PANEL[i * 3]}
                                selectedSkill={selectedSkill}
                                setSelectedSkill={setSelectedSkill}
                            />
                            <SkillTile
                                skill={SKILLS.SKILL_PANEL[i * 3 + 1]}
                                selectedSkill={selectedSkill}
                                setSelectedSkill={setSelectedSkill}
                            />
                            {i * 3 + 2 < SKILLS.SKILL_PANEL.length ? (
                                <SkillTile
                                    skill={SKILLS.SKILL_PANEL[i * 3 + 2]}
                                    selectedSkill={selectedSkill}
                                    setSelectedSkill={setSelectedSkill}
                                />
                            ) : (
                                <td />
                            )}
                        </tr>
                    ))}
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

function SkillTile({ skill, selectedSkill, setSelectedSkill }) {
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
}
