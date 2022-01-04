import React from 'react';
import { useSelector } from 'react-redux';
import Page from './common/Page';
import NavBar, { NavItem } from './common/NavBar';

const navItems = [
    new NavItem('Stats', 'primary', 0, 0).withHref('/').withIconFont('query_stats'),
    new NavItem('Trackers', 'primary', 0, 1).withHref('/tracker').withIconFont('checklist_rtl'),
    new NavItem('Calculators', 'primary', 0, 2).withHref('/').withIconFont('calculate'),
    new NavItem('Login', 'secondary', 1, 0).withHref('/').withIconFont('login'),
    new NavItem('RuneLite Plugin', 'icon', 1, 2).withHref('/').withIconSrc('/img/runelite-icon.svg'),
    new NavItem('Settings', 'overflow', 1, 1).withHref('/settings').withIconFont('settings'),
    new NavItem('Discord', 'overflow', 2, 0).withHref('https://discord.gg/GQ5kVyU', '_blank').withIconFont('discord'),
    new NavItem('Github', 'overflow', 2, 1)
        .withHref('https://github.com/chaiinchomp/os-league-tools', '_blank')
        .withIconFont('code'),
    new NavItem('Tip Jar', 'overflow', 2, 2)
        .withHref('https://ko-fi.com/chaiinchomp', '_blank')
        .withIconFont('savings'),
    new NavItem('About', 'overflow', 2, 3).withHref('/about').withIconFont('help_outline'),
];

export default function PageWrapper({ children }) {
    const theme = useSelector(state => state.settings.theme);
    const limitContentWidth = useSelector(state => state.settings.limitContentWidth);
    return (
        <Page limitContentWidth={limitContentWidth}>
            <Page.Nav>
                <NavBar navItems={navItems} brandName='OS League Tools' brandLogo={`/img/icon-${theme}.png`} />
            </Page.Nav>
            <Page.Body>{children}</Page.Body>
        </Page>
    );
}
