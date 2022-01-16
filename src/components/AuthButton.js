/* eslint-disable no-unused-vars */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Spinner from './common/Spinner';

export default function AuthButton({ useDropdownVariant = false }) {
    const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    if (isLoading) {
        return (
            <>
                <Spinner color='black' size={Spinner.SIZE.sm} />
                <div className='text-primary-alt ml-1 italic text-sm'>Loading user</div>
            </>
        );
    }

    const label = isAuthenticated ? 'Logout' : 'Login';
    const icon = isAuthenticated ? 'logout' : 'login';
    const action = isAuthenticated ? () => logout() : () => loginWithRedirect();

    if (useDropdownVariant) {
        return (
            <button className='text-primary bg-hover py-1 text-left' onClick={action} type='button'>
                <span className='text-primary-alt icon-lg inline align-middle mr-1'>{icon}</span>
                <p className='h-4 inline pl-1 font-sans-alt'>{label}</p>
            </button>
        );
    }

    return (
        <>
            <button
                className='text-primary md:inline hidden navbar-link-alt bg-hover px-2 py-1'
                onClick={action}
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
