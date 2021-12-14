import React from 'react';
import TabbedCard from '../components/common/TabbedCard';
import HiscoreLookup from '../components/HiscoreLookup';
import PageWrapper from '../components/PageWrapper';
import SkillsPanel from '../components/SkillsPanel';

export default function Tracker() {
    return (
        <PageWrapper>
            <TabbedCard>
                <TabbedCard.Tab id='chr' title='Character'>
                    <div className='flex md:flex-row flex-col justify-around w-full h-full items-stretch gap-1'>
                        <div className='basis-1/4 flex flex-col justify-around items-center gap-3 md:gap-0'>
                            <HiscoreLookup />
                            <SkillsPanel />
                        </div>
                        <div className='md:w-px w-full md:h-full h-px bg-subdued' />
                        <div className='flex flex-col gap-1 basis-3/4'>
                            <div>relic slot progress bar and passive unlocks</div>
                            <div className='w-full h-px bg-subdued' />
                            <div>task and point totals</div>
                            <div className='w-full h-px bg-subdued' />
                            <div>bosses panel</div>
                        </div>
                    </div>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='tsk' title='Tasks'>
                    <div>Tasks tracker page</div>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='ach' title='Achievements'>
                    <div>Achievements tracker page</div>
                </TabbedCard.Tab>
                <TabbedCard.Tab id='qst' title='Quests'>
                    <div>Quests tracker page</div>
                </TabbedCard.Tab>
            </TabbedCard>
        </PageWrapper>
    );
}
