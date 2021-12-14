/* eslint-disable react/no-array-index-key */
/* linter is grumpy and won't pick this up from eslintrc right now */

import React, { useState, useRef } from 'react';
import _ from 'lodash';
import Dropdown from './Dropdown';
import useClickListener from '../../hooks/useClickListener';
import { getLayoutSlots } from './layout';

export class NavItem {
    constructor(text, variant = 'primary', collapseGroup = -1, collapseOrder = -1) {
        this.id = text;
        this.text = text;
        this.variant = variant; // primary, secondary, icon, overflow
        this.props = {};
        this.props.slot = variant;
        this.collapseGroup = collapseGroup;
        this.collapseOrder = collapseOrder;
        this.href = null;
        this.onClick = null;
        this.iconText = null;
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

    withIconText(iconText) {
        this.iconText = iconText;
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
                            <PrimaryLink key={navItem.id} text={navItem.text} href={navItem.href} />
                        ))}
                </div>
                {/* Spacer */}
                <div className='sm:flex hidden flex-grow' />
                {/* Secondary nav links */}
                <div className='sm:flex hidden justify-between items-center'>
                    {secondaryNavItems &&
                        secondaryNavItems.map(navItem => (
                            <SecondaryLink key={navItem.id} text={navItem.text} href={navItem.text} />
                        ))}
                    {iconNavItems &&
                        iconNavItems.map(navItem => (
                            <IconLink key={navItem.id} iconText={navItem.iconText} iconSrc={navItem.iconSrc} href='/' />
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
                                                    <Dropdown.Link key={item.id} href={item.href} icon={item.iconText}>
                                                        {item.text}
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
                                    text={navItem.text}
                                    href={navItem.href}
                                    iconText={navItem.iconText}
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

function PrimaryLink({ text, href }) {
    return (
        <a className='text-primary navbar-link hover:underline mr-4' href={href}>
            {text}
        </a>
    );
}

function SecondaryLink({ text, href, iconText, iconSrc }) {
    return (
        <>
            <a className='text-primary md:inline hidden navbar-link-alt bg-hover px-2 py-1' href={href}>
                {text}
            </a>
            {iconText && (
                <a className='md:hidden inline navbar-icon-link' href={href}>
                    <span className='text-primary-alt icon-lg leading-tight align-middle'>{iconText}</span>
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

function IconLink({ href, iconText, iconSrc }) {
    if (iconText) {
        return (
            <div className='bg-hover px-2 py-1'>
                <span className='text-primary-alt icon-xl leading-tight md:align-top align-middle'>{iconText}</span>
            </div>
        );
    }
    return (
        <a className='navbar-icon-link' href={href}>
            <img className='h-4 img-primary' src={iconSrc} alt='' />
        </a>
    );
}

function CollapsedMenuLink({ text, href, iconText, iconSrc }) {
    return (
        <a className='text-primary bg-hover py-1' href={href}>
            {iconText && <span className='text-primary-alt icon-lg inline align-middle mr-1'>{iconText}</span>}
            {iconSrc && <img className='h-4 img-primary inline align-middle mr-1' src={iconSrc} alt='' />}
            <p className='h-4 inline pl-1 font-sans-alt'>{text}</p>
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
