/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../../client/localstorage-client';
import updateWithUserDataStorage from '../updateWithUserDataStorage';
import { INITIAL_STATE } from './constants';
import updateSettingsVersion from './updateSettingsVersion';

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: INITIAL_STATE,
  reducers: {
    update: (state, action) => {
      if (action.payload.subfield) {
        state[action.payload.field][action.payload.subfield] = action.payload.value;
      } else {
        state[action.payload.field] = action.payload.value;
      }
    },
    load: (state, action) => {
      const fallbackState = action.payload.forceOverwrite ? INITIAL_STATE : state;
      return updateSettingsVersion({
        ...fallbackState,
        ...action.payload.newState,
      });
    },
    reset: () => INITIAL_STATE,
  },
});

const { update: innerUpdate, load: innerLoad, reset: innerReset } = settingsSlice.actions;

export function update(props) {
  return updateWithUserDataStorage(innerUpdate, props, LOCALSTORAGE_KEYS.SETTINGS, 'settings');
}

export function load(props) {
  return updateWithUserDataStorage(innerLoad, props, LOCALSTORAGE_KEYS.SETTINGS, 'settings');
}

export function reset(props) {
  return updateWithUserDataStorage(innerReset, props, LOCALSTORAGE_KEYS.SETTINGS, 'settings');
}

export const loadState = () => {
  const prevState = getFromLocalStorage(LOCALSTORAGE_KEYS.SETTINGS, INITIAL_STATE);
  return updateSettingsVersion(prevState);
};

export default settingsSlice.reducer;
