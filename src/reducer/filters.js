/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';

const INITIAL_STATE = {
    version: 1,
    status: 'all',
    todo: 'all',
    ignored: 'hide',
    difficulty: null,
    categories: null,
    subcategories: null,
    skills: null,
};

export const filterSlice = createSlice({
    name: 'filters',
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

export const loadState = () => getFromLocalStorage(LOCALSTORAGE_KEYS.FILTER_STATE, INITIAL_STATE);

export const { update, reset } = filterSlice.actions;

export default filterSlice.reducer;
