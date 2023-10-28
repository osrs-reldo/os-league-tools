import React from 'react';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import getSkillsPanelData from '../util/getSkillsPanelData';
import calculateCombatLevel from '../util/calculateCombatLevel';
import calculateQuestStats from '../util/calculateQuestStats';
import { CLUE_TIERS } from '../data/constants';
import { numberWithCommas } from '../util/numberFormatters';
import images from '../assets/images';
import Separator from './common/Separator';

export default function SkillsPanel() {
  const hiscores = useSelector(state => state.character.hiscoresCache.data);
  const { quests } = useSelector(state => state.unlocks);

  const combatLevelData = hiscores ? calculateCombatLevel(hiscores?.skills) : { rounded: '3' };
  const questPointData = calculateQuestStats(quests);

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
          <SkillTile key={data.label} skillData={data} level={hiscores?.skills[data.label.toLowerCase()]?.level} />
        ))}
      </div>
    </div>
  );
}

function SkillTile({ skillData, level = 1 }) {
  const skillName = skillData.label;

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
      <div className='p-1 bg-primary' key={skillData.label} data-tip data-for={skillName}>
        <div className='flex items-center'>
          <img src={skillData.icon} alt={skillName} className='inline mx-1 w-4' />
          <span className='text-center grow mr-1'>
            {level} / {level}
          </span>
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
