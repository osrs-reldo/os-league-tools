/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../../client/localstorage-client';
import calculateTaskStats from '../../util/calculateTaskStats';
import { getTier } from '../../util/getTier';
import updateWithUserDataStorage from '../updateWithUserDataStorage';
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
      state.taskStats = calculateTaskStats(state.tasks);
      state.tier = getTier(state.taskStats.points.complete.total);
    },
    toggleIgnored: (state, action) => {
      if (!state.tasks[action.payload.taskId]) {
        state.tasks[action.payload.taskId] = { ...INITIAL_TASK_STATE };
      }
      const newVal = state.tasks[action.payload.taskId].ignored === null ? Date.now() : null;
      state.tasks[action.payload.taskId].ignored = newVal;
      state.tasks[action.payload.taskId].lastUpdated = Date.now();
      state.taskStats = calculateTaskStats(state.tasks);
      state.tier = getTier(state.taskStats.points.complete.total);
    },
    toggleCompleted: (state, action) => {
      if (!state.tasks[action.payload.taskId]) {
        state.tasks[action.payload.taskId] = { ...INITIAL_TASK_STATE };
      }
      const newVal = state.tasks[action.payload.taskId].completed === null ? Date.now() : null;
      state.tasks[action.payload.taskId].completed = newVal;
      state.tasks[action.payload.taskId].todo = null;
      state.tasks[action.payload.taskId].lastUpdated = Date.now();
      state.taskStats = calculateTaskStats(state.tasks);
      state.tier = getTier(state.taskStats.points.complete.total);
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
    updateRandomTask: (state, action) => {
      const taskId = action.payload || null;
      state.randomTaskId = taskId;
    },
    load: (state, action) => {
      const fallbackState = action.payload.forceOverwrite ? INITIAL_STATE : state;
      const loadedState = updateTasksVersion({
        ...fallbackState,
        ...action.payload.newState,
      });
      loadedState.taskStats = calculateTaskStats(loadedState.tasks);
      loadedState.tier = getTier(loadedState.taskStats.points.complete.total);
      return loadedState;
    },
    reset: () => INITIAL_STATE,
  },
});

const {
  toggleTodo: innerToggleTodo,
  toggleIgnored: innerToggleIgnored,
  toggleCompleted: innerToggleCompleted,
  updateNotes: innerUpdateNotes,
  updateOrder: innerUpdateOrder,
  updateRandomTask: innerUpdateRandomTask,
  load: innerLoad,
  reset: innerReset,
} = taskSlice.actions;

export function toggleTodo(props) {
  return updateWithUserDataStorage(innerToggleTodo, props, LOCALSTORAGE_KEYS.TASKS, 'tasks');
}

export function toggleIgnored(props) {
  return updateWithUserDataStorage(innerToggleIgnored, props, LOCALSTORAGE_KEYS.TASKS, 'tasks');
}

export function toggleCompleted(props) {
  return updateWithUserDataStorage(innerToggleCompleted, props, LOCALSTORAGE_KEYS.TASKS, 'tasks');
}

export function updateNotes(props) {
  return updateWithUserDataStorage(innerUpdateNotes, props, LOCALSTORAGE_KEYS.TASKS, 'tasks');
}

export function updateOrder(props) {
  return updateWithUserDataStorage(innerUpdateOrder, props, LOCALSTORAGE_KEYS.TASKS, 'tasks');
}

export function updateRandomTask(props) {
  return updateWithUserDataStorage(innerUpdateRandomTask, props, LOCALSTORAGE_KEYS.TASKS, 'tasks');
}

export function load(props) {
  return updateWithUserDataStorage(innerLoad, props, LOCALSTORAGE_KEYS.TASKS, 'tasks');
}

export function reset(props) {
  return updateWithUserDataStorage(innerReset, props, LOCALSTORAGE_KEYS.TASKS, 'tasks');
}

export const loadState = () => {
  const prevState = getFromLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_STATE);
  return updateTasksVersion(prevState);
};

export function selectTask(state, taskId) {
  return state.tasks.tasks[taskId] || { ...INITIAL_TASK_STATE };
}

export default taskSlice.reducer;
