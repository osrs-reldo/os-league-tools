import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Page from './common/Page';
import NavBar, { NavItem } from './common/NavBar';
import AuthButton from './AuthButton';
import FeedbackModal from './FeedbackModal';
import Dropdown from './common/Dropdown';

export default function PageWrapper({ children }) {
    const theme = useSelector(state => state.settings.theme);
    const limitContentWidth = useSelector(state => state.settings.limitContentWidth);
    const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);

    const navItems = [
        new NavItem('Stats', 'primary', 0, 0).withHref('/').withIconFont('query_stats'),
        new NavItem('Trackers', 'primary', 0, 1).withHref('/tracker').withIconFont('checklist_rtl'),
        new NavItem('Calculators', 'primary', 0, 2).withHref('/').withIconFont('calculate'),
        new NavItem('Login', 'secondary', 1, 0).withCustomRenderFn(
            () => <AuthButton key='login' />,
            () => <AuthButton key='login' useDropdownVariant />
        ),
        new NavItem('RuneLite Plugin', 'icon', 1, 2).withHref('/').withIconSrc('/img/runelite-icon.svg'),
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
            <Page.Nav>
                <NavBar navItems={navItems} brandName='OS League Tools' brandLogo={`/img/icon-${theme}.png`} />
            </Page.Nav>
            <Page.Body>
                {children}
                <FeedbackModal isOpen={isFeedbackModalOpen} setIsOpen={val => setFeedbackModalOpen(val)} />
            </Page.Body>
        </Page>
    );
}
