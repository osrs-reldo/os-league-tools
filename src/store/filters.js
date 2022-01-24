/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';
import { STATS } from '../data/constants';

const CURRENT_VERSION = 5;
const INITIAL_STATE = {
    version: CURRENT_VERSION,
    tasks: {
        status: 'all',
        todo: 'all',
        ignored: 'hide',
        difficulty: null,
        categories: null,
        subcategories: null,
        skills: Object.keys(STATS),
        reorderEnabled: false,
        showNoRequirements: true,
        showUnmetRequirements: true,
    },
    quests: { status: 'all', difficulty: null, length: null, skills: null },
};

export const filterSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,
    reducers: {
        updateTaskFilter: (state, action) => {
            state.tasks[action.payload.field] = action.payload.value;
        },
        updateQuestFilter: (state, action) => {
            state.quests[action.payload.field] = action.payload.value;
        },
        reset: () => INITIAL_STATE,
    },
});

export const loadState = () => {
    const prevState = getFromLocalStorage(LOCALSTORAGE_KEYS.FILTER_STATE, INITIAL_STATE);
    if (prevState && prevState.version < CURRENT_VERSION) {
        // Clear data from old versions
        return INITIAL_STATE;
    }
    return prevState;
};

export const { updateTaskFilter, updateQuestFilter, reset } = filterSlice.actions;

export default filterSlice.reducer;
