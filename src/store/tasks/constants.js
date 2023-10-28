import calculateTaskStats from '../../util/calculateTaskStats';

export const CURRENT_VERSION = 8;

export const INITIAL_STATE = {
  version: CURRENT_VERSION,
  randomTaskId: null,
  rsn: null,
  tasks: {},
  taskStats: calculateTaskStats({}),
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
