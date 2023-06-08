import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCharacter } from '../store/user/character';
import Modal from './Modal';

export default function DeleteCharacterModal({ characterName, characterIndex, isOpen, setIsOpen }) {
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={() => {}}
      className='w-[26rem] shadow shadow-primary rounded-md bg-primary-alt'
    >
      <Modal.Header className='text-center small-caps tracking-wide text-xl text-accent font-semibold'>
        Delete character
      </Modal.Header>
      <Modal.Body className='text-primary text-sm'>
        <div className='m-2 mt-1'>Are you sure you want to delete {characterName}? This cannot be undone.</div>
        <div className='m-2 mt-1 mb-4 flex justify-around'>
          <button className='w-40 button-outline' type='button' onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <button
            className='w-40 button-filled'
            type='button'
            onClick={() => {
              dispatch(deleteCharacter(characterIndex));
              setIsOpen(false);
            }}
          >
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
