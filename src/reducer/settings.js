/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';

const INITIAL_STATE = {
    version: 1,
    limitContentWidth: true,
    mode: 'dark',
    theme: 'tl-dark',
};

export const userSlice = createSlice({
    name: 'settings',
    initialState: INITIAL_STATE,
    reducers: {
        update: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
        reset: () => {
            return INITIAL_STATE;
        },
    },
});

export const loadState = () => getFromLocalStorage(LOCALSTORAGE_KEYS.SETTINGS, INITIAL_STATE);

export const { update, reset } = userSlice.actions;

export default userSlice.reducer;
