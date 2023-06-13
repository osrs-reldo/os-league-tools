export const CURRENT_VERSION = 6;

export const DEFAULT_UNLOCKED_SKILLS = ['Defence', 'Thieving', 'Fishing'];

export const DEFAULT_UNLOCKED_BOSSES = [
  'Callisto',
  'Chaos Elemental',
  'Chaos Fanatic',
  'Crazy Archaeologist',
  'Scorpia',
  'Venenatis',
  "Vet'ion",
];

export const INITIAL_STATE = {
  version: CURRENT_VERSION,
  skills: DEFAULT_UNLOCKED_SKILLS,
  bosses: [],
  quests: {},
  diaries: {},
};
