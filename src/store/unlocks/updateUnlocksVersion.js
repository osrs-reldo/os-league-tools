import { NONE_RELIC_ID } from '../../data/relics';
import { CURRENT_VERSION, INITIAL_STATE } from './constants';

const versionUpdaters = {
  7: updateToV7,
  8: updateToV8,
  9: updateToV9,
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

function updateToV7() {
  // Fresh state for new league
  return INITIAL_STATE;
}

function updateToV8(state) {
  // Change format of regions state
  return {
    ...state,
    version: 8,
    regions: INITIAL_STATE.regions,
  };
}

function updateToV9(state) {
  //  8th relic tier announced
  return {
    ...state,
    version: 9,
    relics: [...state.relics, NONE_RELIC_ID],
  };
}
