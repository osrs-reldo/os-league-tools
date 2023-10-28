import { deleteFromLocalStorage } from '../../client/localstorage-client';
import { CURRENT_VERSION, INITIAL_STATE } from './constants';

const TRAILBLAZER_RELOADED_MIN_VERSION = 8;

const versionUpdaters = {
  8: updateToV8,
};

export default function updateTasksVersion(taskState) {
  if (taskState.version >= CURRENT_VERSION) {
    return taskState;
  }

  let updatedState = taskState;
  Object.keys(versionUpdaters).forEach(version => {
    if (updatedState.version < version) {
      updatedState = versionUpdaters[version](updatedState);
    }
  });
  return updatedState;
}

function updateToV8(state) {
  if (state.version >= TRAILBLAZER_RELOADED_MIN_VERSION) {
    return state;
  }

  // TODO update this list
  // Storage contains old data from last league, reset it and clean up other stale fields
  [
    // 'contentWidth',
    // 'filterHideLocked',
    // 'filterHideTodoTasks',
    // 'filterShowHiddenTasks',
    // 'hideAlertBanner',
    // 'unlockedRegions',
    // 'unlockedRelics',
    // 'tasks',
  ].forEach(staleStorageField => deleteFromLocalStorage(staleStorageField));
  return INITIAL_STATE;
}
