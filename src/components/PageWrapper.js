import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Page from './common/Page';
import NavBar, { NavItem } from './common/NavBar';
import AuthButton from './AuthButton';
import FeedbackModal from './FeedbackModal';
import Dropdown from './common/Dropdown';
import Banner from './common/Banner';
import PluginModal from './PluginModal';

export default function PageWrapper({ children }) {
    const theme = useSelector(state => state.settings.theme);
    const limitContentWidth = useSelector(state => state.settings.limitContentWidth);
    const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [isPluginModalOpen, setPluginModalOpen] = useState(false);

    const navItems = [
        new NavItem('Stats', 'primary', 0, 0).withHref('/stats').withIconFont('query_stats'),
        new NavItem('Trackers', 'primary', 0, 1).withHref('/tracker').withIconFont('checklist_rtl'),
        new NavItem('Calculators', 'primary', 0, 2).withHref('/calculators').withIconFont('calculate'),
        new NavItem('Login', 'secondary', 1, 0).withCustomRenderFn(
            () => <AuthButton key='login' />,
            () => <AuthButton key='login' useDropdownVariant />
        ),
        new NavItem('RuneLite Plugin', 'icon', 0, 3).withCustomRenderFn(
            () => (
                <button
                    key='plugin'
                    className='text-primary md:inline hidden navbar-link-alt bg-hover p-2'
                    type='button'
                    onClick={() => setPluginModalOpen(true)}
                >
                    <img className='h-4 img-primary' src='/img/runelite-icon.svg' alt='Runelite Plugin' />
                </button>
            ),
            () => (
                <button
                    key='plugin'
                    className='text-primary bg-hover py-1 text-left'
                    onClick={() => setPluginModalOpen(true)}
                    type='button'
                >
                    <img className='h-4 img-primary inline align-middle mr-1' src='/img/runelite-icon.svg' alt='' />
                    <p className='h-4 inline pl-1 font-sans-alt'>RuneLite Plugin</p>
                </button>
            )
        ),
        new NavItem('Settings', 'overflow', 1, 1).withHref('/settings').withIconFont('settings'),
        new NavItem('Discord', 'overflow', 2, 0)
            .withHref('https://discord.gg/GQ5kVyU', '_blank')
            .withIconFont('discord'),
        new NavItem('Feedback', 'overflow', 2, 1).withCustomRenderFn(
            () => (
                <Dropdown.Button key='feedback' icon='pest_control' onClick={() => setFeedbackModalOpen(true)}>
                    Feedback
                </Dropdown.Button>
            ),
            () => (
                <button
                    key='feedback'
                    className='text-primary bg-hover py-1 text-left'
                    onClick={() => setFeedbackModalOpen(true)}
                    type='button'
                >
                    <span className='text-primary-alt icon-lg inline align-middle mr-1'>pest_control</span>
                    <p className='h-4 inline pl-1 font-sans-alt'>Feedback</p>
                </button>
            )
        ),
        new NavItem('Github', 'overflow', 2, 2)
            .withHref('https://github.com/chaiinchomp/os-league-tools', '_blank')
            .withIconFont('code'),
        new NavItem('Tip Jar', 'overflow', 2, 3)
            .withHref('https://ko-fi.com/chaiinchomp', '_blank')
            .withIconFont('savings'),
        new NavItem('About', 'overflow', 2, 4).withHref('/about').withIconFont('help_outline'),
    ];

    return (
        <Page limitContentWidth={limitContentWidth}>
            <Page.Banner>
                <Banner className='mx-auto mb-4 max-w-[60rem]'>
                    <span className='material-icons-sharp text-5xl text-accent float-left mr-2'>warning_amber</span>
                    <div className='flex flex-col'>
                        <span className='text-xl text-bold small-caps text-accent'>Under construction!</span>
                        <p className='text-primary text-sm'>
                            Stay with us, we're working on it! We're doing our best to get you all the task and league
                            info we can - but sometimes IRL gets in the way. All the latest updates and announcements
                            can be found on our{' '}
                            <a
                                href='https://discord.gg/GQ5kVyU'
                                target='_blank'
                                rel='noreferrer'
                                className='hover:underline text-accent font-semibold'
                            >
                                discord server
                            </a>
                            .
                        </p>
                    </div>
                </Banner>
            </Page.Banner>
            <Page.Nav>
                <NavBar navItems={navItems} brandName='OS League Tools' brandLogo={`/img/icon-${theme}.png`} />
            </Page.Nav>
            <Page.Body>
                {children}
                <FeedbackModal isOpen={isFeedbackModalOpen} setIsOpen={val => setFeedbackModalOpen(val)} />
                <PluginModal isOpen={isPluginModalOpen} setIsOpen={val => setPluginModalOpen(val)} />
            </Page.Body>
        </Page>
    );
}
