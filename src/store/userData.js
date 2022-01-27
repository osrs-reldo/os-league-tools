/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';

const INITIAL_STATE = {
    version: 1,
    username: null,
    taskOrder: null, // TODO
};

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        update: (state, action) => {
            state[action.payload.field] = action.payload.value;
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

export const loadState = () => getFromLocalStorage(LOCALSTORAGE_KEYS.USER_DATA, INITIAL_STATE);

export const { update, load, reset } = userSlice.actions;

export default userSlice.reducer;
