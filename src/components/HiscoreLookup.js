import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHiscores, updateUsername } from '../store/user/character';
import Spinner from './common/Spinner';

export default function HiscoreLookup() {
    const characterState = useSelector(state => state.character);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHiscores(characterState));
        // only want this to run once on first load
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <input
                    type='text'
                    className='input-primary form-input grow'
                    placeholder='Username'
                    value={characterState.username || ''}
                    onChange={event => dispatch(updateUsername(event.target.value))}
                    onKeyPress={e => e.key === 'Enter' && dispatch(fetchHiscores(characterState, true))}
                />
                <button
                    className='ml-2 button-md button-filled w-20'
                    type='button'
                    onClick={() => dispatch(fetchHiscores(characterState, true))}
                >
                    {characterState.hiscoresCache.loading ? (
                        <span>
                            <Spinner />
                        </span>
                    ) : (
                        'Lookup'
                    )}
                </button>
            </div>
            {characterState.hiscoresCache.error && (
                <div className='text-error text-sm'>{characterState.hiscoresCache.error}</div>
            )}
        </div>
    );
}
