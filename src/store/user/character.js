/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getHiscores from '../../client/hiscores-client';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../../client/localstorage-client';
import updateWithUserDataStorage from '../updateWithUserDataStorage';
import updateCharacterVersion from './updateCharacterVersion';
import { INITIAL_STATE, HISCORES_TTL } from './constants';

export const characterSlice = createSlice({
  name: 'character',
  initialState: INITIAL_STATE,
  reducers: {
    updateActiveCharacter: (state, action) => {
      state.activeCharacter = action.payload;
    },
    addCharacter: (state, action) => {
      state.characters.push(action.payload.rsn);
      if (action.payload.setActive) {
        state.activeCharacter = state.characters.length - 1;
      }
    },
    deleteCharacter: (state, action) => {
      state.characters.splice(action.payload, 1);
      if (state.activeCharacter === action.payload) {
        state.activeCharacter = 0;
      } else if (state.activeCharacter > action.payload) {
        state.activeCharacter -= 1;
      }
    },
    renameCharacter: (state, action) => {
      state.characters[action.payload.index] = action.payload.rsn;
    },
    updateHiscores: (state, action) => {
      switch (action.payload.type) {
        case 'LOADING':
          state.hiscoresCache.loading = true;
          break;
        case 'SUCCESS':
          state.hiscoresCache.data = action.payload.value;
          state.hiscoresCache.error = null;
          state.hiscoresCache.lastUpdated = Date.now();
          state.hiscoresCache.loading = false;
          break;
        case 'ERROR':
          state.hiscoresCache.error = action.payload.value;
          state.hiscoresCache.lastUpdated = Date.now();
          state.hiscoresCache.loading = false;
          break;
        default:
          console.warn(`updateHiscores called with unexpected action type ${action.type}`);
          break;
      }
    },
    load: (state, action) => {
      const fallbackState = action.payload.forceOverwrite ? INITIAL_STATE : state;
      return {
        ...fallbackState,
        ...action.payload.newState,
      };
    },
    reset: () => INITIAL_STATE,
  },
});

export const loadState = () => {
  const prevState = getFromLocalStorage(LOCALSTORAGE_KEYS.CHARACTER, INITIAL_STATE);
  return updateCharacterVersion(prevState);
};

export function selectActiveCharacter(state) {
  return state.characters[state.activeCharacter];
}

export function fetchHiscores(state, usernameOverride = null, forceReload = false) {
  if (!state.characters.length && !usernameOverride) {
    // Don't try to query if there's no username
    return () => {};
  }

  const isFreshData = Date.now() - state.hiscoresCache.lastUpdated < HISCORES_TTL;
  if (!forceReload && isFreshData) {
    // Do nothing, hiscores is already up-to-date
    return () => {};
  }
  return dispatch => {
    dispatch(characterSlice.actions.updateHiscores({ type: 'LOADING' }));
    getHiscores(usernameOverride ?? state.characters[state.activeCharacter], result => {
      if (result.success) {
        dispatch(characterSlice.actions.updateHiscores({ type: 'SUCCESS', value: result.hiscores }));
      } else {
        dispatch(characterSlice.actions.updateHiscores({ type: 'ERROR', value: result.message }));
      }
    });
  };
}

const {
  updateActiveCharacter: innerUpdateActiveCharacter,
  load: innerLoad,
  reset: innerReset,
  addCharacter: innerAddCharacter,
  deleteCharacter: innerDeleteCharacter,
  renameCharacter: innerRenameCharacter,
} = characterSlice.actions;

export function updateActiveCharacter(props) {
  return updateWithUserDataStorage(innerUpdateActiveCharacter, props, LOCALSTORAGE_KEYS.CHARACTER, 'character');
}

export function addCharacter(props) {
  return updateWithUserDataStorage(innerAddCharacter, props, LOCALSTORAGE_KEYS.CHARACTER, 'character');
}

export function deleteCharacter(props) {
  return updateWithUserDataStorage(innerDeleteCharacter, props, LOCALSTORAGE_KEYS.CHARACTER, 'character');
}

export function renameCharacter(props) {
  return updateWithUserDataStorage(innerRenameCharacter, props, LOCALSTORAGE_KEYS.CHARACTER, 'character');
}

export function load(props) {
  return updateWithUserDataStorage(innerLoad, props, LOCALSTORAGE_KEYS.CHARACTER, 'character');
}

export function reset(props) {
  return updateWithUserDataStorage(innerReset, props, LOCALSTORAGE_KEYS.CHARACTER, 'character');
}

export const { updateHiscores } = characterSlice.actions;

export default characterSlice.reducer;
