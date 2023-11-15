import React from 'react';
import { DIFFICULTY } from '../data/constants';
import { TROPHIES, TROPHY_THRESHOLDS } from '../data/trophies';
import { getTrophyTier } from '../util/getTier';

export default function CharacterTotalsSection({ taskStats }) {
  return (
    <>
      <span className='text-lg text-accent font-semibold border-b border-accent w-full'>Totals</span>
      <div className='flex flex-col gap-4 justify-around w-full'>
        <TrophyCase currentPoints={taskStats.points.complete.total} />
        <TaskPointsSummary
          headerText='Tasks'
          statsComplete={taskStats.tasks.complete}
          statsAvailable={taskStats.tasks.available}
        />
        <TaskPointsSummary
          headerText='Points'
          statsComplete={taskStats.points.complete}
          statsAvailable={taskStats.points.available}
        />
      </div>
    </>
  );
}

function TrophyCase({ currentPoints }) {
  const tier = getTrophyTier(currentPoints);
  const trophyData = TROPHIES[tier];
  const nextTrophyData = TROPHIES[tier + 1];
  return (
    <div className='flex flex-col items-center w-full gap-1'>
      <span className='text-lg text-accent font-semibold'>{trophyData.label} trophy</span>
      {!!nextTrophyData && (
        <span className='text-sm italic'>
          {TROPHY_THRESHOLDS[tier + 1] - currentPoints} points until {nextTrophyData.label} trophy
        </span>
      )}
      {!!trophyData.image && <img src={trophyData.image} alt={trophyData.label} style={{ maxHeight: '200px' }} />}
    </div>
  );
}

function TaskPointsSummary({ headerText, statsComplete, statsAvailable }) {
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
