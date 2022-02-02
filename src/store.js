import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import { updateLocalStorage, LOCALSTORAGE_KEYS } from './client/localstorage-client';
import filterReducer, { loadState as loadFilterState } from './store/filters';
import settingsReducer, { loadState as loadSettingsState } from './store/settings';
import tasksReducer, { loadState as loadTasksState } from './store/tasks/tasks';
import unlocksReducer, { loadState as loadUnlocksState } from './store/unlocks/unlocks';
import characterReducer, { loadState as loadCharacterState } from './store/character/character';
import fragmentReducer, { loadState as loadFragmentState } from './store/fragments/fragments';

const reducer = {
    filters: filterReducer,
    settings: settingsReducer,
    tasks: tasksReducer,
    unlocks: unlocksReducer,
    character: characterReducer,
    fragments: fragmentReducer,
};

const preloadedState = {
    filters: loadFilterState(),
    settings: loadSettingsState(),
    tasks: loadTasksState(),
    unlocks: loadUnlocksState(),
    character: loadCharacterState(),
    fragments: loadFragmentState(),
};

const store = configureStore({
    reducer,
    preloadedState,
    middleware: [thunk],
});

store.subscribe(
    throttle(() => {
        updateLocalStorage(LOCALSTORAGE_KEYS.FILTER_STATE, store.getState().filters);
        updateLocalStorage(LOCALSTORAGE_KEYS.SETTINGS, store.getState().settings);
        updateLocalStorage(LOCALSTORAGE_KEYS.TASKS, store.getState().tasks);
        updateLocalStorage(LOCALSTORAGE_KEYS.UNLOCKS, store.getState().unlocks);
        updateLocalStorage(LOCALSTORAGE_KEYS.CHARACTER, store.getState().character);
        updateLocalStorage(LOCALSTORAGE_KEYS.FRAGMENTS, store.getState().fragments);
    }, 200)
);

export default store;
