import React from 'react';
import Spinner from '../common/Spinner';
import useAccount from '../../hooks/useAccount';

function NavBarItem() {
  const { isLoggedIn, isAuthenticating, login, logout } = useAccount({ redirectReturnToUrl: window.location.origin });

  if (isAuthenticating) {
    return (
      <>
        <Spinner color='black' size={Spinner.SIZE.sm} />
        <div className='text-primary-alt ml-1 italic text-sm'>Loading user</div>
      </>
    );
  }

  const { label, icon, action } = getButtonValues(isLoggedIn, login, logout);
  return (
    <>
      <button
        className='text-primary md:inline hidden navbar-link-alt bg-hover px-2 py-1'
        onClick={() => action()}
        type='button'
      >
        {label}
      </button>
      <button className='md:hidden inline navbar-icon-link' onClick={action} type='button'>
        <span className='text-primary-alt icon-lg leading-tight align-middle'>{icon}</span>
      </button>
    </>
  );
}

function CollapsedMenu() {
  const { isLoggedIn, login, logout } = useAccount({ redirectReturnToUrl: window.location.origin });
  const { label, icon, action } = getButtonValues(isLoggedIn, login, logout);

  return (
    <button className='text-primary bg-hover py-1 text-left' onClick={() => action()} type='button'>
      <span className='text-primary-alt icon-lg inline align-middle mr-1'>{icon}</span>
      <p className='h-4 inline pl-1 font-sans-alt'>{label}</p>
    </button>
  );
}

function getButtonValues(isLoggedIn, login, logout) {
  return {
    label: isLoggedIn ? 'Logout' : 'Login',
    icon: isLoggedIn ? 'logout' : 'login',
    action: isLoggedIn ? logout : login,
  };
}

export default { NavBarItem, CollapsedMenu };
