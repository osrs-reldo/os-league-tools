/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, deleteFromLocalStorage, LOCALSTORAGE_KEYS } from '../client/localstorage-client';

const SHATTERED_RELICS_MIN_VERSION = 4;
const CURRENT_VERSION = 4;
const INITIAL_STATE = {
    version: CURRENT_VERSION,
    rsn: null,
    tasks: {},
};

export const INITIAL_TASK_STATE = {
    completed: null,
    todo: null,
    ignored: null,
    order: null,
    notes: null,
    lastUpdated: null,
};

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
            // eslint-disable-next-line no-console
            console.log('received dispatch');
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
    if (prevState && prevState.version < SHATTERED_RELICS_MIN_VERSION) {
        // Storage contains old data from last league, reset it and clean up other stale fields
        deleteFromLocalStorage('contentWidth');
        deleteFromLocalStorage('filterHideLocked');
        deleteFromLocalStorage('filterHideTodoTasks');
        deleteFromLocalStorage('filterShowHiddenTasks');
        deleteFromLocalStorage('hideAlertBanner');
        deleteFromLocalStorage('unlockedRegions');
        deleteFromLocalStorage('unlockedRelics');
        deleteFromLocalStorage('tasks');
        return INITIAL_STATE;
    }
    return prevState;
};

export const { toggleTodo, toggleIgnored, toggleCompleted, updateNotes, updateOrder, reset } = taskSlice.actions;

export function selectTask(state, taskId) {
    return state.tasks.tasks[taskId] || { ...INITIAL_TASK_STATE };
}

export default taskSlice.reducer;
