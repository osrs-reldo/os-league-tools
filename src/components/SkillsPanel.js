import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SKILLS } from '../data/constants';
import { lockSkill, unlockSkill } from '../store/user/unlocks';

export default function SkillsPanel({ characterStats }) {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const unlockedSkills = useSelector(state => state.unlocks.skills);
    const dispatch = useDispatch();

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
                                unlockedSkills={unlockedSkills}
                                level={characterStats?.skills[SKILLS.SKILL_PANEL[i * 3].toLowerCase()]?.level}
                            />
                            <SkillTile
                                skill={SKILLS.SKILL_PANEL[i * 3 + 1]}
                                selectedSkill={selectedSkill}
                                setSelectedSkill={setSelectedSkill}
                                unlockedSkills={unlockedSkills}
                                level={characterStats?.skills[SKILLS.SKILL_PANEL[i * 3 + 1].toLowerCase()].level}
                            />
                            {i * 3 + 2 < SKILLS.SKILL_PANEL.length ? (
                                <SkillTile
                                    skill={SKILLS.SKILL_PANEL[i * 3 + 2]}
                                    selectedSkill={selectedSkill}
                                    setSelectedSkill={setSelectedSkill}
                                    unlockedSkills={unlockedSkills}
                                    level={characterStats?.skills[SKILLS.SKILL_PANEL[i * 3 + 2].toLowerCase()].level}
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
                        {/* TODO add sage's renown values for unlocks */}
                        {/* <span className='heading-accent-md'>{selectedSkill}</span> */}
                        {/* <p className='italic text-sm'>Cost: 500 league points</p> */}
                        <button
                            className='button-outline px-1 my-1 w-full'
                            type='button'
                            onClick={() =>
                                unlockedSkills.includes(selectedSkill)
                                    ? dispatch(lockSkill({ skill: selectedSkill }))
                                    : dispatch(unlockSkill({ skill: selectedSkill }))
                            }
                        >
                            {unlockedSkills.includes(selectedSkill)
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

function SkillTile({ skill, selectedSkill, setSelectedSkill, unlockedSkills, level = 1 }) {
    const dispatch = useDispatch();
    const isSkillUnlocked = unlockedSkills.includes(skill);

    useEffect(() => {
        if (level > 1 && !isSkillUnlocked) dispatch(unlockSkill({ skill }));
    }, [level]);

    return (
        <td
            className={`p-1 border-r border-subdued last:border-none bg-hover cursor-pointer ${
                selectedSkill === skill && 'bg-secondary'
            }`}
            onClick={() => setSelectedSkill(skill)}
        >
            <div className='flex items-center'>
                <img src={`/img/${skill.toLowerCase()}.gif`} alt={skill} className='inline mx-1' />
                {isSkillUnlocked ? (
                    <span className='text-center grow mr-1'>
                        {level} / {level}
                    </span>
                ) : (
                    <span className='text-error icon-outline text-lg text-center grow'>lock</span>
                )}
            </div>
        </td>
    );
}
