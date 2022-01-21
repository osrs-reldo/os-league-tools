/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Generic reducer for any temporary state vars, will not be maintained across sessions
export const tempSlice = createSlice({
    name: 'temp',
    initialState: {},
    reducers: {
        setTempField: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
        clearTempField: (state, action) => {
            state[action.payload.field] = null;
        },
    },
});

export const loadState = () => ({});

export const { setTempField, clearTempField } = tempSlice.actions;

export function selectTempField(state, field, defaultVal) {
    return state.temp[field] || defaultVal;
}

export default tempSlice.reducer;
