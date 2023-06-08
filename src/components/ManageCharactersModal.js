/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { fetchHiscores, updateActiveCharacter } from '../store/user/character';
import AddCharacterModal from './AddCharacterModal';
import DeleteCharacterModal from './DeleteCharacterModal';
import Modal from './Modal';
import RenameCharacterModal from './RenameCharacterModal';

export default function ManageCharactersModal({ isOpen, setIsOpen }) {
  const characterState = useSelector(state => state.character);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [renamingCharacterIndex, setRenamingCharacterIndex] = useState(null);
  const [deletingCharacterIndex, setDeletingCharacterIndex] = useState(null);
  const dispatch = useDispatch();

  const setActiveCharacter = index => {
    batch(() => {
      dispatch(updateActiveCharacter(index));
      dispatch(fetchHiscores(characterState, characterState.characters[index], true));
    });
  };

  if (addModalOpen) {
    return <AddCharacterModal isOpen={addModalOpen} setIsOpen={setAddModalOpen} />;
  }

  if (renamingCharacterIndex !== null) {
    return (
      <RenameCharacterModal
        characterName={characterState.characters[renamingCharacterIndex]}
        characterIndex={renamingCharacterIndex}
        isOpen={renamingCharacterIndex !== null}
        setIsOpen={() => setRenamingCharacterIndex(null)}
      />
    );
  }

  if (deletingCharacterIndex !== null) {
    return (
      <DeleteCharacterModal
        characterName={characterState.characters[deletingCharacterIndex]}
        characterIndex={deletingCharacterIndex}
        isOpen={deletingCharacterIndex !== null}
        setIsOpen={() => setDeletingCharacterIndex(null)}
      />
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={() => {}}
      className='w-[26rem] shadow shadow-primary rounded-md bg-primary-alt'
    >
      <Modal.Header className='text-center small-caps tracking-wide text-xl text-accent font-semibold'>
        Manage characters
      </Modal.Header>
      <Modal.Body className='text-primary text-sm'>
        <div className='m-2 mt-1 flex flex-col justify-around'>
          {characterState.characters.length &&
            characterState.characters.map((character, i) => (
              <CharacterRow
                character={character}
                isActiveCharacter={characterState.activeCharacter === i}
                openRenameModal={() => setRenamingCharacterIndex(i)}
                openDeleteModal={() => setDeletingCharacterIndex(i)}
                setActiveCharacter={() => setActiveCharacter(i)}
              />
            ))}
          <button type='button' className='py-1 px-2 button-outline mt-4' onClick={() => setAddModalOpen(true)}>
            Add character
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function CharacterRow({ character, isActiveCharacter, openRenameModal, openDeleteModal, setActiveCharacter }) {
  return (
    <div className='grid grid-cols-4 items-center justify-center gap-2 mt-2' key={character}>
      {character}
      {isActiveCharacter ? (
        <div className='px-1 button-filled text-center'>Active</div>
      ) : (
        <button key='active' type='button' className='px-1 button-outline' onClick={setActiveCharacter}>
          Set Active
        </button>
      )}
      <button key='rename' type='button' className='px-1 button-outline' onClick={openRenameModal}>
        Rename
      </button>
      <button
        key='delete'
        type='button'
        className={`px-1 ${isActiveCharacter ? 'button-outline-disabled' : 'button-outline'}`}
        onClick={openDeleteModal}
        disabled={isActiveCharacter}
      >
        Delete
      </button>
    </div>
  );
}
