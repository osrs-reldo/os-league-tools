import calculateTaskStats from '../../util/calculateTaskStats';
import { INITIAL_REGIONS_STATE } from '../unlocks/constants';

export const CURRENT_VERSION = 8;

export const INITIAL_STATE = {
  version: CURRENT_VERSION,
  randomTaskId: null,
  rsn: null,
  tasks: {},
  taskStats: calculateTaskStats({}, INITIAL_REGIONS_STATE),
  tier: 1,
};

export const INITIAL_TASK_STATE = {
  completed: null,
  todo: null,
  ignored: null,
  order: null,
  notes: null,
  lastUpdated: null,
};
