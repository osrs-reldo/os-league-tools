/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';
import { getCategoriesForStore } from '../data/categories';
import { STATS, DIFFICULTY, QUEST_DIFFICULTY, QUEST_LENGTH } from '../data/constants';
import { ACTIVITIES, SETS, TAGS } from '../data/relics';

const CURRENT_VERSION = 9;

const mapDataValues = values => Object.values(values).map(({ label }) => label);

const INITIAL_TASK_STATE = {
    status: 'all',
    todo: 'all',
    ignored: 'hide',
    difficulty: mapDataValues(DIFFICULTY),
    categories: getCategoriesForStore(),
    skills: Object.keys(STATS),
    reorderEnabled: false,
    showNoRequirements: true,
    showUnmetRequirements: true,
    isUnchainedTalent: false,
};

const INITIAL_QUEST_STATE = {
    status: 'all',
    difficulty: mapDataValues(QUEST_DIFFICULTY),
    length: mapDataValues(QUEST_LENGTH),
    skills: null,
};

const INITIAL_FRAGMENT_STATE = {
    status: 'all',
    levels: 'all',
    activities: mapDataValues(ACTIVITIES),
    tags: mapDataValues(TAGS),
    sets: mapDataValues(SETS),
};

const INITIAL_STATE = {
    version: CURRENT_VERSION,
    tasks: INITIAL_TASK_STATE,
    quests: INITIAL_QUEST_STATE,
    fragments: INITIAL_FRAGMENT_STATE,
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
        updateFragmentFilter: (state, action) => {
            state.fragments[action.payload.field] = action.payload.value;
        },
        resetTasks: state => ({
            ...state,
            tasks: INITIAL_TASK_STATE,
        }),
        resetQuests: state => ({
            ...state,
            quests: INITIAL_QUEST_STATE,
        }),
        resetFragments: state => ({
            ...state,
            quests: INITIAL_QUEST_STATE,
        }),
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

export const {
    updateTaskFilter,
    updateQuestFilter,
    updateFragmentFilter,
    resetTasks,
    resetQuests,
    resetFragments,
    reset,
} = filterSlice.actions;

export default filterSlice.reducer;
