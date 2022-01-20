/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';

const DEFAULT_UNLOCKED_SKILLS = ['Defence', 'Thieving', 'Fishing'];
const DEFAULT_UNLOCKED_BOSSES = [
    'Callisto',
    'Chaos Elemental',
    'Chaos Fanatic',
    'Crazy Archaeologist',
    'Scorpia',
    'Venenatis',
    "Vet'ion",
];

const INITIAL_STATE = {
    version: 1,
    skills: DEFAULT_UNLOCKED_SKILLS,
    bosses: DEFAULT_UNLOCKED_BOSSES,
};

export const unlocksSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,
    reducers: {
        lockSkill: (state, action) => {
            state.skills = _.without(state.skills, action.payload.skill);
        },
        unlockSkill: (state, action) => {
            state.skills = [...state.skills, action.payload.skill];
        },
        lockBoss: (state, action) => {
            state.bosses = _.without(state.bosses, action.payload.boss);
        },
        unlockBoss: (state, action) => {
            state.bosses = [...state.bosses, action.payload.boss];
        },
        reset: () => INITIAL_STATE,
    },
});

export const loadState = () => getFromLocalStorage(LOCALSTORAGE_KEYS.UNLOCKS, INITIAL_STATE);

export const { lockSkill, unlockSkill, lockBoss, unlockBoss, reset } = unlocksSlice.actions;

export default unlocksSlice.reducer;
