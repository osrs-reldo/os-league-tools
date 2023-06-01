/* eslint-disable no-unused-vars */

import _ from 'lodash';
import { updateUsername } from '../store/user/character';
import { INITIAL_TASK_STATE } from '../store/tasks/constants';
import { load as loadTaskState } from '../store/tasks/tasks';
import { load as loadUnlocksState } from '../store/unlocks/unlocks';

export default function importFromPlugin(pluginData, userState, dispatch) {
  dispatch(updateUsername(pluginData.displayName));

  const syncedTasks = importTasks(pluginData.tasks, userState.tasks.tasks, dispatch);
  dispatch(loadTaskState({ newState: { rsn: pluginData.displayName, tasks: syncedTasks } }));

  // Assume the plugin is the source of truth, overwrite local data
  const importedQuests = pluginData.quests;
  dispatch(loadUnlocksState({ newState: { quests: importedQuests } }));

  // importBossKc(pluginData.bosses);
  // importUnlocks(pluginData.varbits);
}

function importBossKc(bossData) {
  // TODO
}

function importTasks(pluginTasks, localTasks, dispatch) {
  const syncedTasks = {};
  Object.keys(pluginTasks).forEach(taskId => {
    const pluginTask = pluginTasks[taskId];
    const localTask = localTasks[taskId] || INITIAL_TASK_STATE;
    const completed = pluginTask.completedOn > 0 ? pluginTask.completedOn : null; // Always trust plugin as single source of truth for completion
    syncedTasks[taskId] = {
      ...localTask,
      completed,
      todo: completed ? null : selectCurrentValue(pluginTask.trackedOn, localTask.todo),
      ignored: selectCurrentValue(pluginTask.ignoredOn, localTask.ignored),
      lastUpdated: Date.now(),
    };
  });

  const extraLocalKeys = _.difference(Object.keys(localTasks), Object.keys(pluginTasks));
  extraLocalKeys.forEach(taskId => {
    if (localTasks[taskId].todo || localTasks[taskId].ignored || localTasks[taskId].notes) {
      const { todo, ignored, notes } = localTasks[taskId];
      syncedTasks[taskId] = {
        ...INITIAL_TASK_STATE,
        todo,
        ignored,
        notes,
        lastUpdated: Date.now(),
      };
    }
  });

  return syncedTasks;
}

function selectCurrentValue(pluginValue, localValue) {
  if (!localValue) {
    return pluginValue > 0 ? pluginValue : null;
  }
  return Math.max(localValue, pluginValue);
}

function importUnlocks(varbits) {
  // TODO
}
