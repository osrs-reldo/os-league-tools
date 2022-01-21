/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../../client/localstorage-client';
import { INITIAL_STATE, INITIAL_TASK_STATE } from './constants';
import updateTasksVersion from './updateTasksVersion';

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: INITIAL_STATE,
    reducers: {
        toggleTodo: (state, action) => {
            if (!state.tasks[action.payload.taskId]) {
                state.tasks[action.payload.taskId] = { ...INITIAL_TASK_STATE };
            }
            const newVal = state.tasks[action.payload.taskId].todo === null ? Date.now() : null;
            state.tasks[action.payload.taskId].todo = newVal;
            state.tasks[action.payload.taskId].lastUpdated = Date.now();
        },
        toggleIgnored: (state, action) => {
            if (!state.tasks[action.payload.taskId]) {
                state.tasks[action.payload.taskId] = { ...INITIAL_TASK_STATE };
            }
            const newVal = state.tasks[action.payload.taskId].ignored === null ? Date.now() : null;
            state.tasks[action.payload.taskId].ignored = newVal;
            state.tasks[action.payload.taskId].lastUpdated = Date.now();
        },
        toggleCompleted: (state, action) => {
            if (!state.tasks[action.payload.taskId]) {
                state.tasks[action.payload.taskId] = { ...INITIAL_TASK_STATE };
            }
            const newVal = state.tasks[action.payload.taskId].completed === null ? Date.now() : null;
            state.tasks[action.payload.taskId].completed = newVal;
            state.tasks[action.payload.taskId].lastUpdated = Date.now();
        },
        updateNotes: (state, action) => {
            const newNotesValue = action.payload.notes || null;
            if (state.tasks[action.payload.taskId]) {
                state.tasks[action.payload.taskId].notes = newNotesValue;
                state.tasks[action.payload.taskId].lastUpdated = Date.now();
            } else {
                const newTaskState = {
                    ...INITIAL_TASK_STATE,
                    notes: newNotesValue,
                    lastUpdated: Date.now(),
                };
                state.tasks[action.payload.taskId] = newTaskState;
            }
        },
        updateOrder: (state, action) => {
            const newOrderValue = action.payload.order || null;
            if (state.tasks[action.payload.taskId]) {
                state.tasks[action.payload.taskId].order = newOrderValue;
                state.tasks[action.payload.taskId].lastUpdated = Date.now();
            } else {
                const newTaskState = {
                    ...INITIAL_TASK_STATE,
                    order: newOrderValue,
                    lastUpdated: Date.now(),
                };
                state.tasks[action.payload.taskId] = newTaskState;
            }
        },
        reset: () => INITIAL_STATE,
    },
});

export const loadState = () => {
    const prevState = getFromLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_STATE);
    return updateTasksVersion(prevState);
};

export const { toggleTodo, toggleIgnored, toggleCompleted, updateNotes, updateOrder, reset } = taskSlice.actions;

export function selectTask(state, taskId) {
    return state.tasks.tasks[taskId] || { ...INITIAL_TASK_STATE };
}

export default taskSlice.reducer;
