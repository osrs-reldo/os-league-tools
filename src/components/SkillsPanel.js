import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATS } from '../data/constants';
import { DEFAULT_UNLOCKED_SKILLS } from '../store/unlocks/constants';
import { lockSkill, unlockSkill } from '../store/unlocks/unlocks';

export default function SkillsPanel({ characterStats }) {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const unlockedSkills = useSelector(state => state.unlocks.skills);
    const dispatch = useDispatch();

    const SKILLS_PANEL = {
        0: {},
        1: {},
        2: {},
    };
    Object.keys(STATS).forEach(skillName => {
        if (skillName === 'QP') {
            return;
        }
        const skillData = STATS[skillName];
        const column = Math.floor(skillData.panelOrder / 8);
        const row = skillData.panelOrder - column * 8;
        SKILLS_PANEL[column][row] = skillData;
    });

    return (
        <div>
            <table className='table-auto'>
                <tbody>
                    {Array.from({ length: 8 }, (_, i) => (
                        <tr key={i} className='border-b border-subdued last:border-none'>
                            {Array.from({ length: 3 }, (__, j) => (
                                <SkillTile
                                    key={SKILLS_PANEL[j][i].label}
                                    skillData={SKILLS_PANEL[j][i]}
                                    selectedSkill={selectedSkill}
                                    setSelectedSkill={setSelectedSkill}
                                    unlockedSkills={unlockedSkills}
                                    level={characterStats?.skills[SKILLS_PANEL[j][i].label.toLowerCase()]?.level}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='w-full px-1 mt-2 align-top'>
                {selectedSkill ? (
                    <>
                        <span className='heading-accent-md'>{selectedSkill}</span>
                        <p className='italic text-sm'>Cost: {STATS[selectedSkill].unlockCost}</p>
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

function SkillTile({ skillData, selectedSkill, setSelectedSkill, unlockedSkills, level = 1 }) {
    const skillName = skillData.label;
    const isSkillUnlocked = unlockedSkills.includes(skillData.label);
    const dispatch = useDispatch();

    useEffect(() => {
        if (skillName !== 'Hitpoints' && level > 1 && !isSkillUnlocked) {
            dispatch(unlockSkill({ skillName }));
        } else if (skillName === 'Hitpoints' && level > 10 && !isSkillUnlocked) {
            dispatch(unlockSkill({ skillName }));
        }
    }, [level]);

    if (skillName === 'Overall') {
        return (
            <td className='p-1 border-r border-subdued last:border-none'>
                <div className='flex items-center'>
                    <img src={`/img/${skillData.icon}`} alt={skillName} className='inline mx-1' />
                    <span className='text-center grow mr-1'>{level}</span>
                </div>
            </td>
        );
    }

    if (DEFAULT_UNLOCKED_SKILLS.includes(skillName)) {
        return (
            <td className='p-1 border-r border-subdued last:border-none'>
                <div className='flex items-center'>
                    <img src={`/img/${skillData.icon}`} alt={skillName} className='inline mx-1' />
                    <span className='text-center grow mr-1'>
                        {level} / {level}
                    </span>
                </div>
            </td>
        );
    }

    return (
        <td
            className={`p-1 border-r border-subdued last:border-none bg-hover cursor-pointer ${
                selectedSkill === skillName && 'bg-secondary'
            }`}
            onClick={() => setSelectedSkill(skillName)}
        >
            <div className='flex items-center'>
                <img src={`/img/${skillData.icon}`} alt={skillName} className='inline mx-1' />
                {isSkillUnlocked ? (
                    <span className='text-center grow mr-1'>
                        {level} / {level}
                    </span>
                ) : (
                    <span className='text-center grow text-sm text-error'>
                        <span className='icon-outline text-sm mr-1'>lock</span>
                        {skillData.unlockCost}
                    </span>
                )}
            </div>
        </td>
    );
}
