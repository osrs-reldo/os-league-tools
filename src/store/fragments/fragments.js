/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../../client/localstorage-client';
import updateWithUserDataStorage from '../updateWithUserDataStorage';
import { CURRENT_VERSION } from './constants';
import updateFragmentsVersion from './updateFragmentsVersion';

const INITIAL_STATE = {
  version: CURRENT_VERSION,
  fragments: {},
};

export const INITIAL_FRAGMENT_STATE = {
  unlocked: false,
  level: 0,
  lastUpdated: null,
};

export const fragmentSlice = createSlice({
  name: 'fragments',
  initialState: INITIAL_STATE,
  reducers: {
    setFragmentUnlocked: (state, action) => {
      const { id } = action.payload;
      if (!state.fragments[id]) {
        state.fragments[id] = { ...INITIAL_FRAGMENT_STATE };
      }
      state.fragments[id].unlocked = action.payload.unlocked;
      state.fragments[id].lastUpdated = Date.now();
    },
    setFragmentLevel: (state, action) => {
      const { id } = action.payload;
      if (!state.fragments[id]) {
        state.fragments[id] = { ...INITIAL_FRAGMENT_STATE };
      }
      state.fragments[id].level = action.payload.level;
      state.fragments[id].lastUpdated = Date.now();
    },
    toggleFragment: (state, action) => {
      // Cycle: locked -> lv1 -> lv2 -> lv3 -> locked
      const { id } = action.payload;
      if (!state.fragments[id] || !state.fragments[id].unlocked) {
        state.fragments[id] = { level: 1, unlocked: true, lastUpdated: Date.now() };
      } else {
        state.fragments[id].level = (state.fragments[id].level + 1) % 4;
        state.fragments[id].unlocked = state.fragments[id].level > 0;
        state.fragments[id].lastUpdated = Date.now();
      }
    },
    load: (state, action) => {
      const fallbackState = action.payload.forceOverwrite ? INITIAL_STATE : state;
      return updateFragmentsVersion({
        ...fallbackState,
        ...action.payload.newState,
      });
    },
    reset: () => INITIAL_STATE,
  },
});

const {
  setFragmentUnlocked: innerSetFragmentUnlocked,
  setFragmentLevel: innerSetFragmentLevel,
  toggleFragment: innerToggleFragment,
  load: innerLoad,
} = fragmentSlice.actions;

export function setFragmentUnlocked(props) {
  return updateWithUserDataStorage(innerSetFragmentUnlocked, props, LOCALSTORAGE_KEYS.FRAGMENTS, 'fragments');
}

export function setFragmentLevel(props) {
  return updateWithUserDataStorage(innerSetFragmentLevel, props, LOCALSTORAGE_KEYS.FRAGMENTS, 'fragments');
}

export function toggleFragment(props) {
  return updateWithUserDataStorage(innerToggleFragment, props, LOCALSTORAGE_KEYS.FRAGMENTS, 'fragments');
}

export function load(props) {
  return updateWithUserDataStorage(innerLoad, props, LOCALSTORAGE_KEYS.FRAGMENTS, 'fragments');
}

export function selectFragment(state, id) {
  return state.fragments.fragments[id] || { ...INITIAL_FRAGMENT_STATE };
}

export const loadState = () => updateFragmentsVersion(getFromLocalStorage(LOCALSTORAGE_KEYS.FRAGMENTS, INITIAL_STATE));

export const { reset } = fragmentSlice.actions;

export default fragmentSlice.reducer;
