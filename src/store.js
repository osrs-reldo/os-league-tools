import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import { updateLocalStorage, LOCALSTORAGE_KEYS } from './client/localstorage-client';
import filterReducer, { loadState as loadFilterState } from './store/filters';
import settingsReducer, { loadState as loadSettingsState } from './store/settings/settings';
import tasksReducer, { loadState as loadTasksState } from './store/tasks/tasks';
import unlocksReducer, { loadState as loadUnlocksState } from './store/unlocks/unlocks';
import characterReducer, { loadState as loadCharacterState, selectActiveCharacter } from './store/user/character';
import accountReducer, { loadState as loadAccountState } from './store/user/account';
import calculatorsReducer, { loadState as loadCalculatorsState } from './store/calculators/calculators';

const reducer = {
  filters: filterReducer,
  settings: settingsReducer,
  tasks: tasksReducer,
  unlocks: unlocksReducer,
  character: characterReducer,
  account: accountReducer,
  calculators: calculatorsReducer,
};

const preloadedState = {
  filters: loadFilterState(),
  settings: loadSettingsState(),
  tasks: loadTasksState(),
  unlocks: loadUnlocksState(),
  character: loadCharacterState(),
  account: loadAccountState(),
  calculators: loadCalculatorsState(),
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
    updateLocalStorage(`${LOCALSTORAGE_KEYS.TASKS}_${selectActiveCharacter(store.getState())}`, store.getState().tasks);
    updateLocalStorage(
      `${LOCALSTORAGE_KEYS.UNLOCKS}_${selectActiveCharacter(store.getState())}`,
      store.getState().unlocks
    );
    updateLocalStorage(LOCALSTORAGE_KEYS.CHARACTER, store.getState().character);
    updateLocalStorage(LOCALSTORAGE_KEYS.ACCOUNT, store.getState().account);
    updateLocalStorage(LOCALSTORAGE_KEYS.CALCULATORS, store.getState().calculators);
  }, 200)
);

export default store;
