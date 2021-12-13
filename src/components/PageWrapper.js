import React from 'react';
import Page from './common/Page';
import NavBar, { NavItem } from './common/NavBar';

const navItems = [
    new NavItem('Stats', 'primary', 0, 0).withHref('/legacy/tracker').withIconText('query_stats'),
    new NavItem('Trackers', 'primary', 0, 1).withHref('/tracker').withIconText('checklist_rtl'),
    new NavItem('Calculators', 'primary', 0, 2).withHref('/').withIconText('calculate'),
    new NavItem('Login', 'secondary', 1, 0).withHref('/').withIconText('login'),
    new NavItem('RuneLite Plugin', 'icon', 1, 2).withHref('/').withIconSrc('/img/runelite-icon.svg'),
    new NavItem('Settings', 'overflow', 1, 1).withHref('/').withIconText('settings'),
    new NavItem('Discord', 'overflow', 2, 0).withHref('/').withIconText('discord'),
    new NavItem('Github', 'overflow', 2, 1).withHref('/').withIconText('code'),
    new NavItem('Tip Jar', 'overflow', 2, 2).withHref('/').withIconText('savings'),
    new NavItem('About', 'overflow', 2, 3).withHref('/').withIconText('help_outline'),
];

export default function PageWrapper({ children }) {
    return (
        <Page>
            <Page.Nav>
                <NavBar navItems={navItems} brandName='OS League Tools' brandLogo='/img/relic-check.png' />
            </Page.Nav>
            <Page.Body>{children}</Page.Body>
        </Page>
    );
}
