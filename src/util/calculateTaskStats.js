import { forEach } from 'lodash';
import { DIFFICULTY } from '../data/constants';
import { NONE_REGION_ID, regionsById } from '../data/regions';
import tasks from '../data/tasks';

const ALL_TASKS = {
  total: {
    Easy: 224,
    Medium: 536,
    Hard: 437,
    Elite: 345,
    Master: 47,
    total: 1589,
  },
  General: {
    Easy: 76,
    Medium: 177,
    Hard: 101,
    Elite: 127,
    Master: 7,
    total: 488,
  },
  Misthalin: {
    Easy: 42,
    Medium: 44,
    Hard: 16,
    Elite: 12,
    Master: 0,
    total: 114,
  },
  Karamja: {
    Easy: 5,
    Medium: 17,
    Hard: 13,
    Elite: 12,
    Master: 7,
    total: 54,
  },
  Asgarnia: {
    Easy: 8,
    Medium: 32,
    Hard: 30,
    Elite: 22,
    Master: 3,
    total: 95,
  },
  Desert: {
    Easy: 15,
    Medium: 39,
    Hard: 34,
    Elite: 19,
    Master: 5,
    total: 112,
  },
  Fremennik: {
    Easy: 14,
    Medium: 32,
    Hard: 41,
    Elite: 23,
    Master: 2,
    total: 112,
  },
  Kandarin: {
    Easy: 13,
    Medium: 37,
    Hard: 30,
    Elite: 20,
    Master: 3,
    total: 103,
  },
  Kourend: {
    Easy: 15,
    Medium: 41,
    Hard: 38,
    Elite: 22,
    Master: 3,
    total: 119,
  },
  Morytania: {
    Easy: 7,
    Medium: 35,
    Hard: 31,
    Elite: 23,
    Master: 5,
    total: 101,
  },
  Tirannwn: {
    Easy: 8,
    Medium: 16,
    Hard: 33,
    Elite: 24,
    Master: 4,
    total: 85,
  },
  Varlamore: {
    Easy: 12,
    Medium: 40,
    Hard: 39,
    Elite: 15,
    Master: 5,
    total: 111,
  },
  Wilderness: {
    Easy: 9,
    Medium: 26,
    Hard: 31,
    Elite: 26,
    Master: 3,
    total: 95,
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
