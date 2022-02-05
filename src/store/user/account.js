/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    accountCache: {
        isLoggedIn: false,
    },
};

export const accountSlice = createSlice({
    name: 'account',
    initialState: INITIAL_STATE,
    reducers: {
        updateAccountCache: (state, action) => {
            state.accountCache.isLoggedIn = action.payload.isAuthenticated;
        },
    },
});

// Don't cache anything across sessions, let auth0 handle it
export const loadState = () => INITIAL_STATE;

export const { updateAccountCache } = accountSlice.actions;

export default accountSlice.reducer;
