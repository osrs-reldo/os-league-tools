import React, { useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { fetchHiscores, renameCharacter } from '../store/user/character';
import { PLACEHOLDER_USERNAMES } from './AddCharacterModal';
import Modal from './Modal';

export default function RenameCharacterModal({ characterName, characterIndex, isOpen, setIsOpen }) {
  const characterState = useSelector(state => state.character);
  const [characterText, setCharacterText] = useState(characterName || '');
  const dispatch = useDispatch();

  const updateAndFetchHiscores = () => {
    batch(() => {
      dispatch(renameCharacter({ index: characterIndex, rsn: characterText }));
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
        <div className='m-2 mt-1'>'If your display name has changed, update it below.'</div>
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
