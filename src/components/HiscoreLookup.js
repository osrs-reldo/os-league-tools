import React, { useEffect, useState } from 'react';
import Spinner from './common/Spinner';
import { getCachedHiscores, getHiscores } from '../client/hiscores-client';
import useLocalStorage from '../hooks/useLocalStorage';
import { LOCALSTORAGE_KEYS } from '../client/localstorage-client';

export default function HiscoreLookup({ handleResultCallback = () => {} }) {
    const [username, setUsername] = useLocalStorage(LOCALSTORAGE_KEYS.USERNAME, '');
    const [errorText, setErrorText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const cachedHiscores = getCachedHiscores();
        if (cachedHiscores) {
            handleResultCallback(cachedHiscores);
        } else if (username) {
            setIsLoading(true);
            getHiscores(username).then(res => {
                if (res.success) {
                    handleResultCallback(res.hiscores);
                    setIsLoading(false);
                } else {
                    setErrorText(res.message);
                    setIsLoading(false);
                }
            });
        }
        // only want this to run once on first load
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const doHiscoresLookup = () => {
        setIsLoading(true);
        setErrorText('');
        if (username) {
            getHiscores(username).then(res => {
                if (res.success) {
                    handleResultCallback(res.hiscores);
                    setIsLoading(false);
                } else {
                    setErrorText(res.message);
                    setIsLoading(false);
                }
            });
        } else {
            setErrorText('Please enter a username.');
            setIsLoading(false);
        }
    };

    return (
        <div className='flex flex-row'>
            <input
                type='text'
                className='input-primary grow'
                placeholder='Username'
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <button className='ml-2 button-md button-filled' type='button' onClick={() => doHiscoresLookup()}>
                {isLoading && (
                    <span className='mr-1'>
                        <Spinner />
                    </span>
                )}
                Lookup
            </button>
            {errorText && <div className='text-error text-sm'>{errorText}</div>}
        </div>
    );
}
