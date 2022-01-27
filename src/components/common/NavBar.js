import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import _ from 'lodash';
import Dropdown from './Dropdown';
import useClickListener from '../../hooks/useClickListener';
import { getLayoutSlots } from './util/layout';

export class NavItem {
    constructor(label, variant = 'primary', collapseGroup = -1, collapseOrder = -1) {
        this.collapseGroup = collapseGroup;
        this.collapseOrder = collapseOrder;
        this.href = null;
        this.iconFont = null;
        this.iconSrc = null;
        this.id = label;
        this.label = label;
        this.onClick = null;
        this.props = {};
        this.props.slot = variant;
        this.renderAsDropdownFn = null;
        this.renderFn = null;
        this.target = null;
        this.to = null;
        this.variant = variant; // primary, secondary, icon, overflow
    }

    withHref(href, target = '_self') {
        this.href = href;
        this.target = target;
        return this;
    }

    withRouterLink(to) {
        this.to = to;
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

    withCustomRenderFn(renderFn, renderAsDropdownFn) {
        this.renderFn = renderFn;
        this.renderAsDropdownFn = renderAsDropdownFn;
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
                    <Link className='text-primary navbar-brand whitespace-nowrap' to='/'>
                        {brandName}
                    </Link>
                </div>
                {/* Primary nav links */}
                <div className='pl-4 sm:flex hidden'>
                    {primaryNavItems &&
                        primaryNavItems.map(navItem =>
                            navItem.renderFn ? (
                                navItem.renderFn()
                            ) : (
                                <PrimaryLink key={navItem.id} label={navItem.label} to={navItem.to} />
                            )
                        )}
                </div>
                {/* Spacer */}
                <div className='sm:flex hidden flex-grow' />
                {/* Secondary nav links */}
                <div className='sm:flex hidden justify-between items-center'>
                    {secondaryNavItems &&
                        secondaryNavItems.map(navItem => (
                            <React.Fragment key={navItem.id}>
                                {navItem.renderFn ? (
                                    navItem.renderFn()
                                ) : (
                                    <SecondaryLink
                                        key={navItem.id}
                                        label={navItem.label}
                                        href={navItem.href}
                                        target={navItem.target}
                                    />
                                )}
                                <span className='text-primary mx-1 mb-1'>|</span>
                            </React.Fragment>
                        ))}
                    {iconNavItems &&
                        iconNavItems.map(navItem => (
                            <React.Fragment key={navItem.id}>
                                {navItem.renderFn ? (
                                    navItem.renderFn()
                                ) : (
                                    <IconLink
                                        href={navItem.href}
                                        iconFont={navItem.iconFont}
                                        iconSrc={navItem.iconSrc}
                                        key={navItem.id}
                                        target={navItem.target}
                                    />
                                )}
                                <span className='text-primary mx-1 mb-1'>|</span>
                            </React.Fragment>
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
                                {getCollapseGroups(overflowNavItems).map((group, i) => (
                                    <React.Fragment key={i}>
                                        <Dropdown.Separator />
                                        {group.map(item => (
                                            <React.Fragment key={item.id}>
                                                {item.renderFn ? (
                                                    item.renderFn()
                                                ) : (
                                                    <Dropdown.Link
                                                        key={item.id}
                                                        href={item.href}
                                                        icon={item.iconFont}
                                                        target={item.target}
                                                        to={item.to}
                                                    >
                                                        {item.label}
                                                    </Dropdown.Link>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                ))}
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
                {collapseGroups.map((group, i) => (
                    <React.Fragment key={i}>
                        <div className='h-px w-full bg-subdued' />
                        {group.map(navItem =>
                            navItem.renderAsDropdownFn ? (
                                navItem.renderAsDropdownFn()
                            ) : (
                                <CollapsedMenuLink
                                    href={navItem.href}
                                    iconFont={navItem.iconFont}
                                    iconSrc={navItem.iconSrc}
                                    key={navItem.id}
                                    label={navItem.label}
                                    target={navItem.target}
                                    to={navItem.to}
                                />
                            )
                        )}
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
}

function PrimaryLink({ label, to }) {
    return (
        <NavLink className='text-primary navbar-link hover:underline mr-4' to={to}>
            {label}
        </NavLink>
    );
}

function SecondaryLink({ label, href, iconFont, iconSrc, target }) {
    return (
        <>
            <a className='text-primary md:inline hidden navbar-link-alt bg-hover px-2 py-1' href={href} target={target}>
                {label}
            </a>
            {iconFont && (
                <a className='md:hidden inline navbar-icon-link' href={href} target={target}>
                    <span className='text-primary-alt icon-lg leading-tight align-middle'>{iconFont}</span>
                </a>
            )}
            {iconSrc && (
                <a className='md:hidden inline navbar-icon-link' href={href} target={target}>
                    <img className='h-4 img-primary' src={iconSrc} alt='' />
                </a>
            )}
        </>
    );
}

function IconLink({ href, iconFont, iconSrc, target }) {
    if (iconFont) {
        return (
            <a className='bg-hover px-2 py-1' href={href} target={target}>
                <span className='text-primary-alt icon-xl leading-tight md:align-top align-middle'>{iconFont}</span>
            </a>
        );
    }
    return (
        <a className='navbar-icon-link' href={href} target={target}>
            <img className='h-4 img-primary' src={iconSrc} alt='' />
        </a>
    );
}

function CollapsedMenuLink({ iconFont, iconSrc, label, href, target, to }) {
    const linkContent = (
        <>
            {iconFont && <span className='text-primary-alt icon-lg inline align-middle mr-1'>{iconFont}</span>}
            {iconSrc && <img className='h-4 img-primary inline align-middle mr-1' src={iconSrc} alt='' />}
            <p className='h-4 inline pl-1 font-sans-alt'>{label}</p>
        </>
    );

    if (href) {
        return (
            <a className='text-primary bg-hover py-1' href={href} target={target}>
                {linkContent}
            </a>
        );
    }

    if (to) {
        return (
            <NavLink className='text-primary bg-hover py-1' to={to}>
                {linkContent}
            </NavLink>
        );
    }
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
