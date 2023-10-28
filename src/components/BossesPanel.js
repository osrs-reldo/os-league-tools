import React from 'react';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { BOSSES } from '../data/constants';

export default function BossesPanel() {
  const hiscores = useSelector(state => state.character.hiscoresCache.data?.bosses);

  return (
    <div className='grid grid-cols-4 gap-px w-fit bg-subdued'>
      {Object.values(BOSSES).map(boss => (
        <BossTile key={boss.label} boss={boss} bossHiscores={hiscores ? hiscores[boss.hiscoresName] : {}} />
      ))}
    </div>
  );
}

function BossTile({ boss, bossHiscores }) {
  const killCount = bossHiscores?.score > 0 ? bossHiscores?.score : 0;

  return boss ? (
    <>
      <div className='p-1 bg-primary' data-tip data-for={boss.label}>
        <div className='flex items-center'>
          <img src={boss.icon} alt={boss.label} className='inline mx-1' />
          <p className='text-center grow mr-1'>{killCount}</p>
        </div>
      </div>
      <ReactTooltip id={boss.label}>{boss.label}</ReactTooltip>
    </>
  ) : (
    <div className='bg-primary' />
  );
}
