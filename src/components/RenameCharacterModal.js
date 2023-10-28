import React, { useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
  LOCALSTORAGE_KEYS,
  updateLocalStorage,
} from '../client/localstorage-client';
import { fetchHiscores, renameCharacter } from '../store/user/character';
import { PLACEHOLDER_USERNAMES } from './AddCharacterModal';
import Modal from './Modal';
import { INITIAL_STATE as INITIAL_TASKS_STATE } from '../store/tasks/constants';
import { INITIAL_STATE as INITIAL_UNLOCKS_STATE } from '../store/unlocks/constants';
import { loadNewState } from '../store/common';

export default function RenameCharacterModal({ characterName, characterIndex, isActiveCharacter, isOpen, setIsOpen }) {
  const characterState = useSelector(state => state.character);
  const [characterText, setCharacterText] = useState(characterName || '');
  const dispatch = useDispatch();

  const updateAndFetchHiscores = () => {
    const taskState = getFromLocalStorage(`${LOCALSTORAGE_KEYS.TASKS}_${characterName}`, INITIAL_TASKS_STATE);
    const unlocksState = getFromLocalStorage(`${LOCALSTORAGE_KEYS.UNLOCKS}_${characterName}`, INITIAL_UNLOCKS_STATE);
    updateLocalStorage(`${LOCALSTORAGE_KEYS.TASKS}_${characterText}`, taskState);
    updateLocalStorage(`${LOCALSTORAGE_KEYS.UNLOCKS}_${characterText}`, unlocksState);
    deleteFromLocalStorage(`${LOCALSTORAGE_KEYS.TASKS}_${characterName}`);
    deleteFromLocalStorage(`${LOCALSTORAGE_KEYS.UNLOCKS}_${characterName}`);

    batch(() => {
      dispatch(renameCharacter({ index: characterIndex, rsn: characterText }));
      dispatch(fetchHiscores(characterState, characterText, true));
    });

    if (isActiveCharacter) {
      loadNewState(dispatch, {
        tasks: taskState,
        unlocks: unlocksState,
      });
    }
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={() => {}}
      className='w-[26rem] shadow shadow-primary rounded-md bg-primary-alt'
    >
      <Modal.Header className='text-center small-caps tracking-wide text-xl text-accent font-semibold'>
        Rename character
      </Modal.Header>
      <Modal.Body className='text-primary text-sm'>
        <div className='m-2 mt-1'>If your display name has changed, update it below.</div>
        <div className='m-2 mt-1 mb-4 flex justify-around'>
          <input
            className='input-primary text-sm form-input w-40 ml-2'
            onChange={e => {
              setCharacterText(e.target.value);
            }}
            placeholder={PLACEHOLDER_USERNAMES[Math.floor(Math.random() * PLACEHOLDER_USERNAMES.length)]}
            value={characterText}
            onKeyPress={e => e.key === 'Enter' && updateAndFetchHiscores()}
            type='text'
          />
          <button className='w-40 button-filled' type='button' onClick={updateAndFetchHiscores}>
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
