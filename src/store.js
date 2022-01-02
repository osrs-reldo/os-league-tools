import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import { updateLocalStorage, LOCALSTORAGE_KEYS } from './client/localstorage-client';
import filterReducer, { loadState as loadFilterState } from './reducer/filters';
import userReducer, { loadState as loadUserState } from './reducer/userData';

const reducer = {
    filters: filterReducer,
    user: userReducer,
};

const preloadedState = {
    filters: loadFilterState(),
    user: loadUserState(),
};

const store = configureStore({
    reducer,
    preloadedState,
});

store.subscribe(
    throttle(() => {
        updateLocalStorage(LOCALSTORAGE_KEYS.FILTER_STATE, store.getState().filters);
        updateLocalStorage(LOCALSTORAGE_KEYS.USER_DATA, store.getState().user);
    }, 500)
);

export default store;
