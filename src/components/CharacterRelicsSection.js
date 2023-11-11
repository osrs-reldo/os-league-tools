import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { NONE_RELIC_ID, PASSIVE_RELICS, RELICS, RELIC_UNLOCK_THRESHOLDS } from '../data/relics';
import RelicUnlockModal from './RelicUnlockModal';
import { ThemedProgressBar } from './ThemeProvider';

export default function CharacterRelicsSection({ tier, taskStats, unlockedRelics }) {
  const [relicUnlockModalState, setRelicUnlockModalState] = useState({ open: false, tier: -1 });
  const openUnlockModal = unlockTier => {
    setRelicUnlockModalState({ open: true, tier: unlockTier });
  };
  const relicsUnlocked = unlockedRelics.filter(id => id !== NONE_RELIC_ID).length;
  const passiveRelicData = PASSIVE_RELICS[relicsUnlocked];
  return (
    <>
      <span className='text-lg text-accent font-semibold border-b border-accent w-full'>Relics</span>
      <div className='text-accent small-caps text-lg'>
        Exp: x{passiveRelicData.exp.multiplier} · Drop rates: x{passiveRelicData.drops.multiplier} · Minigame points: x
        {passiveRelicData.minigames.multiplier}
      </div>
      <div className='flex flex-row flex-wrap w-11/12 gap-2'>
        {unlockedRelics.map((relic, index) =>
          relic !== NONE_RELIC_ID ? (
            <UnlockedRelic tier={index} relicId={relic} key={index} onEdit={() => openUnlockModal(index)} />
          ) : (
            <LockedRelic tier={index} key={index} canUnlock={tier > index} onClick={() => openUnlockModal(index)} />
          )
        )}
      </div>
      {tier < RELIC_UNLOCK_THRESHOLDS.length && (
        <>
          <div className='w-11/12'>
            <ThemedProgressBar
              curValue={taskStats.points.complete.total}
              maxValue={RELIC_UNLOCK_THRESHOLDS[RELIC_UNLOCK_THRESHOLDS.length - 1]}
              steps={RELIC_UNLOCK_THRESHOLDS}
            />
          </div>
          <div className='flex w-full flex-wrap justify-around text-center align-middle tracking-wide text-md text-primary gap-3'>
            <span>{`Relics unlocked: ${relicsUnlocked} / 7`}</span>
            <span>{`Next unlock at ${RELIC_UNLOCK_THRESHOLDS[tier]} pts (${
              RELIC_UNLOCK_THRESHOLDS[tier] - taskStats.points.complete.total
            } remaining)`}</span>
          </div>
        </>
      )}
      <RelicUnlockModal
        isOpen={relicUnlockModalState.open}
        setIsOpen={() => setRelicUnlockModalState({ open: false, tier: -1 })}
        tier={relicUnlockModalState.tier}
      />
    </>
  );
}

function UnlockedRelic({ tier, relicId, onEdit }) {
  const relicData = RELICS[tier][relicId];
  return (
    <>
      <div className='m-1 grow flex flex-col text-center items-center w-12' data-tip data-for={`relic-${tier}`}>
        <img className='h-12 w-12' src={relicData.icon} alt='' />
        <span className='text-accent small-caps'>
          {relicData.label}{' '}
          {!!onEdit && (
            <span className='icon-xs cursor-pointer' onClick={onEdit}>
              edit
            </span>
          )}
        </span>
      </div>
      <ReactTooltip id={`relic-${tier}`}>
        {typeof relicData.description === 'string'
          ? relicData.description
          : relicData.description.map(line => <div key={line}>{line}</div>)}
      </ReactTooltip>
    </>
  );
}

function LockedRelic({ canUnlock, tier, onClick }) {
  return (
    <>
      <div className='m-1 grow flex flex-col text-center text-sm items-center w-12' data-tip data-for={`relic-${tier}`}>
        <button
          type='button'
          className={`button-outline${canUnlock ? '' : '-disabled'} h-12 flex flex-col px-1 pb-1 small-caps`}
          disabled={!canUnlock}
          onClick={onClick}
        >
          <span className='icon-base'>lock_open</span>
          Unlock...
        </button>
      </div>
      {!canUnlock && (
        <ReactTooltip id={`relic-${tier}`}>Unlocked at {RELIC_UNLOCK_THRESHOLDS[tier]} points</ReactTooltip>
      )}
    </>
  );
}
