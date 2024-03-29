import TASKS from '../data/tasks';
import ALL_FILTERS from '../util/taskFilters';

export default function useFilterTasks({
  filters = ALL_FILTERS,
  filterState,
  tasks = TASKS,
  taskState,
  hiscoresState,
  regionsState,
}) {
  const filteredTasks = Object.values(tasks).filter(task =>
    Object.values(filters).every(filter => filter(task, filterState, { taskState, hiscoresState, regionsState }))
  );

  return Object.values(filteredTasks);
}
