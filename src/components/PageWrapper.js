import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import Page from './common/Page';
import NavBar, { NavItem } from './common/NavBar';
import FeedbackModal from './FeedbackModal';
import ManageDataModal from './ManageDataModal';
import images from '../assets/images';
import useQueryString from '../hooks/useQueryString';
import ManageData from './nav/ManageData';
import Feedback from './nav/Feedback';
import ManageCharactersModal from './ManageCharactersModal';
import ModalAccountsManagement from './Modal_AccountManagement';
import { useAuth } from '../AuthContext';

export default function PageWrapper({ children }) {
  const theme = useSelector(state => state.settings.theme);
  const limitContentWidth = useSelector(state => state.settings.limitContentWidth);
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [isCharacterModalOpen, setCharacterModalOpen] = useState(false);
  const [manageDataModalType, setManageDataModalType] = useQueryString('open');
  const [accountsModalOpen, setAccountsModalOpen] = useState(false);
  const username = localStorage.getItem('username') || 'Guest';
  const { logout } = useAuth();
  const characterState = useSelector(state => state.character);
  const activeCharacterName = characterState.characters[characterState.activeCharacter];

  const navItems = [
    new NavItem('Stats', 'primary', 0, 0).withRouterLink('/stats').withIconFont('query_stats'),
    new NavItem('Trackers', 'primary', 0, 1).withRouterLink('/tracker').withIconFont('checklist_rtl'),
    new NavItem('Calculators', 'primary', 0, 2).withRouterLink('/calculators').withIconFont('calculate'),
    new NavItem('Account Management', 'secondary', 1, 1).withCustomRenderFn(
      () => (
        <button
          key='account-management'
          type='button'
          onClick={() => setAccountsModalOpen(true)}
          className='nav-item-button text-primary-alt px-3 py-2 block bg-hover align-middle' // Adjust styling as needed
        >
          Logged in: {activeCharacterName || <span className='text-red-500 font-bold'>No character set!</span>}
        </button>
      ),
      () => (
        <button
          key='account-management'
          type='button'
          onClick={() => setAccountsModalOpen(true)}
          className='nav-item-button text-primary-alt px-3 py-2 block bg-hover align-middle'
        >
          Logged in: {username} managing {activeCharacterName || 'Guest'}
        </button>
      )
    ),
    new NavItem('Import', 'secondary', 2, 0).withCustomRenderFn(
      () => <ManageData.NavBarItem key='manage' setManageDataModalType={setManageDataModalType} />,
      () => <ManageData.CollapsedMenu key='manage' setManageDataModalType={setManageDataModalType} />
    ),
    new NavItem('Login', 'overflow', 3, 1).withRouterLink('/login').withIconFont('account_circle'),
    new NavItem('Register', 'overflow', 3, 1).withRouterLink('/register').withIconFont('person_add'),
    new NavItem('Settings', 'overflow', 3, 1).withRouterLink('/settings').withIconFont('settings'),
    new NavItem('Discord', 'overflow', 4, 0).withHref('https://discord.gg/GQ5kVyU', '_blank').withIconFont('discord'),
    new NavItem('Feedback', 'overflow', 4, 1).withCustomRenderFn(
      () => <Feedback.NavBarItem key='feedback' setFeedbackModalOpen={setFeedbackModalOpen} />,
      () => <Feedback.CollapsedMenu key='feedback' setFeedbackModalOpen={setFeedbackModalOpen} />
    ),
    new NavItem('Github', 'overflow', 4, 2)
      .withHref('https://github.com/osrs-reldo/os-league-tools', '_blank')
      .withIconFont('code'),
    new NavItem('Tip Jar', 'overflow', 4, 3)
      .withHref('https://ko-fi.com/osleaguetools', '_blank')
      .withIconFont('savings'),
    new NavItem('FAQ', 'overflow', 4, 4).withRouterLink('/faq').withIconFont('help_outline'),
    new NavItem('About', 'overflow', 4, 5).withRouterLink('/about').withIconFont('info'),
    new NavItem('Logout', 'overflow', 4, 6).withCustomRenderFn(() => (
      <button type='button' onClick={logout} className='text-primary-alt px-3 py-2 block bg-hover align-middle'>
        <LogoutIcon />
        <span className='ml-1'>Logout</span>
      </button>
    )),
  ];

  return (
    <Page limitContentWidth={limitContentWidth}>
      <Page.Nav>
        <NavBar navItems={navItems} brandName='OS League Tools' brandLogo={images[`icon-${theme}.png`]} />
      </Page.Nav>
      <Page.Body>
        {children}
        <FeedbackModal isOpen={isFeedbackModalOpen} setIsOpen={val => setFeedbackModalOpen(val)} />
        <ManageCharactersModal isOpen={isCharacterModalOpen} setIsOpen={val => setCharacterModalOpen(val)} />
        <ModalAccountsManagement isOpen={accountsModalOpen} setIsOpen={setAccountsModalOpen} />
        <ManageDataModal
          variant={manageDataModalType}
          isOpen={!!manageDataModalType}
          setIsOpen={() => setManageDataModalType(null)}
        />
      </Page.Body>
    </Page>
  );
}
