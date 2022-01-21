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
        reset: () => INITIAL_STATE,
    },
});

export const loadState = () => getFromLocalStorage(LOCALSTORAGE_KEYS.USER_DATA, INITIAL_STATE);

export const { update, reset } = userSlice.actions;

export default userSlice.reducer;
