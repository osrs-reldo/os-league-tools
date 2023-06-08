import React, { useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { addCharacter, fetchHiscores } from '../store/user/character';
import Modal from './Modal';

export const PLACEHOLDER_USERNAMES = [
  'zezima',
  'woox',
  'swampletics',
  'torvesta',
  'goodpker69',
  'limpwurt',
  '9rain',
  'slayermusiq1',
  'j1mmy',
  'soupRS',
  'c engineer',
  'b0aty',
  'only trails',
  'vannaka',
];

export default function AddCharacterModal({ isOpen, setIsOpen }) {
  const characterState = useSelector(state => state.character);
  const [characterText, setCharacterText] = useState('');
  const dispatch = useDispatch();

  const updateAndFetchHiscores = () => {
    batch(() => {
      dispatch(addCharacter({ rsn: characterText, setActive: true }));
      dispatch(fetchHiscores(characterState, characterText, true));
    });
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
        Character
      </Modal.Header>
      <Modal.Body className='text-primary text-sm'>
        <div className='m-2 mt-1'>Enter your character's display name:</div>
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
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
