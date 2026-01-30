import { CURRENT_VERSION, INITIAL_STATE } from './constants';

const RAGING_ECHOES_MIN_VERSION = 9;

const versionUpdaters = {
  9: updateToV9,
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

function updateToV9(state) {
  if (state.version >= RAGING_ECHOES_MIN_VERSION) {
    return state;
  }
  return INITIAL_STATE;
}
