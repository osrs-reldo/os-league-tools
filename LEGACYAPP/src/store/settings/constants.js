export const CURRENT_VERSION = 4;

export const INITIAL_STATE = {
  version: CURRENT_VERSION,
  limitContentWidth: true,
  mode: 'dark',
  theme: 're-dark',
  taskColumns: {
    completedAt: false,
    category: true,
    priority: true,
    regions: true,
  },
};
