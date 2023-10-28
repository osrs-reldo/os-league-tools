import { CURRENT_VERSION } from './constants';

const versionUpdaters = {
  2: updateToV2,
  3: updateToV3,
  5: updateToV5,
  6: updateToV6,
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

function updateToV2(prevState) {
  // V2 adds quests
  return {
    ...prevState,
    version: 2,
    quests: {},
  };
}

function updateToV3(prevState) {
  // Fixed a bug that caused skill array to get filled with null values
  return {
    ...prevState,
    version: 3,
    skills: prevState.skills.filter(val => !!val),
  };
}

function updateToV5(prevState) {
  // Root cause unclear, but some users are missing quests object and need to have it recreated
  return {
    ...prevState,
    version: 5,
    quests: prevState.quests || {},
  };
}

function updateToV6(prevState) {
  // V6 adds diaries
  return {
    ...prevState,
    version: 6,
    diaries: {},
  };
}
