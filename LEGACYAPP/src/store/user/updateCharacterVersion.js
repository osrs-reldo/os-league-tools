import { CURRENT_VERSION } from './constants';

const versionUpdaters = {
  2: updateToV2,
};

export default function updateCharacterVersion(state) {
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
  // V2 adds multiple character support
  return {
    version: 2,
    hiscoresCache: prevState.hiscoresCache,
    activeCharacter: 0,
    characters: [prevState.username],
  };
}
