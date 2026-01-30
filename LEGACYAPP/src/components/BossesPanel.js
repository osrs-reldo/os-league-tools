import React from 'react';
import { useSelector } from 'react-redux';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { BOSSES } from '../data/constants';
import { NONE_REGION_ID, regionsById } from '../data/regions';

export default function BossesPanel() {
  const hiscores = useSelector(state => state.character.hiscoresCache.data?.bosses);
  const regionState = useSelector(state => state.unlocks.regions);

  const unlockedRegionNames = new Set(
    regionState.filter(regionId => regionId !== NONE_REGION_ID).map(regionId => regionsById[regionId].label)
  );
  const filteredBosses = Object.values(BOSSES).filter(bossData =>
    bossData.regions.every(regionName => unlockedRegionNames.has(regionName))
  );
  const emptyTilesToRender = 4 - (filteredBosses.length % 4);
  const emptyTiles = [];
  for (let i = 0; i < emptyTilesToRender; i++) {
    emptyTiles.push(i);
  }

  return (
    <div className='grid grid-cols-4 gap-px w-fit bg-subdued'>
      {filteredBosses.map(boss => (
        <BossTile key={boss.label} boss={boss} bossHiscores={hiscores ? hiscores[boss.hiscoresName] : {}} />
      ))}
      {emptyTiles.map(i => (
        <BossTile key={i} />
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
