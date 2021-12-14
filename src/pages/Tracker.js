import React from 'react';
import TabbedCard from '../components/common/TabbedCard';
import HiscoreLookup from '../components/HiscoreLookup';
import PageWrapper from '../components/PageWrapper';

export default function Tracker() {
    return (
        <PageWrapper>
            <TabbedCard>
                <TabbedCard.Tab id='chr' title='Character'>
                    <div className='flex md:flex-row flex-col justify-around w-full h-full items-stretch gap-1'>
                        <div className='basis-1/4 flex flex-col justify-around items-center'>
                            <HiscoreLookup />
                            <div className='grid grid-cols-3 gap-2'>
                                <span className='text-lg'>
                                    <img src='/img/attack.gif' alt='Attack' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/hitpoints.gif' alt='Hitpoints' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/mining.gif' alt='Mining' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/strength.gif' alt='Strength' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/agility.gif' alt='Agility' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/smithing.gif' alt='Smithing' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/defence.gif' alt='Defence' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/herblore.gif' alt='Herblore' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/fishing.gif' alt='Fishing' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/ranged.gif' alt='Ranged' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/thieving.gif' alt='Thieving' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/cooking.gif' alt='Cooking' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/prayer.gif' alt='Prayer' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/crafting.gif' alt='Crafting' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/firemaking.gif' alt='Firemaking' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/magic.gif' alt='Magic' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/fletching.gif' alt='Fletching' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/woodcutting.gif' alt='Woodcutting' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/runecraft.gif' alt='Runecraft' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/slayer.gif' alt='Slayer' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/farming.gif' alt='Farming' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/construction.gif' alt='Construction' className='inline mr-1' />
                                    99 / 99
                                </span>
                                <span className='text-lg'>
                                    <img src='/img/hunter.gif' alt='Hunter' className='inline mr-1' />
                                    99 / 99
                                </span>
                            </div>
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
