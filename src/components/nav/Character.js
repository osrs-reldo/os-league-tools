import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useClickListener from '../../hooks/useClickListener';
import { fetchHiscores } from '../../store/user/character';
import { durationAsRelativeTime } from '../../util/numberFormatters';
import Dropdown from '../common/Dropdown';
import Spinner from '../common/Spinner';

function NavBarItem({ setCharacterModalOpen }) {
    const [isExpanded, setExpanded] = useState(false);
    const dispatch = useDispatch();
    const menuRef = useRef(null);
    const characterState = useSelector(state => state.character);
    useClickListener(menuRef, () => setExpanded(false), true);

    if (!characterState.username) {
        return (
            <button
                className='text-primary md:inline hidden navbar-link-alt bg-hover py-1 px-2'
                type='button'
                onClick={() => setCharacterModalOpen(true)}
            >
                <span className='icon-base mr-1 align-bottom'>manage_accounts</span> Character setup
            </button>
        );
    }

    return (
        <div className='relative'>
            <button
                className='text-primary md:inline hidden navbar-link-alt bg-hover py-1 px-2'
                type='button'
                onClick={() => setExpanded(true)}
            >
                <span className='icon-base mr-1 align-bottom'>account_circle</span>
                {characterState.username}
            </button>
            <div className='mt-1 absolute text-center'>
                <Dropdown show={isExpanded} innerRef={menuRef}>
                    <Dropdown.Separator />
                    <Dropdown.Button
                        className='text-left'
                        onClick={() => dispatch(fetchHiscores(characterState, true))}
                    >
                        {characterState.hiscoresCache.loading ? (
                            <div className='text-center'>
                                <Spinner size={Spinner.SIZE.sm} invertColorForDarkMode={false} />
                            </div>
                        ) : (
                            <>
                                <p>
                                    <span className='icon-base mr-1 align-bottom'>cached</span> Update hiscores
                                </p>

                                <p className='text-xs italic'>
                                    Last updated: {durationAsRelativeTime(characterState.hiscoresCache.lastUpdated)}
                                </p>
                            </>
                        )}
                    </Dropdown.Button>
                    <Dropdown.Separator />
                    <Dropdown.Button className='text-left' onClick={() => setCharacterModalOpen(true)}>
                        <span className='icon-base mr-1 align-bottom'>manage_accounts</span> Manage character
                    </Dropdown.Button>
                </Dropdown>
            </div>
        </div>
    );
}

function CollapsedMenu({ setCharacterModalOpen }) {
    const characterState = useSelector(state => state.character);
    const dispatch = useDispatch();

    if (!characterState.username) {
        return (
            <button
                className='text-primary bg-hover py-1 text-left'
                type='button'
                onClick={() => setCharacterModalOpen(true)}
            >
                <span className='text-primary-alt icon-lg inline align-middle mr-1'>manage_accounts</span>
                <p className='h-4 inline pl-1 font-sans-alt'>Character setup</p>
            </button>
        );
    }

    return (
        <>
            <button
                className='text-primary bg-hover py-1 text-left'
                onClick={() => dispatch(fetchHiscores(characterState, true))}
                type='button'
            >
                {characterState.hiscoresCache.loading ? (
                    <Spinner size={Spinner.SIZE.sm} invertColorForDarkMode={false} />
                ) : (
                    <span className='text-primary-alt icon-lg inline align-middle mr-1'>cached</span>
                )}
                <p className='h-4 inline pl-1 font-sans-alt'>Update hiscores</p>
                <p className='text-xs italic'>
                    Last updated: {durationAsRelativeTime(characterState.hiscoresCache.lastUpdated)}
                </p>
            </button>
            <button
                className='text-primary bg-hover py-1 text-left'
                onClick={() => setCharacterModalOpen(true)}
                type='button'
            >
                <span className='text-primary-alt icon-lg inline align-middle mr-1'>manage_accounts</span>
                <p className='h-4 inline pl-1 font-sans-alt'>Manage character</p>
            </button>
        </>
    );
}

export default { NavBarItem, CollapsedMenu };
