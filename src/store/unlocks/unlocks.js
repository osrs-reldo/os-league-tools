/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../../client/localstorage-client';
import { INITIAL_STATE } from './constants';
import updateUnlocksVersion from './updateUnlocksVersion';

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
            const { label, isGroupedWith } = action.payload.boss;
            state.bosses = _.without(state.bosses, label, ...isGroupedWith);
        },
        unlockBoss: (state, action) => {
            const { label, isGroupedWith } = action.payload.boss;
            state.bosses = [...state.bosses, label, ...isGroupedWith];
        },
        updateQuest: (state, action) => {
            state.quests = {
                ...state.quests,
                [action.payload.id]: action.payload.status,
            };
        },
        load: (state, action) => {
            const fallbackState = action.payload.forceOverwrite ? INITIAL_STATE : state;
            return updateUnlocksVersion({
                ...fallbackState,
                ...action.payload.newState,
            });
        },
        reset: () => INITIAL_STATE,
    },
});

export const loadState = () => {
    const prevState = getFromLocalStorage(LOCALSTORAGE_KEYS.UNLOCKS, INITIAL_STATE);
    return updateUnlocksVersion(prevState);
};

export const { lockSkill, unlockSkill, lockBoss, unlockBoss, updateQuest, load, reset } = unlocksSlice.actions;

export default unlocksSlice.reducer;
