import { CURRENT_VERSION } from './account';

const versionUpdaters = {
  2: updateToV2,
  3: updateToV3,
};

export default function updateUnlocksVersion(state) {
  if (state.version && state.version >= CURRENT_VERSION) {
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

function updateToV2(prevState) {
  // V2 adds user email
  return {
    ...prevState,
    version: 2,
    userEmail: undefined,
  };
}

function updateToV3(prevState) {
  // V3 adds auth token
  return {
    ...prevState,
    version: 3,
    accessToken: undefined,
  };
}
