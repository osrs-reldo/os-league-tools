import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SkillsPanel from '../components/SkillsPanel';
import BossesPanel from '../components/BossesPanel';
import { ThemedProgressBar } from '../components/ThemeProvider';
import { DIFFICULTY, PASSIVE_RELICS } from '../data/constants';
import images from '../assets/images';
import ManageCharactersModal from '../components/ManageCharactersModal';
import CharacterRegionsSection from '../components/CharacterRegionsSection';

export default function CharacterPanel() {
  const [isCharacterModalOpen, setCharacterModalOpen] = useState(false);
  const characterState = useSelector(state => state.character);
  const username = characterState.characters[characterState.activeCharacter];
  const { taskStats, tier } = useSelector(state => state.tasks);
  const unlockState = useSelector(state => state.unlocks);

  if (!username) {
    return (
      <div>
        <ManageCharactersModal
          isOpen={isCharacterModalOpen}
          setIsOpen={val => setCharacterModalOpen(val)}
          initialAddModalOpen
        />
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
    <div className='flex flex-col w-full items-stretch'>
      <p className='text-center text-accent text-4xl font-mono uppercase tracking-widest'>{username}</p>
      <div className='flex md:flex-row flex-col lg:flex-nowrap flex-wrap justify-around w-full items-stretch md:gap-1 gap-3'>
        {/* LEFT COLUMN */}
        <div className='lg:basis-1/4 basis-2/5 flex flex-col h-full items-center gap-3 order-3 lg:order-1'>
          <span className='text-lg text-accent font-semibold border-b border-accent w-full'>Totals</span>
          <div className='flex flex-col gap-4 justify-around w-full'>
            <TrophySummary />
            <TaskPointsSummaryByDifficulty
              headerText='Tasks'
              statsComplete={taskStats.tasks.complete}
              statsAvailable={taskStats.tasks.available}
            />
            <TaskPointsSummaryByDifficulty
              headerText='Points'
              statsComplete={taskStats.points.complete}
              statsAvailable={taskStats.points.available}
            />
          </div>
        </div>
        {/* CENTER COLUMN */}
        <div className='lg:basis-1/2 basis-full flex flex-col items-center gap-3 order-1 lg:order-3 shrink'>
          <CharacterRegionsSection taskStats={taskStats} unlockedRegions={unlockState.regions} />
          <RelicsSection tier={tier} taskStats={taskStats} />
        </div>
        {/* RIGHT COLUMN */}
        <div className='lg:basis-1/4 basis-2/5 flex flex-col items-center order-5 gap-3'>
          <span className='text-lg text-accent font-semibold border-b border-accent w-full'>Stats</span>
          <SkillsPanel />
          <BossesPanel />
        </div>
      </div>
    </div>
  );
}

function TaskPointsSummaryByDifficulty({ headerText, statsComplete, statsAvailable }) {
  return (
    <div className='flex flex-col items-center text-sm'>
      <span className='text-lg text-accent font-semibold'>{headerText}</span>
      <span className='text-base text-accent'>{`${statsComplete.total} / ${statsAvailable.total} (${(
        (statsComplete.total / statsAvailable.total) *
        100
      ).toFixed(1)}%)`}</span>
      {Object.keys(DIFFICULTY).map(difficultyKey => {
        const { label: difficulty } = DIFFICULTY[difficultyKey];
        return (
          <span
            key={`${difficulty}-headerText`}
          >{`${difficulty}: ${statsComplete[difficulty]} / ${statsAvailable[difficulty]}`}</span>
        );
      })}
    </div>
  );
}

// TODO hardcoded placeholder
function TrophySummary() {
  return (
    <div className='flex flex-col items-center w-full gap-1'>
      <span className='text-lg text-accent font-semibold'>Rune trophy</span>
      <span className='text-sm italic'>3250 points until dragon trophy</span>
      <img src={images['trophy-rune.png']} alt='' style={{ maxHeight: '200px' }} />
    </div>
  );
}

function RelicsSection({ tier, taskStats }) {
  return (
    <>
      <span className='text-lg text-accent font-semibold border-b border-accent w-full'>Relics</span>
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
      <div className='grid grid-cols-7 w-11/12 gap-2'>
        {Object.keys(PASSIVE_RELICS.tiers).map(tierKey => {
          const tierUnlocked = tier >= tierKey;
          return (
            <div className='m-1 grow flex flex-col text-center text-sm items-center' key={tierKey}>
              <img
                className='h-12 w-12 bg-hover cursor-pointer'
                src={images[tierUnlocked ? 'relic-check.png' : 'relic-outline.png']}
                alt=''
              />
            </div>
          );
        })}
      </div>
      <span className='text-sm italic'>Click a relic to view more</span>
    </>
  );
}
