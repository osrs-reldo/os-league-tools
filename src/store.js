import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import { updateLocalStorage, LOCALSTORAGE_KEYS } from './client/localstorage-client';
import filterReducer, { loadState as loadFilterState } from './store/filters';
import userReducer, { loadState as loadUserState } from './store/userData';
import settingsReducer, { loadState as loadSettingsState } from './store/settings';
import tasksReducer, { loadState as loadTasksState } from './store/tasks/tasks';
import tempReducer, { loadState as loadTempState } from './store/temp';
import unlocksReducer, { loadState as loadUnlocksState } from './store/unlocks/unlocks';
import characterReducer, { loadState as loadCharacterState } from './store/character/character';

const reducer = {
    filters: filterReducer,
    user: userReducer,
    settings: settingsReducer,
    tasks: tasksReducer,
    unlocks: unlocksReducer,
    character: characterReducer,
    temp: tempReducer,
};

const preloadedState = {
    filters: loadFilterState(),
    user: loadUserState(),
    settings: loadSettingsState(),
    tasks: loadTasksState(),
    unlocks: loadUnlocksState(),
    character: loadCharacterState(),
    temp: loadTempState(),
};

const store = configureStore({
    reducer,
    preloadedState,
    middleware: [thunk],
});

store.subscribe(
    throttle(() => {
        updateLocalStorage(LOCALSTORAGE_KEYS.FILTER_STATE, store.getState().filters);
        updateLocalStorage(LOCALSTORAGE_KEYS.USER_DATA, store.getState().user);
        updateLocalStorage(LOCALSTORAGE_KEYS.SETTINGS, store.getState().settings);
        updateLocalStorage(LOCALSTORAGE_KEYS.TASKS, store.getState().tasks);
        updateLocalStorage(LOCALSTORAGE_KEYS.UNLOCKS, store.getState().unlocks);
        updateLocalStorage(LOCALSTORAGE_KEYS.CHARACTER, store.getState().character);
    }, 200)
);

export default store;
