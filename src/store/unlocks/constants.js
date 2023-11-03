import { merge } from 'lodash';
import { QUEST_STATUS } from '../../data/quests';
import { DEFAULT_REGIONS, NONE_REGION_ID, regionsById } from '../../data/regions';

export const CURRENT_VERSION = 8;

const INITIAL_REGIONS_STATE = [...DEFAULT_REGIONS, NONE_REGION_ID, NONE_REGION_ID, NONE_REGION_ID];
const INITIAL_RELICS_STATE = [-1, -1, -1, -1, -1, -1, -1];
const DEFAULT_QUESTS = merge(
  {},
  ...[...regionsById[0].questUnlocks, ...regionsById[1].questUnlocks].map(quest => ({ [quest]: QUEST_STATUS.FINISHED }))
);
const DEFAULT_DIARIES = merge(
  {},
  ...[...regionsById[0].diaryUnlocks, ...regionsById[1].diaryUnlocks].map(task => ({ [task]: true }))
);

export const INITIAL_STATE = {
  version: CURRENT_VERSION,
  quests: DEFAULT_QUESTS,
  diaries: DEFAULT_DIARIES,
  relics: INITIAL_RELICS_STATE,
  regions: INITIAL_REGIONS_STATE,
};
