/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import getHiscores from '../../client/hiscores-client';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../../client/localstorage-client';
import updateWithUserDataStorage from '../updateWithUserDataStorage';

const HISCORES_TTL = 1800000; // 30 min in ms

const INITIAL_HISCORES_STATE = {
  lastUpdated: 0,
  loading: false,
  data: null,
  error: null,
};
const INITIAL_STATE = {
  version: 1,
  username: null,
  hiscoresCache: INITIAL_HISCORES_STATE,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState: INITIAL_STATE,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
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

export const loadState = () => getFromLocalStorage(LOCALSTORAGE_KEYS.CHARACTER, INITIAL_STATE);

export function fetchHiscores(state, forceReload = false) {
  if (!state.username) {
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
    getHiscores(state.username, result => {
      if (result.success) {
        dispatch(characterSlice.actions.updateHiscores({ type: 'SUCCESS', value: result.hiscores }));
      } else {
        dispatch(characterSlice.actions.updateHiscores({ type: 'ERROR', value: result.message }));
      }
    });
  };
}

const { updateUsername: innerUpdateUsername, load: innerLoad } = characterSlice.actions;

export function updateUsername(props) {
  return updateWithUserDataStorage(innerUpdateUsername, props, LOCALSTORAGE_KEYS.CHARACTER, 'character');
}

export function load(props) {
  return updateWithUserDataStorage(innerLoad, props, LOCALSTORAGE_KEYS.CHARACTER, 'character');
}

export const { updateHiscores, reset } = characterSlice.actions;

export default characterSlice.reducer;
