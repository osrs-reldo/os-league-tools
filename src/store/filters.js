/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';
import { getCategoriesForStore } from '../data/categories';
import { STATS, DIFFICULTY, DIARY_LOCATIONS, DIARY_DIFFICULTY } from '../data/constants';
import { QUEST_DIFFICULTY, QUEST_LENGTH } from '../data/quests';
import { LEAGUES_REGIONS } from '../data/regions';
import { REGION_ANY } from '../data/tasks';

const CURRENT_VERSION = 22;

const mapDataValues = values => Object.values(values).map(({ label }) => label);

const INITIAL_TASK_STATE = {
  status: 'all',
  todo: 'all',
  ignored: 'hide',
  difficulty: mapDataValues(DIFFICULTY),
  categories: getCategoriesForStore(),
  regions: [...mapDataValues(LEAGUES_REGIONS), REGION_ANY],
  skills: Object.keys(STATS),
  reorderEnabled: false,
  showNoRequirements: true,
  showUnmetRequirements: true,
  showIncompletePrereqs: true,
  isProductionProdigy: false,
};

const INITIAL_QUEST_STATE = {
  status: 'all',
  requirements: 'all',
  difficulty: mapDataValues(QUEST_DIFFICULTY),
  length: mapDataValues(QUEST_LENGTH),
  regions: mapDataValues(LEAGUES_REGIONS),
  skills: null,
};

const INITIAL_DIARIES_STATE = {
  status: 'all',
  requirements: 'all',
  difficulty: mapDataValues(DIARY_DIFFICULTY),
  location: mapDataValues(DIARY_LOCATIONS),
  skills: null,
};

const INITIAL_CALCULATORS_STATE = {
  regions: mapDataValues(LEAGUES_REGIONS),
  categories: {},
  isProductionProdigy: false,
};

const INITIAL_STATE = {
  version: CURRENT_VERSION,
  tasks: INITIAL_TASK_STATE,
  quests: INITIAL_QUEST_STATE,
  diaries: INITIAL_DIARIES_STATE,
  calculators: INITIAL_CALCULATORS_STATE,
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
    updateDiariesFilter: (state, action) => {
      state.diaries[action.payload.field] = action.payload.value;
    },
    updateCalculatorsFilter: (state, action) => {
      if (action.payload.subfield) {
        state.calculators[action.payload.field][action.payload.subfield] = action.payload.value;
      } else {
        state.calculators[action.payload.field] = action.payload.value;
      }
    },
    resetTasks: state => ({
      ...state,
      tasks: INITIAL_TASK_STATE,
    }),
    resetQuests: state => ({
      ...state,
      quests: INITIAL_QUEST_STATE,
    }),
    resetDiaries: state => ({
      ...state,
      diaries: INITIAL_DIARIES_STATE,
    }),
    resetCalculators: state => ({
      ...state,
      calculators: INITIAL_CALCULATORS_STATE,
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
  updateDiariesFilter,
  updateCalculatorsFilter,
  resetTasks,
  resetQuests,
  resetDiaries,
  resetCalculators,
  reset,
} = filterSlice.actions;

export default filterSlice.reducer;
