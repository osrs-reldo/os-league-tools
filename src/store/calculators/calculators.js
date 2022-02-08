/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../../client/localstorage-client';
import calculatorData from '../../data/calculatorData.json';
import { levelToExperience } from '../../util/xpAndLevelConversions';

const CURRENT_VERSION = 1;

export const DEFAULT_CALCULATOR_EXP_VALUES = Object.freeze({
    start: {
        level: 1,
        xp: levelToExperience(1),
        mode: 'xp',
    },
    target: {
        level: 2,
        xp: levelToExperience(2),
        mode: 'level',
    },
});

const INITIAL_STATE = {
    skill: calculatorData.skills[0],
    expValues: DEFAULT_CALCULATOR_EXP_VALUES,
};

const calculatorsSlice = createSlice({
    name: 'calculators',
    initialState: INITIAL_STATE,
    reducers: {
        updateCalculatorsSkill: (state, action) => {
            state.skill = action.payload.skill;
        },
        updateSingleCalculatorsExpValue: (state, action) => {
            const { xp, level, type } = action.payload;
            state.expValues[type] = {
                ...state.expValues[type],
                xp,
                level,
            };
        },
        updateCalculatorsExpValues: (state, action) => {
            const { start, target } = action.payload;
            if (!start || !target) {
                throw new Error('You need to provide both start and target XP value objects 😠');
            }
            state.expValues = {
                ...action.payload,
            };
        },
        updateCalculatorsMode: (state, action) => {
            const { mode, type } = action.payload;
            state.expValues[type].mode = mode;
        },
        reset: () => INITIAL_STATE,
    },
});

export const loadState = () => {
    const prevState = getFromLocalStorage(LOCALSTORAGE_KEYS.CALCULATORS, INITIAL_STATE);
    if (prevState && prevState.version < CURRENT_VERSION) {
        // Clear data from old version
        return INITIAL_STATE;
    }
    return prevState;
};

export const {
    updateCalculatorsSkill,
    updateCalculatorsExpValues,
    updateSingleCalculatorsExpValue,
    updateCalculatorsMode,
    reset,
} = calculatorsSlice.actions;

export default calculatorsSlice.reducer;
