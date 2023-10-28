/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../../client/localstorage-client';
import updateWithUserDataStorage from '../updateWithUserDataStorage';
import { INITIAL_STATE } from './constants';
import updateUnlocksVersion from './updateUnlocksVersion';
import { loadState as loadCharacterState } from '../user/character';

export const unlocksSlice = createSlice({
  name: 'unlocks',
  initialState: INITIAL_STATE,
  reducers: {
    updateQuest: (state, action) => {
      state.quests = {
        ...state.quests,
        [action.payload.id]: action.payload.status,
      };
    },
    updateDiary: (state, action) => {
      state.diaries = {
        ...state.diaries,
        [action.payload.id]: action.payload.status,
      };
    },
    load: (state, action) => {
      const fallbackState = action.payload.forceOverwrite ? INITIAL_STATE : state;
      return updateUnlocksVersion({
        ...fallbackState,
        ...action.payload.newState,
      });
    },
    reset: () => INITIAL_STATE,
  },
});

const {
  updateQuest: innerUpdateQuest,
  updateQuest: innerUpdateDiary,
  load: innerLoad,
  reset: innerReset,
} = unlocksSlice.actions;

export function updateQuest(props) {
  return updateWithUserDataStorage(innerUpdateQuest, props, LOCALSTORAGE_KEYS.UNLOCKS, 'unlocks');
}

export function updateDiary(props) {
  return updateWithUserDataStorage(innerUpdateDiary, props, LOCALSTORAGE_KEYS.UNLOCKS, 'unlocks');
}

export function load(props) {
  return updateWithUserDataStorage(innerLoad, props, LOCALSTORAGE_KEYS.UNLOCKS, 'unlocks');
}

export function reset(props) {
  return updateWithUserDataStorage(innerReset, props, LOCALSTORAGE_KEYS.UNLOCKS, 'unlocks');
}

export const loadState = () => {
  const prevCharacterState = loadCharacterState();
  const prevState = getFromLocalStorage(
    `${LOCALSTORAGE_KEYS.UNLOCKS}_${prevCharacterState.characters[prevCharacterState.activeCharacter] ?? 'DEFAULT'}`,
    INITIAL_STATE
  );
  return updateUnlocksVersion(prevState);
};

export default unlocksSlice.reducer;
