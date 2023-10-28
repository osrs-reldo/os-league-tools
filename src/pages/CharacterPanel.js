import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SkillsPanel from '../components/SkillsPanel';
import BossesPanel from '../components/BossesPanel';
import Separator from '../components/common/Separator';
import { ThemedProgressBar } from '../components/ThemeProvider';
import { DIFFICULTY, PASSIVE_RELICS } from '../data/constants';
import images from '../assets/images';
import ManageCharactersModal from '../components/ManageCharactersModal';

export default function CharacterPanel() {
  const [isCharacterModalOpen, setCharacterModalOpen] = useState(false);
  const characterState = useSelector(state => state.character);
  const username = characterState.characters[characterState.activeCharacter];
  const { taskStats, tier } = useSelector(state => state.tasks);

  if (!username) {
    return (
      <div>
        <ManageCharactersModal isOpen={isCharacterModalOpen} setIsOpen={val => setCharacterModalOpen(val)} />
        <p className='text-accent text-center small-caps text-2xl'>No character found</p>
        <p className='font-semibold text-center'>
          To use the character tracker,{' '}
          <button className='text-accent hover:underline' type='button' onClick={() => setCharacterModalOpen(true)}>
            set your username
          </button>
          !
        </p>
      </div>
    );
  }

  return (
    <div className='flex md:flex-row flex-col lg:flex-nowrap flex-wrap justify-around w-full items-stretch md:gap-1 gap-3'>
      <div className='lg:basis-1/4 basis-2/5 flex flex-col h-full items-center gap-3 order-3 lg:order-1'>
        <p className='text-accent text-lg font-mono uppercase tracking-widest'>{username}</p>
        <SkillsPanel />
      </div>
      <Separator variant='vertical' breakpoint='lg' className='order-2' />
      <div className='lg:basis-1/2 basis-full flex flex-col items-center gap-3 order-1 lg:order-3 shrink'>
        <div className='flex justify-around w-full'>
          <div className='flex flex-col items-center text-sm'>
            <span className='text-lg text-accent font-semibold'>Tasks</span>
            <span className='text-base text-accent'>{`${taskStats.tasks.complete.total} / ${
              taskStats.tasks.available.total
            } (${((taskStats.tasks.complete.total / taskStats.tasks.available.total) * 100).toFixed(1)}%)`}</span>
            {Object.keys(DIFFICULTY).map(difficultyKey => {
              const { label: difficulty } = DIFFICULTY[difficultyKey];
              return (
                <span
                  key={`${difficulty}-tasks`}
                >{`${difficulty}: ${taskStats.tasks.complete[difficulty]} / ${taskStats.tasks.available[difficulty]}`}</span>
              );
            })}
          </div>
          <div className='flex flex-col items-center text-sm'>
            <span className='text-lg text-accent font-semibold'>Points</span>
            <span className='text-base text-accent'>{`${taskStats.points.complete.total} / ${
              taskStats.points.available.total
            } (${((taskStats.points.complete.total / taskStats.points.available.total) * 100).toFixed(1)}%)`}</span>
            {Object.keys(DIFFICULTY).map(difficultyKey => {
              const { label: difficulty } = DIFFICULTY[difficultyKey];
              return (
                <span
                  key={`${difficulty}-points`}
                >{`${difficulty}: ${taskStats.points.complete[difficulty]} / ${taskStats.points.available[difficulty]}`}</span>
              );
            })}
          </div>
        </div>
        <Separator />
        <div className='flex w-full flex-wrap justify-around text-center align-middle tracking-wide text-md text-primary gap-3'>
          <span>{`Relics unlocked: ${tier} / 7`}</span>
          {tier < PASSIVE_RELICS.unlockThresholds.length && (
            <span>{`Next unlock at ${PASSIVE_RELICS.tiers[tier + 1].points} pts (${
              PASSIVE_RELICS.tiers[tier + 1].points - taskStats.points.complete.total
            } remaining)`}</span>
          )}
        </div>
        <div className='w-11/12'>
          <ThemedProgressBar
            curValue={taskStats.points.complete.total}
            maxValue={PASSIVE_RELICS.unlockThresholds[PASSIVE_RELICS.unlockThresholds.length - 1]}
            steps={PASSIVE_RELICS.unlockThresholds}
          />
        </div>
        <div className='flex flex-row flex-wrap w-11/12 gap-2'>
          {Object.keys(PASSIVE_RELICS.tiers).map(tierKey => {
            const tierUnlocked = tier >= tierKey;
            const passiveBonus = PASSIVE_RELICS.tiers[tierKey];
            return (
              <div className='m-1 grow flex flex-col text-center text-sm' key={tierKey}>
                <div>
                  <img
                    className='h-6 inline'
                    src={images[tierUnlocked ? 'relic-check.png' : 'relic-outline.png']}
                    alt=''
                  />
                  <span className={`ml-1 align-middle ${tierUnlocked ? 'heading-accent-md' : 'heading-primary-md'}`}>
                    {`Tier ${tierKey}`}
                  </span>
                </div>
                {passiveBonus.expMultiplierIncrease && (
                  <span className={`${tierUnlocked ? 'text-accent' : 'text-primary'}`}>
                    Exp x{passiveBonus.expMultiplier}
                  </span>
                )}
                {passiveBonus.dropMultiplierIncrease && (
                  <span className={`${tierUnlocked ? 'text-accent' : 'text-primary'}`}>
                    Drop rates x{passiveBonus.dropMultiplier}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Separator variant='vertical' breakpoint='md' className='order-4' />
      <div className='lg:basis-1/4 basis-2/5 flex flex-col items-center order-5'>
        <div className='mt-3'>
          <BossesPanel />
        </div>
      </div>
    </div>
  );
}
