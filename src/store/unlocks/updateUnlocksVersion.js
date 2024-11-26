import { CURRENT_VERSION, INITIAL_STATE } from './constants';

const versionUpdaters = {
  10: updateToV10,
};

export default function updateUnlocksVersion(state) {
  if (state.version >= CURRENT_VERSION) {
    return state;
  }

  let updatedState = state;
  Object.keys(versionUpdaters).forEach(version => {
    if (updatedState.version < version) {
      updatedState = versionUpdaters[version](updatedState);
    }
  });
  return updatedState;
}

function updateToV10() {
  // Fresh state for new league
  return INITIAL_STATE;
}
