/* eslint-disable react/jsx-props-no-spreading */
/* I have no idea why this isn't being picked up from my eslintrc */

import React, { useState, useRef } from 'react';
import Dropdown, { WIDTH_PRESETS } from './Dropdown';
import useClickListener from './useClickListener';

const PRIMARY_ITEMS = [
    {
        text: 'Stats',
        href: '/',
        icon: 'query_stats',
    },
    {
        text: 'Trackers',
        href: '/',
        icon: 'fact_check',
    },
    {
        text: 'Calculators',
        href: '/',
        icon: 'calculate',
    },
];

const SECONDARY_ITEMS = [
    {
        text: 'Login',
        href: '/',
        icon: 'login',
    },
    {
        text: 'Settings',
        href: '/',
        icon: 'settings',
    },
    {
        text: 'RuneLite Plugin',
        href: '/',
        icon: 'electrical_services',
    },
];

const TERTIARY_ITEMS = [
    {
        text: 'Discord',
        href: '/',
        icon: 'discord',
    },
    {
        text: 'Github',
        href: '/',
        icon: 'code',
    },
    {
        text: 'Tip Jar',
        href: '/',
        icon: 'savings',
    },
    {
        text: 'About',
        href: '/',
        icon: 'help_outline',
    },
];

export default function NavBar() {
    const [showMenuCollapsed, setShowMenuCollapsed] = useState(false);
    const [showMenuExpanded, setShowMenuExpanded] = useState(false);
    const menuRef = useRef(null);
    useClickListener(menuRef, () => setShowMenuExpanded(false), true);

    const ExpandedNavigation = () => (
        <>
            <div className='pl-4 sm:flex hidden'>
                {PRIMARY_ITEMS.map(navItem => (
                    <a className='text-black navbar-link hover:underline mr-4' href={navItem.href}>
                        {navItem.text}
                    </a>
                ))}
            </div>
            <div className='sm:flex hidden flex-grow' />
            <div className='sm:flex hidden justify-between items-center'>
                <a className='md:inline hidden navbar-link-alt hover:bg-gray-200 px-2 py-1' href='/'>
                    Login
                </a>
                <a className='md:hidden inline navbar-icon-link' href='/'>
                    <span className='text-gray-900 icon-lg leading-tight align-middle'>login</span>
                </a>
                <a className='navbar-icon-link' href='/'>
                    <img className='h-4' src='/img/runelite-icon.svg' alt='' />
                </a>
                <div className='relative cursor-pointer' onClick={() => setShowMenuExpanded(!showMenuExpanded)}>
                    <div className='hover:bg-gray-200 px-2 py-1'>
                        <span className='text-gray-900 icon-xl leading-tight md:align-top align-middle'>menu</span>
                    </div>
                    <div className='right-1 mt-1 absolute'>
                        <Dropdown show={showMenuExpanded} innerRef={menuRef} widthClass={WIDTH_PRESETS.SM}>
                            {TERTIARY_ITEMS.map(navItem => (
                                <Dropdown.Link href={navItem.href} icon={navItem.icon}>
                                    {navItem.text}
                                </Dropdown.Link>
                            ))}
                        </Dropdown>
                    </div>
                </div>
            </div>
        </>
    );

    const CollapsedNavigationButton = () => (
        <>
            <div className='sm:hidden flex flex-grow' />
            <div
                className='sm:hidden inline relative cursor-pointer'
                onClick={() => setShowMenuCollapsed(!showMenuCollapsed)}
            >
                <div className='hover:bg-gray-200 px-2 py-1'>
                    <span className='text-gray-900 icon-4xl leading-tight'>
                        {showMenuCollapsed ? 'expand_less' : 'expand_more'}
                    </span>
                </div>
            </div>
        </>
    );
    const CollapsedNavigationContent = () => (
        <div className={`sm:hidden ${showMenuCollapsed ? 'flex flex-col gap-1' : 'hidden'}`}>
            {[PRIMARY_ITEMS, SECONDARY_ITEMS, TERTIARY_ITEMS].map(items => {
                return (
                    <>
                        <div className='h-px w-full bg-gray-300' />
                        {items.map(navItem => (
                            <a className='text-black hover:bg-gray-200 py-1' href={navItem.href}>
                                {navItem.icon && (
                                    <span className='text-gray-900 icon-lg inline align-middle mr-1'>
                                        {navItem.icon}
                                    </span>
                                )}
                                <p className='h-4 inline pl-1 font-sans-alt'>{navItem.text}</p>
                            </a>
                        ))}
                    </>
                );
            })}
        </div>
    );

    return (
        <nav className='bg-white navbar h-auto'>
            <div className='navbar-content'>
                <div className='flex flex-row flex-nowrap'>
                    <img src='/img/relic-check.png' className='navbar-brand-logo mr-3' alt='' />
                    <a className='text-black navbar-brand whitespace-nowrap' href='/'>
                        OS League Tools
                    </a>
                </div>
                <ExpandedNavigation />
                <CollapsedNavigationButton />
            </div>
            <CollapsedNavigationContent />
        </nav>
    );
}
