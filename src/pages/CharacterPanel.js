import React from 'react';
import HiscoreLookup from '../components/HiscoreLookup';
import SkillsPanel from '../components/SkillsPanel';
import BossesPanel from '../components/BossesPanel';
import Separator from '../components/common/Separator';
import { ThemedProgressBar } from '../components/ThemeProvider';

export default function CharacterPanel() {
    return (
        <div className='flex md:flex-row flex-col lg:flex-nowrap flex-wrap justify-around w-full items-stretch md:gap-1 gap-3'>
            <div className='lg:basis-1/4 basis-2/5 flex flex-col justify-evenly items-center gap-3 order-3 lg:order-1'>
                <HiscoreLookup />
                <SkillsPanel />
            </div>
            <Separator variant='vertical' breakpoint='lg' className='order-2' />
            <div className='lg:basis-1/2 basis-full flex flex-col items-center gap-3 order-1 lg:order-3 shrink'>
                <div className='flex justify-around w-full'>
                    <div className='flex flex-col items-center text-sm'>
                        <span className='text-lg text-accent font-semibold'>Tasks</span>
                        <span className='text-base text-accent'>83 / 730 (11.4%)</span>
                        <span>Easy: 25 / 200</span>
                        <span>Medium: 55 / 200</span>
                        <span>Hard: 2 / 150</span>
                        <span>Elite: 1 / 160</span>
                        <span>Master: 0 / 20</span>
                    </div>
                    <div className='flex flex-col items-center text-sm'>
                        <span className='text-lg text-accent font-semibold'>Points</span>
                        <span className='text-base text-accent'>1250 / 77000 (1.6%)</span>
                        <span>Easy: 250 / 2000</span>
                        <span>Medium: 550 / 10000</span>
                        <span>Hard: 200 / 15000</span>
                        <span>Elite: 250 / 40000</span>
                        <span>Master: 0 / 10000</span>
                    </div>
                </div>
                <Separator />
                <div className='flex w-full flex-wrap justify-around text-center align-middle tracking-wide text-md text-primary gap-3'>
                    <span>Relic slots unlocked: 3 / 10</span>
                    <span>Relic fragments found: 18 / 100</span>
                    <span>Next unlock at 2000 pts (750 remaining)</span>
                </div>
                <div className='w-11/12'>
                    <ThemedProgressBar
                        curValue={1250}
                        maxValue={30000}
                        steps={[500, 1000, 2000, 4000, 7500, 15000, 30000]}
                    />
                </div>
                <div className='flex flex-row flex-wrap items-center w-11/12 gap-2'>
                    <div className='m-1 grow'>
                        <img className='h-6 inline' src='/img/relic-check.png' alt='' />
                        <span className='text-center ml-1 align-middle heading-accent-md'>Passive relic #1</span>
                    </div>
                    <div className='m-1 grow'>
                        <img className='h-6 inline' src='/img/relic-check.png' alt='' />
                        <span className='text-center ml-1 align-middle heading-accent-md'>Passive relic #2</span>
                    </div>
                    <div className='m-1 grow'>
                        <img className='h-6 inline' src='/img/relic-outline.png' alt='' />
                        <span className='text-center ml-1 align-middle heading-primary-md'>Passive relic #3</span>
                    </div>
                    <div className='m-1 grow'>
                        <img className='h-6 inline' src='/img/relic-outline.png' alt='' />
                        <span className='text-center ml-1 align-middle heading-primary-md'>Passive relic #4</span>
                    </div>
                    <div className='m-1 grow'>
                        <img className='h-6 inline' src='/img/relic-outline.png' alt='' />
                        <span className='text-center ml-1 align-middle heading-primary-md'>Passive relic #5</span>
                    </div>
                    <div className='m-1 grow'>
                        <img className='h-6 inline' src='/img/relic-outline.png' alt='' />
                        <span className='text-center ml-1 align-middle heading-primary-md'>Passive relic #6</span>
                    </div>
                    <div className='m-1 grow'>
                        <img className='h-6 inline' src='/img/relic-outline.png' alt='' />
                        <span className='text-center ml-1 align-middle heading-primary-md'>Passive relic #7</span>
                    </div>
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
