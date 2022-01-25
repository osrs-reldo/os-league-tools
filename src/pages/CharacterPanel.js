import React from 'react';
import { useSelector } from 'react-redux';
import HiscoreLookup from '../components/HiscoreLookup';
import SkillsPanel from '../components/SkillsPanel';
import BossesPanel from '../components/BossesPanel';
import Separator from '../components/common/Separator';
import { ThemedProgressBar } from '../components/ThemeProvider';
import calculateTaskStats from '../util/calculateTaskStats';
import { DIFFICULTY, PASSIVE_RELICS } from '../data/constants';
import getTier from '../util/getTier';
import images from '../assets/images';

export default function CharacterPanel() {
    const tasksState = useSelector(state => state.tasks.tasks);
    const taskStats = calculateTaskStats(tasksState);
    const tier = getTier(taskStats.points.complete.total);

    return (
        <div className='flex md:flex-row flex-col lg:flex-nowrap flex-wrap justify-around w-full items-stretch md:gap-1 gap-3'>
            <div className='lg:basis-1/4 basis-2/5 flex flex-col items-center gap-3 order-3 lg:order-1'>
                <HiscoreLookup />
                <SkillsPanel />
            </div>
            <Separator variant='vertical' breakpoint='lg' className='order-2' />
            <div className='lg:basis-1/2 basis-full flex flex-col items-center gap-3 order-1 lg:order-3 shrink'>
                <div className='flex justify-around w-full'>
                    <div className='flex flex-col items-center text-sm'>
                        <span className='text-lg text-accent font-semibold'>Tasks</span>
                        <span className='text-base text-accent'>{`${taskStats.tasks.complete.total} / ${
                            taskStats.tasks.available.total
                        } (${((taskStats.tasks.complete.total / taskStats.tasks.available.total) * 100).toFixed(
                            1
                        )}%)`}</span>
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
                        } (${((taskStats.points.complete.total / taskStats.points.available.total) * 100).toFixed(
                            1
                        )}%)`}</span>
                        {Object.keys(DIFFICULTY).map(difficultyKey => {
                            const { label: difficulty } = DIFFICULTY[difficultyKey];
                            return (
                                <span
                                    key={`${difficulty}-points`}
                                >{`${difficulty}: ${taskStats.points.complete[difficulty]} / ${taskStats.points.available[difficulty]}`}</span>
                            );
                        })}
                    </div>
                    <div className='flex flex-col items-center text-sm'>
                        <span className='text-lg text-accent font-semibold'>Renown</span>
                        <span className='text-base text-accent'>{`${taskStats.renown.complete.total} / ${
                            taskStats.renown.available.total
                        } (${((taskStats.renown.complete.total / taskStats.renown.available.total) * 100).toFixed(
                            1
                        )}%)`}</span>
                        {Object.keys(DIFFICULTY).map(difficultyKey => {
                            const { label: difficulty } = DIFFICULTY[difficultyKey];
                            return (
                                <span
                                    key={`${difficulty}-renown`}
                                >{`${difficulty}: ${taskStats.renown.complete[difficulty]} / ${taskStats.renown.available[difficulty]}`}</span>
                            );
                        })}
                    </div>
                </div>
                <Separator />
                <div className='flex w-full flex-wrap justify-around text-center align-middle tracking-wide text-md text-primary gap-3'>
                    <span>{`Relic slots unlocked: ${tier} / 7`}</span>
                    {/* <span>Relic fragments found: 18 / 100</span> */}
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
                                    <span
                                        className={`ml-1 align-middle ${
                                            tierUnlocked ? 'heading-accent-md' : 'heading-primary-md'
                                        }`}
                                    >
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
