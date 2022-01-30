import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Page from './common/Page';
import NavBar, { NavItem } from './common/NavBar';
import AuthButton from './AuthButton';
import FeedbackModal from './FeedbackModal';
import Dropdown from './common/Dropdown';
import Banner from './common/Banner';
import ManageDataModal from './ManageDataModal';
import images from '../assets/images';
import useClickListener from '../hooks/useClickListener';
import useQueryString from '../hooks/useQueryString';

export default function PageWrapper({ children }) {
    const theme = useSelector(state => state.settings.theme);
    const limitContentWidth = useSelector(state => state.settings.limitContentWidth);
    const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [manageDataModalType, setManageDataModalType] = useQueryString('open');

    const navItems = [
        new NavItem('Stats', 'primary', 0, 0).withRouterLink('/stats').withIconFont('query_stats'),
        new NavItem('Trackers', 'primary', 0, 1).withRouterLink('/tracker').withIconFont('checklist_rtl'),
        new NavItem('Calculators', 'primary', 0, 2).withRouterLink('/calculators').withIconFont('calculate'),
        new NavItem('Import', 'secondary', 1, 0).withCustomRenderFn(
            () => <ManageDataDropdown setManageDataModalType={setManageDataModalType} />,
            () => (
                <React.Fragment key='dataManagement'>
                    <button
                        key='import'
                        className='text-primary bg-hover py-1 text-left'
                        onClick={() => setManageDataModalType('import')}
                        type='button'
                    >
                        <span className='text-primary-alt icon-lg inline align-middle mr-1'>file_download</span>
                        <p className='h-4 inline pl-1 font-sans-alt'>Import / Sync</p>
                    </button>
                    <button
                        key='export'
                        className='text-primary bg-hover py-1 text-left'
                        onClick={() => setManageDataModalType('export')}
                        type='button'
                    >
                        <span className='text-primary-alt icon-lg inline align-middle mr-1'>file_upload</span>
                        <p className='h-4 inline pl-1 font-sans-alt'>Export data</p>
                    </button>
                    <button
                        key='reset'
                        className='text-primary bg-hover py-1 text-left'
                        onClick={() => setManageDataModalType('reset')}
                        type='button'
                    >
                        <span className='text-primary-alt icon-lg inline align-middle mr-1'>dangerous</span>
                        <p className='h-4 inline pl-1 font-sans-alt'>Reset all data</p>
                    </button>
                </React.Fragment>
            )
        ),
        new NavItem('Login', 'secondary', 2, 0).withCustomRenderFn(
            () => <AuthButton key='login' />,
            () => <AuthButton key='login' useDropdownVariant />
        ),
        new NavItem('Settings', 'overflow', 2, 1).withRouterLink('/settings').withIconFont('settings'),
        new NavItem('Discord', 'overflow', 3, 0)
            .withHref('https://discord.gg/GQ5kVyU', '_blank')
            .withIconFont('discord'),
        new NavItem('Feedback', 'overflow', 3, 1).withCustomRenderFn(
            () => (
                <Dropdown.Button
                    key='feedback'
                    icon='pest_control'
                    className='text-left'
                    onClick={() => setFeedbackModalOpen(true)}
                >
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
        new NavItem('Github', 'overflow', 3, 2)
            .withHref('https://github.com/osrs-reldo/os-league-tools', '_blank')
            .withIconFont('code'),
        new NavItem('Tip Jar', 'overflow', 3, 3)
            .withHref('https://ko-fi.com/osleaguetools', '_blank')
            .withIconFont('savings'),
        new NavItem('About', 'overflow', 3, 4).withRouterLink('/about').withIconFont('help_outline'),
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
                <NavBar navItems={navItems} brandName='OS League Tools' brandLogo={images[`icon-${theme}.png`]} />
            </Page.Nav>
            <Page.Body>
                {children}
                <FeedbackModal isOpen={isFeedbackModalOpen} setIsOpen={val => setFeedbackModalOpen(val)} />
                <ManageDataModal
                    variant={manageDataModalType}
                    isOpen={!!manageDataModalType}
                    setIsOpen={() => setManageDataModalType(null)}
                />
            </Page.Body>
        </Page>
    );
}

function ManageDataDropdown({ setManageDataModalType }) {
    const [isExpanded, setExpanded] = useState(false);
    const menuRef = useRef(null);
    useClickListener(menuRef, () => setExpanded(false), true);

    return (
        <div className='relative'>
            <button
                key='plugin'
                className='text-primary md:inline hidden navbar-link-alt bg-hover py-1 px-2'
                type='button'
                onClick={() => setExpanded(true)}
            >
                Manage Data
            </button>
            <div className='mt-1 absolute text-center'>
                <Dropdown show={isExpanded} innerRef={menuRef}>
                    <Dropdown.Separator />
                    <Dropdown.Button className='text-left' onClick={() => setManageDataModalType('import')}>
                        <span className='icon-base mr-1 align-bottom'>file_download</span> Import
                    </Dropdown.Button>
                    <Dropdown.Button className='text-left' onClick={() => setManageDataModalType('export')}>
                        <span className='icon-base mr-1 align-bottom'>file_upload</span> Export
                    </Dropdown.Button>
                    <Dropdown.Separator />
                    <Dropdown.Button className='text-left' onClick={() => setManageDataModalType('reset')}>
                        <span className='icon-outline text-base mr-1 align-bottom'>dangerous</span> Reset
                    </Dropdown.Button>
                </Dropdown>
            </div>
        </div>
    );
}
