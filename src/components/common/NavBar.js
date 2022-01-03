/* eslint-disable react/no-array-index-key */
/* linter is grumpy and won't pick this up from eslintrc right now */

import React, { useState, useRef } from 'react';
import _ from 'lodash';
import Dropdown from './Dropdown';
import useClickListener from '../../hooks/useClickListener';
import { getLayoutSlots } from './util/layout';

export class NavItem {
    constructor(label, variant = 'primary', collapseGroup = -1, collapseOrder = -1) {
        this.id = label;
        this.label = label;
        this.variant = variant; // primary, secondary, icon, overflow
        this.props = {};
        this.props.slot = variant;
        this.collapseGroup = collapseGroup;
        this.collapseOrder = collapseOrder;
        this.href = null;
        this.onClick = null;
        this.iconFont = null;
        this.iconSrc = null;
    }

    withHref(href) {
        this.href = href;
        return this;
    }

    withOnClick(onClick) {
        this.onClick = onClick;
        return this;
    }

    withIconFont(iconFont) {
        this.iconFont = iconFont;
        return this;
    }

    withIconSrc(iconSrc) {
        this.iconSrc = iconSrc;
        return this;
    }
}

export default function NavBar({ navItems, brandName, brandLogo }) {
    const [showMenuCollapsed, setShowMenuCollapsed] = useState(false);
    const [showMenuExpanded, setShowMenuExpanded] = useState(false);
    const menuRef = useRef(null);
    useClickListener(menuRef, () => setShowMenuExpanded(false), true);

    const {
        primary: primaryNavItems,
        secondary: secondaryNavItems,
        icon: iconNavItems,
        overflow: overflowNavItems,
    } = getLayoutSlots(navItems);
    const collapseGroups = getCollapseGroups(navItems);

    return (
        <nav className='bg-primary navbar h-auto'>
            <div className='navbar-content'>
                {/* Brand */}
                <div className='flex flex-row flex-nowrap'>
                    <img src={brandLogo} className='navbar-brand-logo mr-3' alt='' />
                    <a className='text-primary navbar-brand whitespace-nowrap' href='/'>
                        {brandName}
                    </a>
                </div>
                {/* Primary nav links */}
                <div className='pl-4 sm:flex hidden'>
                    {primaryNavItems &&
                        primaryNavItems.map(navItem => (
                            <PrimaryLink key={navItem.id} label={navItem.label} href={navItem.href} />
                        ))}
                </div>
                {/* Spacer */}
                <div className='sm:flex hidden flex-grow' />
                {/* Secondary nav links */}
                <div className='sm:flex hidden justify-between items-center'>
                    {secondaryNavItems &&
                        secondaryNavItems.map(navItem => (
                            <SecondaryLink key={navItem.id} label={navItem.label} href={navItem.href} />
                        ))}
                    {iconNavItems &&
                        iconNavItems.map(navItem => (
                            <IconLink key={navItem.id} iconFont={navItem.iconFont} iconSrc={navItem.iconSrc} href='/' />
                        ))}
                </div>
                {/* Overflow dropdown menu */}
                <div className='sm:flex hidden justify-between items-center'>
                    <div className='relative cursor-pointer' onClick={() => setShowMenuExpanded(!showMenuExpanded)}>
                        <div className='bg-hover px-2 py-1'>
                            <span className='text-primary-alt icon-xl leading-tight md:align-top align-middle'>
                                menu
                            </span>
                        </div>
                        <div className='right-1 mt-1 absolute'>
                            <Dropdown show={showMenuExpanded} innerRef={menuRef} width='sm'>
                                {getCollapseGroups(overflowNavItems).map((group, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <Dropdown.Separator />
                                            {group.map(item => {
                                                return (
                                                    <Dropdown.Link key={item.id} href={item.href} icon={item.iconFont}>
                                                        {item.label}
                                                    </Dropdown.Link>
                                                );
                                            })}
                                        </React.Fragment>
                                    );
                                })}
                            </Dropdown>
                        </div>
                    </div>
                </div>
                {/* Collapsed menu for small screen sizes */}
                <div
                    className='sm:hidden inline relative cursor-pointer'
                    onClick={() => setShowMenuCollapsed(!showMenuCollapsed)}
                >
                    <div className='bg-hover px-2 py-1'>
                        <span className='text-primary-alt icon-4xl leading-tight'>
                            {showMenuCollapsed ? 'expand_less' : 'expand_more'}
                        </span>
                    </div>
                </div>
            </div>
            <div className={`sm:hidden ${showMenuCollapsed ? 'flex flex-col gap-1' : 'hidden'}`}>
                {collapseGroups.map((group, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div className='h-px w-full bg-subdued' />
                            {group.map(navItem => (
                                <CollapsedMenuLink
                                    key={navItem.id}
                                    label={navItem.label}
                                    href={navItem.href}
                                    iconFont={navItem.iconFont}
                                    iconSrc={navItem.iconSrc}
                                />
                            ))}
                        </React.Fragment>
                    );
                })}
            </div>
        </nav>
    );
}

function PrimaryLink({ label, href }) {
    return (
        <a className='text-primary navbar-link hover:underline mr-4' href={href}>
            {label}
        </a>
    );
}

function SecondaryLink({ label, href, iconFont, iconSrc }) {
    return (
        <>
            <a className='text-primary md:inline hidden navbar-link-alt bg-hover px-2 py-1' href={href}>
                {label}
            </a>
            {iconFont && (
                <a className='md:hidden inline navbar-icon-link' href={href}>
                    <span className='text-primary-alt icon-lg leading-tight align-middle'>{iconFont}</span>
                </a>
            )}
            {iconSrc && (
                <a className='md:hidden inline navbar-icon-link' href={href}>
                    <img className='h-4 img-primary' src={iconSrc} alt='' />
                </a>
            )}
        </>
    );
}

function IconLink({ href, iconFont, iconSrc }) {
    if (iconFont) {
        return (
            <div className='bg-hover px-2 py-1'>
                <span className='text-primary-alt icon-xl leading-tight md:align-top align-middle'>{iconFont}</span>
            </div>
        );
    }
    return (
        <a className='navbar-icon-link' href={href}>
            <img className='h-4 img-primary' src={iconSrc} alt='' />
        </a>
    );
}

function CollapsedMenuLink({ label, href, iconFont, iconSrc }) {
    return (
        <a className='text-primary bg-hover py-1' href={href}>
            {iconFont && <span className='text-primary-alt icon-lg inline align-middle mr-1'>{iconFont}</span>}
            {iconSrc && <img className='h-4 img-primary inline align-middle mr-1' src={iconSrc} alt='' />}
            <p className='h-4 inline pl-1 font-sans-alt'>{label}</p>
        </a>
    );
}

function getCollapseGroups(items) {
    const groupMapping = {};
    for (const navItem of items) {
        const groupId = navItem.collapseGroup || -1;
        if (groupMapping[groupId]) {
            groupMapping[groupId].push(navItem);
        } else {
            groupMapping[groupId] = [navItem];
        }
    }

    const sortedIds = Object.keys(groupMapping).sort();
    const groups = [];
    for (const groupId of sortedIds) {
        const sortedGroup = _.sortBy(groupMapping[groupId], ['collapseOrder']);
        groups.push(sortedGroup);
    }
    return groups;
}
