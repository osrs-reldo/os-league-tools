/* Eslint doesn't play nicely with some of the behind-the-scenes immutable updates happening in the redux toolkit */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';

const INITIAL_STATE = {
    version: 1,
    sortBy: null,
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
        reset: state => {
            state = INITIAL_STATE;
        },
        load: (state, action) => {
            state = action.payload;
        },
    },
});

export const loadState = () => getFromLocalStorage(LOCALSTORAGE_KEYS.FILTER_STATE, INITIAL_STATE);

export const { update, reset, load } = filterSlice.actions;

export default filterSlice.reducer;
