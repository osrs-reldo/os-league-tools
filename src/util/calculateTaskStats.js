import { forEach } from 'lodash';
import { DIFFICULTY } from '../data/constants';
import { NONE_REGION_ID, regionsById } from '../data/regions';
import tasks from '../data/tasks';

const ALL_TASKS = {
  total: {
    Easy: 269,
    Medium: 391,
    Hard: 386,
    Elite: 390,
    Master: 46,
    total: 1482,
  },
  General: {
    Easy: 107,
    Medium: 128,
    Hard: 98,
    Elite: 162,
    Master: 8,
    total: 503,
  },
  Misthalin: {
    Easy: 34,
    Medium: 32,
    Hard: 14,
    Elite: 16,
    Master: 0,
    total: 96,
  },
  Karamja: {
    Easy: 7,
    Medium: 12,
    Hard: 17,
    Elite: 15,
    Master: 6,
    total: 57,
  },
  Asgarnia: {
    Easy: 18,
    Medium: 30,
    Hard: 32,
    Elite: 22,
    Master: 3,
    total: 105,
  },
  Desert: {
    Easy: 20,
    Medium: 39,
    Hard: 40,
    Elite: 21,
    Master: 5,
    total: 125,
  },
  Fremennik: {
    Easy: 11,
    Medium: 22,
    Hard: 34,
    Elite: 26,
    Master: 3,
    total: 96,
  },
  Kandarin: {
    Easy: 21,
    Medium: 35,
    Hard: 24,
    Elite: 20,
    Master: 4,
    total: 104,
  },
  Morytania: {
    Easy: 10,
    Medium: 28,
    Hard: 31,
    Elite: 27,
    Master: 6,
    total: 102,
  },
  Tirannwn: {
    Easy: 9,
    Medium: 9,
    Hard: 28,
    Elite: 26,
    Master: 4,
    total: 76,
  },
  Wilderness: {
    Easy: 11,
    Medium: 25,
    Hard: 26,
    Elite: 28,
    Master: 4,
    total: 94,
  },
  Kourend: {
    Easy: 21,
    Medium: 31,
    Hard: 42,
    Elite: 27,
    Master: 3,
    total: 124,
  },
};

export default function calculateTaskStats(taskState, unlockedRegions) {
  const tasksCount = {
    complete: {
      Easy: 0,
      Medium: 0,
      Hard: 0,
      Elite: 0,
      Master: 0,
    },
    todo: {
      Easy: 0,
      Medium: 0,
      Hard: 0,
      Elite: 0,
      Master: 0,
    },
    ignored: {
      Easy: 0,
      Medium: 0,
      Hard: 0,
      Elite: 0,
      Master: 0,
    },
  };
  Object.keys(taskState).forEach(taskId => {
    if (!tasks[taskId]) {
      return;
    }
    const { difficulty } = tasks[taskId];
    const { completed, todo, ignored } = taskState[taskId];
    tasksCount.complete[difficulty.label] += completed ? 1 : 0;
    tasksCount.todo[difficulty.label] += todo ? 1 : 0;
    tasksCount.ignored[difficulty.label] += ignored ? 1 : 0;
  });

  const allTasks = { ...ALL_TASKS.General };
  forEach(unlockedRegions, regionId => {
    if (regionId === NONE_REGION_ID) {
      return;
    }
    const regionName = regionsById[regionId].label;
    allTasks.Easy += ALL_TASKS[regionName].Easy;
    allTasks.Medium += ALL_TASKS[regionName].Medium;
    allTasks.Hard += ALL_TASKS[regionName].Hard;
    allTasks.Elite += ALL_TASKS[regionName].Elite;
    allTasks.Master += ALL_TASKS[regionName].Master;
  });

  tasksCount.available = {
    Easy: allTasks.Easy - tasksCount.ignored.Easy,
    Medium: allTasks.Medium - tasksCount.ignored.Medium,
    Hard: allTasks.Hard - tasksCount.ignored.Hard,
    Elite: allTasks.Elite - tasksCount.ignored.Elite,
    Master: allTasks.Master - tasksCount.ignored.Master,
  };

  const pointsCount = {
    points: {
      complete: {},
      todo: {},
      available: {},
    },
  };
  Object.keys(DIFFICULTY).forEach(difficultyKey => {
    const { label: difficulty, value } = DIFFICULTY[difficultyKey];
    pointsCount.points.complete[difficulty] = tasksCount.complete[difficulty] * value;
    pointsCount.points.todo[difficulty] = tasksCount.todo[difficulty] * value;
    pointsCount.points.available[difficulty] = tasksCount.available[difficulty] * value;
  });

  return {
    tasks: {
      complete: {
        ...tasksCount.complete,
        total: Object.values(tasksCount.complete).reduce((a, b) => a + b),
      },
      todo: {
        ...tasksCount.todo,
        total: Object.values(tasksCount.todo).reduce((a, b) => a + b),
      },
      available: {
        ...tasksCount.available,
        total: Object.values(tasksCount.available).reduce((a, b) => a + b),
      },
    },
    points: {
      complete: {
        ...pointsCount.points.complete,
        total: Object.values(pointsCount.points.complete).reduce((a, b) => a + b),
      },
      todo: {
        ...pointsCount.points.todo,
        total: Object.values(pointsCount.points.todo).reduce((a, b) => a + b),
      },
      available: {
        ...pointsCount.points.available,
        total: Object.values(pointsCount.points.available).reduce((a, b) => a + b),
      },
    },
  };
}
