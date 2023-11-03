import React from 'react';
import { useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { NONE_REGION_ID, regionsById, REGION_UNLOCK_THRESHOLDS, TRAILBLAZER_REGIONS } from '../data/regions';
import { updateRegion } from '../store/unlocks/unlocks';
import { getRegionTier } from '../util/getTier';
import Select from './common/Select';
import RegionMap from './RegionMap';
import { ThemedProgressBar } from './ThemeProvider';

const UNLOCKABLE_REGION_OPTIONS = [
  { label: 'Unlock...', value: NONE_REGION_ID },
  ...TRAILBLAZER_REGIONS.filter(({ isDefaultUnlock }) => !isDefaultUnlock).map(region => ({
    label: region.label,
    value: region.id,
    icon: region.icon,
  })),
];

export default function CharacterRegionsSection({ unlockedRegions, taskStats }) {
  const regionTier = getRegionTier(taskStats.tasks.complete.total);
  const nextUnlockThreshold = REGION_UNLOCK_THRESHOLDS[regionTier + 1];
  return (
    <>
      <span className='text-lg text-accent font-semibold border-b border-accent w-full'>Regions</span>
      <div className='flex flex-row flex-wrap justify-around w-full items-center gap-2'>
        <RegionFakeSelect region={regionsById[0]} />
        <RegionFakeSelect region={regionsById[1]} />
        <RegionSelect
          initialSelectedRegion={unlockedRegions[2]}
          canUnlock={regionTier >= 1}
          unlockTier={1}
          excludeRegionIds={[unlockedRegions[3], unlockedRegions[4]]}
        />
        <RegionSelect
          initialSelectedRegion={unlockedRegions[3]}
          canUnlock={regionTier >= 2}
          unlockTier={2}
          excludeRegionIds={[unlockedRegions[2], unlockedRegions[4]]}
        />
        <RegionSelect
          initialSelectedRegion={unlockedRegions[4]}
          canUnlock={regionTier >= 3}
          unlockTier={3}
          excludeRegionIds={[unlockedRegions[2], unlockedRegions[3]]}
        />
      </div>
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
          Next unlock at {nextUnlockThreshold} tasks ({nextUnlockThreshold - taskStats.tasks.complete.total} remaining)
        </span>
      </div>
      <div className='flex flex-row flex-wrap w-11/12 gap-2'>
        <RegionMap unlockedRegions={unlockedRegions} />
      </div>
    </>
  );
}

function RegionFakeSelect({ region }) {
  return (
    <button
      key={region.id}
      className='button-outline px-4 py-2 text-center flex items-center gap-1'
      type='button'
      disabled
    >
      <img src={region.icon} alt='' />
      {region.label}
    </button>
  );
}

function RegionSelect({ initialSelectedRegion, excludeRegionIds, canUnlock, unlockTier }) {
  const dispatch = useDispatch();
  const availableRegionOptions = UNLOCKABLE_REGION_OPTIONS.filter(
    ({ value }) => value === NONE_REGION_ID || !excludeRegionIds.includes(value)
  );
  return (
    <>
      <div data-tip data-for={`${unlockTier}`}>
        <Select
          options={availableRegionOptions}
          value={initialSelectedRegion}
          disabled={!canUnlock}
          key={`region-unlock-${unlockTier}`}
          onSelect={selectedOption => dispatch(updateRegion({ tier: unlockTier + 1, id: selectedOption.value }))}
        />
      </div>
      {!canUnlock && (
        <ReactTooltip id={`${unlockTier}`}>Unlocked at {REGION_UNLOCK_THRESHOLDS[unlockTier]} tasks</ReactTooltip>
      )}
    </>
  );
}
