import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SkillsPanel from '../components/SkillsPanel';
import BossesPanel from '../components/BossesPanel';
import ManageCharactersModal from '../components/ManageCharactersModal';
import CharacterRegionsSection from '../components/CharacterRegionsSection';
import CharacterRelicsSection from '../components/CharacterRelicsSection';
import CharacterTotalsSection from '../components/CharacterTotalsSection';

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
          <CharacterTotalsSection taskStats={taskStats} />
        </div>
        {/* CENTER COLUMN */}
        <div className='lg:basis-1/2 basis-full flex flex-col items-center gap-3 order-1 lg:order-3 shrink'>
          <CharacterRegionsSection taskStats={taskStats} unlockedRegions={unlockState.regions} />
          <CharacterRelicsSection tier={tier} taskStats={taskStats} unlockedRelics={unlockState.relics} />
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
