import React, { useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { fetchHiscores, updateUsername } from '../store/user/character';
import Spinner from './common/Spinner';
import Modal from './Modal';

const PLACEHOLDER_USERNAMES = [
  'zezima',
  'woox',
  'swampletics',
  'torvesta',
  'goodpker69',
  'limpwurt',
  'one kik rick',
  'slayermusiq1',
];

export default function ManageCharactersModal({ isOpen, setIsOpen }) {
  const characterState = useSelector(state => state.character);
  const [characterText, setCharacterText] = useState(characterState.username || '');
  const dispatch = useDispatch();

  const updateAndFetchHiscores = () => {
    batch(() => {
      dispatch(updateUsername(characterText));
      dispatch(
        fetchHiscores({
          ...characterState,
          username: characterText,
        })
      );
    });
  };

  const prompt = characterState.username
    ? 'If your display name has changed, update it below.'
    : "Enter your character's display name to automatically load your stats from hiscores:";

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={() => {}}
      className='w-[26rem] shadow shadow-primary rounded-md bg-primary-alt'
    >
      <Modal.Header className='text-center small-caps tracking-wide text-xl text-accent font-semibold'>
        Manage character
      </Modal.Header>
      <Modal.Body className='text-primary text-sm'>
        <div className='m-2 mt-1'>{prompt}</div>
        <div className='m-2 mt-1 flex justify-around'>
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
            {characterState.hiscoresCache.loading ? (
              <span>
                <Spinner />
              </span>
            ) : (
              'Submit'
            )}
          </button>
        </div>
        <div className='my-1 flex justify-around'>
          {characterState.hiscoresCache.error && (
            <p className='text-error text-sm'>{characterState.hiscoresCache.error}</p>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
