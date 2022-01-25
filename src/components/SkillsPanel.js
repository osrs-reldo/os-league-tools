import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATS } from '../data/constants';
import { DEFAULT_UNLOCKED_SKILLS } from '../store/unlocks/constants';
import { lockSkill, unlockSkill } from '../store/unlocks/unlocks';
import getSkillsPanelData from '../util/getSkillsPanelData';

export default function SkillsPanel() {
    const hiscores = useSelector(state => state.character.hiscoresCache.data);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const unlockedSkills = useSelector(state => state.unlocks.skills);
    const dispatch = useDispatch();
    const skillsPanel = getSkillsPanelData({});

    return (
        <div>
            <div className='grid grid-cols-3 gap-px w-fit bg-subdued'>
                {Object.values(skillsPanel).map(data => (
                    <SkillTile
                        key={data.label}
                        skillData={data}
                        setSelectedSkill={setSelectedSkill}
                        unlockedSkills={unlockedSkills}
                        level={hiscores?.skills[data.label.toLowerCase()]?.level}
                    />
                ))}
            </div>
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
            dispatch(unlockSkill({ skill: skillName }));
        } else if (skillName === 'Hitpoints' && level > 10 && !isSkillUnlocked) {
            dispatch(unlockSkill({ skill: skillName }));
        }
    }, [level]);

    if (skillName === 'Overall') {
        return (
            <div className='flex items-center justify-around bg-primary' key={skillData.label}>
                <img src={skillData.icon} alt={skillName} />
                <span className='text-center mr-1'>{level}</span>
            </div>
        );
    }

    if (DEFAULT_UNLOCKED_SKILLS.includes(skillName)) {
        return (
            <div className='flex items-center bg-primary' key={skillData.label}>
                <img src={skillData.icon} alt={skillName} className='inline mx-1' />
                <span className='text-center grow'>
                    {level} / {level}
                </span>
            </div>
        );
    }

    return (
        <div
            className={`p-1 bg-hover cursor-pointer bg-primary ${selectedSkill === skillName && 'bg-secondary'}`}
            key={skillData.label}
            onClick={() => setSelectedSkill(skillName)}
        >
            <div className='flex items-center'>
                <img src={skillData.icon} alt={skillName} className='inline mx-1' />
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
        </div>
    );
}
