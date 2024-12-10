import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { NONE_REGION_ID, regionsById, REGION_UNLOCK_THRESHOLDS } from '../data/regions';
import { getRegionTier } from '../util/getTier';
import RegionMap from './RegionMap';
import RegionUnlockModal from './RegionUnlockModal';
import { ThemedProgressBar } from './ThemeProvider';

export default function CharacterRegionsSection({ unlockedRegions, taskStats }) {
  const [regionUnlockModalState, setRegionUnlockModalState] = useState({
    open: false,
    tier: -1,
    initialSelectedRegion: null,
  });
  const openUnlockModal = tier => {
    setRegionUnlockModalState({
      open: true,
      tier,
      initialSelectedRegion: unlockedRegions[tier] >= 0 ? unlockedRegions[tier] : null,
    });
  };

  const regionTier = getRegionTier(taskStats.tasks.complete.total);
  const nextUnlockThreshold = REGION_UNLOCK_THRESHOLDS[regionTier + 1];
  return (
    <>
      <span className='text-lg text-accent font-semibold border-b border-accent w-full'>Regions</span>
      <div className='flex flex-row flex-wrap justify-around w-full items-center gap-2'>
        <RegionFakeSelect region={regionsById[0]} />
        <RegionFakeSelect region={regionsById[1]} />
        {unlockedRegions[2] > 0 ? (
          <RegionFakeSelect region={regionsById[unlockedRegions[2]]} onEdit={() => openUnlockModal(2)} />
        ) : (
          <RegionSelect canUnlock={regionTier >= 1} unlockTier={1} onClick={() => openUnlockModal(2)} />
        )}
        {unlockedRegions[3] > 0 ? (
          <RegionFakeSelect region={regionsById[unlockedRegions[3]]} onEdit={() => openUnlockModal(3)} />
        ) : (
          <RegionSelect canUnlock={regionTier >= 2} unlockTier={2} onClick={() => openUnlockModal(3)} />
        )}
        {unlockedRegions[4] > 0 ? (
          <RegionFakeSelect region={regionsById[unlockedRegions[4]]} onEdit={() => openUnlockModal(4)} />
        ) : (
          <RegionSelect canUnlock={regionTier >= 3} unlockTier={3} onClick={() => openUnlockModal(4)} />
        )}
      </div>
      {regionTier <= REGION_UNLOCK_THRESHOLDS.length && (
        <>
          <div className='w-11/12'>
            <ThemedProgressBar
              curValue={taskStats.tasks.complete.total}
              maxValue={REGION_UNLOCK_THRESHOLDS[REGION_UNLOCK_THRESHOLDS.length - 1]}
              steps={REGION_UNLOCK_THRESHOLDS}
            />
          </div>
          <div className='flex w-full flex-wrap justify-around text-center align-middle tracking-wide text-md text-primary gap-3'>
            <span>{`Regions unlocked: ${unlockedRegions.filter(id => id !== NONE_REGION_ID).length} / 5`}</span>
            <span>
              {unlockedRegions.filter(region => region >= 0).length === 5 ||
              regionTier >= REGION_UNLOCK_THRESHOLDS.length - 1
                ? 'All regions unlocked!'
                : `Next unlock at ${nextUnlockThreshold} tasks (${
                    nextUnlockThreshold - taskStats.tasks.complete.total
                  } remaining)`}
            </span>
          </div>
        </>
      )}
      <div className='flex flex-row flex-wrap w-11/12 gap-2'>
        <RegionMap unlockedRegions={unlockedRegions} />
      </div>
      <RegionUnlockModal
        isOpen={regionUnlockModalState.open}
        setIsOpen={() => setRegionUnlockModalState({ open: false, tier: -1, initialSelectedRegion: null })}
        tier={regionUnlockModalState.tier}
        initialSelectedRegion={regionUnlockModalState.initialSelectedRegion}
      />
    </>
  );
}

function RegionFakeSelect({ region, onEdit }) {
  return (
    <div key={region.id} className='text-center text-accent text-lg small-caps flex items-center gap-1'>
      <img width={16} src={region.icon} alt='' />
      {region.label}
      {!!onEdit && (
        <span className='icon-xs cursor-pointer' onClick={onEdit}>
          edit
        </span>
      )}
    </div>
  );
}

function RegionSelect({ canUnlock, unlockTier, onClick }) {
  return (
    <>
      <div data-tip data-for={`${unlockTier}`}>
        <button
          className={`text-center button-outline${
            canUnlock ? '' : '-disabled'
          } flex items-center gap-1 text-base small-caps p-1 pr-2`}
          type='button'
          onClick={onClick}
        >
          <span className='icon-base'>lock_open</span> Unlock...
        </button>
      </div>
      {!canUnlock && (
        <ReactTooltip id={`${unlockTier}`}>Unlocked at {REGION_UNLOCK_THRESHOLDS[unlockTier]} tasks</ReactTooltip>
      )}
    </>
  );
}
