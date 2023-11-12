export const CURRENT_VERSION = 3;

export const INITIAL_STATE = {
  version: CURRENT_VERSION,
  limitContentWidth: true,
  mode: 'dark',
  theme: 'tr-dark',
  taskColumns: {
    completedAt: false,
    category: true,
    priority: true,
    regions: true,
  },
};
