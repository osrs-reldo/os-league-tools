export const CURRENT_VERSION = 2;

export const HISCORES_TTL = 1800000; // 30 min in ms

const INITIAL_HISCORES_STATE = {
  lastUpdated: 0,
  loading: false,
  data: null,
  error: null,
};

export const INITIAL_STATE = {
  version: CURRENT_VERSION,
  activeCharacter: 0,
  characters: [],
  hiscoresCache: INITIAL_HISCORES_STATE,
};
