import { DIFFICULTY } from '../data/constants';
import tasks from '../data/tasks';

const ALL_TASKS = {
  count: {
    Beginner: 61,
    Easy: 164,
    Medium: 312,
    Hard: 327,
    Elite: 335,
    Master: 61,
    total: 1260,
  },
  points: {
    Beginner: 305,
    Easy: 820,
    Medium: 7800,
    Hard: 16350,
    Elite: 41875,
    Master: 15250,
    total: 82400,
  },
  renown: {
    Beginner: 61,
    Easy: 164,
    Medium: 624,
    Hard: 981,
    Elite: 1340,
    Master: 305,
    total: 3475,
  },
};

export default function calculateTaskStats(taskState) {
  const tasksCount = {
    complete: {
      Beginner: 0,
      Easy: 0,
      Medium: 0,
      Hard: 0,
      Elite: 0,
      Master: 0,
    },
    todo: {
      Beginner: 0,
      Easy: 0,
      Medium: 0,
      Hard: 0,
      Elite: 0,
      Master: 0,
    },
    ignored: {
      Beginner: 0,
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
  tasksCount.available = {
    Beginner: ALL_TASKS.count.Beginner - tasksCount.ignored.Beginner,
    Easy: ALL_TASKS.count.Easy - tasksCount.ignored.Easy,
    Medium: ALL_TASKS.count.Medium - tasksCount.ignored.Medium,
    Hard: ALL_TASKS.count.Hard - tasksCount.ignored.Hard,
    Elite: ALL_TASKS.count.Elite - tasksCount.ignored.Elite,
    Master: ALL_TASKS.count.Master - tasksCount.ignored.Master,
  };

  const pointsCount = {
    points: {
      complete: {},
      todo: {},
      available: {},
    },
    renown: {
      complete: {},
      todo: {},
      available: {},
    },
  };
  Object.keys(DIFFICULTY).forEach(difficultyKey => {
    const { label: difficulty, value, renown } = DIFFICULTY[difficultyKey];
    pointsCount.points.complete[difficulty] = tasksCount.complete[difficulty] * value;
    pointsCount.points.todo[difficulty] = tasksCount.todo[difficulty] * value;
    pointsCount.points.available[difficulty] = tasksCount.available[difficulty] * value;
    pointsCount.renown.complete[difficulty] = tasksCount.complete[difficulty] * renown;
    pointsCount.renown.todo[difficulty] = tasksCount.todo[difficulty] * renown;
    pointsCount.renown.available[difficulty] = tasksCount.available[difficulty] * renown;
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
    renown: {
      complete: {
        ...pointsCount.renown.complete,
        total: Object.values(pointsCount.renown.complete).reduce((a, b) => a + b),
      },
      todo: {
        ...pointsCount.renown.todo,
        total: Object.values(pointsCount.renown.todo).reduce((a, b) => a + b),
      },
      available: {
        ...pointsCount.renown.available,
        total: Object.values(pointsCount.renown.available).reduce((a, b) => a + b),
      },
    },
  };
}
