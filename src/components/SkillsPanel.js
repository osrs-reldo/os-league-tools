import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { lockSkill, unlockSkill } from '../store/unlocks/unlocks';
import getSkillsPanelData from '../util/getSkillsPanelData';
import calculateCombatLevel from '../util/calculateCombatLevel';
import calculateQuestStats from '../util/calculateQuestStats';
import { DEFAULT_UNLOCKED_SKILLS } from '../store/unlocks/constants';
import { CLUE_TIERS } from '../data/constants';
import { numberWithCommas } from '../util/numberFormatters';
import images from '../assets/images';
import Separator from './common/Separator';

export default function SkillsPanel() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const hiscores = useSelector(state => state.character.hiscoresCache.data);
  const { skills: unlockedSkills, quests } = useSelector(state => state.unlocks);
  const dispatch = useDispatch();

  const combatLevelData = hiscores ? calculateCombatLevel(hiscores?.skills) : { rounded: '3' };
  const questPointData = calculateQuestStats(quests);

  const renderStatDetailsPanel = () =>
    selectedSkill ? (
      <>
        <p className='heading-accent-md'>{selectedSkill.label}</p>
        {hiscores && unlockedSkills.includes(selectedSkill.label) && (
          <>
            <p className='italic text-sm'>
              Experience: {numberWithCommas(hiscores?.skills[selectedSkill.label.toLowerCase()].xp)}
            </p>
            <p className='italic text-sm'>
              Rank: {numberWithCommas(hiscores?.skills[selectedSkill.label.toLowerCase()].rank)}
            </p>
          </>
        )}
        {!DEFAULT_UNLOCKED_SKILLS.includes(selectedSkill.label) && (
          <div className='mt-4'>
            {!unlockedSkills.includes(selectedSkill.label) && (
              <p className='italic text-sm'>Cost: {selectedSkill.unlockCost}</p>
            )}
            <button
              className='button-outline px-1 my-1 w-full'
              type='button'
              onClick={() =>
                unlockedSkills.includes(selectedSkill.label)
                  ? dispatch(lockSkill({ skill: selectedSkill.label }))
                  : dispatch(unlockSkill({ skill: selectedSkill.label }))
              }
            >
              {unlockedSkills.includes(selectedSkill.label)
                ? `Re-lock ${selectedSkill.label}`
                : `Unlock ${selectedSkill.label}`}
            </button>
          </div>
        )}
      </>
    ) : (
      <span className='italic text-sm'>Click on a skill to lock/unlock it.</span>
    );

  return (
    <div>
      <div className='grid grid-cols-3 gap-px w-full mb-2'>
        <div className='flex items-center justify-center' data-tip data-for='combatTile'>
          <img className='mr-2' src={images['combat.png']} alt='Combat level' />
          <span className='text-center mr-1'>{combatLevelData.rounded}</span>
        </div>
        {hiscores && <ReactTooltip id='combatTile'>Exact: {combatLevelData.exact}</ReactTooltip>}
        <div className='flex items-center justify-center' data-tip data-for='questTile'>
          <img className='mr-2' src={images['tab-quests.png']} alt='QP total' />
          <span className='text-center mr-1'>{questPointData.points}</span>
        </div>
        {hiscores && (
          <ReactTooltip id='questTile'>
            <p>Completed: {questPointData.finished}</p>
            <p>In progress: {questPointData.inProgress}</p>
            <p>Not started: {questPointData.notStarted}</p>
          </ReactTooltip>
        )}
        <div className='flex items-center justify-center' data-tip data-for='clueTile'>
          <img className='mr-2' src={images['clue.png']} alt='Total clues' />
          <span className='text-center mr-1'>{hiscores?.clues.all.score > 0 ? hiscores.clues.all.score : '0'}</span>
        </div>
        {hiscores && (
          <ReactTooltip id='clueTile'>
            <ClueDetailsLine tier='All' hiscores={hiscores?.clues.all} />
            <Separator className='my-2' />
            {CLUE_TIERS.map(tier => (
              <ClueDetailsLine tier={tier} hiscores={hiscores?.clues[tier.toLowerCase()]} key={tier} />
            ))}
          </ReactTooltip>
        )}
      </div>

      <div className='grid grid-cols-3 gap-px w-fit bg-subdued'>
        {Object.values(getSkillsPanelData()).map(data => (
          <SkillTile
            key={data.label}
            skillData={data}
            setSelectedSkill={setSelectedSkill}
            unlockedSkills={unlockedSkills}
            level={hiscores?.skills[data.label.toLowerCase()]?.level}
          />
        ))}
      </div>
      <div className='w-full px-1'>{renderStatDetailsPanel()}</div>
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

  return (
    <>
      <div
        className={`p-1 bg-hover cursor-pointer bg-primary ${selectedSkill === skillName && 'bg-secondary'}`}
        key={skillData.label}
        onClick={() => setSelectedSkill(skillData)}
        data-tip
        data-for={skillName}
      >
        <div className='flex items-center'>
          <img src={skillData.icon} alt={skillName} className='inline mx-1 w-4' />
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
      <ReactTooltip id={skillName}>{skillName}</ReactTooltip>
    </>
  );
}

function ClueDetailsLine({ tier, hiscores }) {
  const { score, rank } = hiscores;
  return (
    <div className='flex items-center'>
      <img className='h-4 mr-1' src={images[`clue${tier ? `-${tier.toLowerCase()}` : ''}.png`]} alt={`${tier} clues`} />
      <span className='text-sm'>
        {tier}: {numberWithCommas(score >= 0 ? score : '-')} Rank: {numberWithCommas(rank >= 0 ? rank : '-')}
      </span>
    </div>
  );
}
