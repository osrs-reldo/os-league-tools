/* eslint-disable no-unused-vars */

import _ from 'lodash';
import { INITIAL_TASK_STATE } from '../store/tasks/constants';
import { load as loadTaskState } from '../store/tasks/tasks';
import { load as loadQuestState } from '../store/unlocks/unlocks';
import { addCharacter, updateActiveCharacter } from '../store/user/character';

export default function importFromPlugin(pluginData, userState, dispatch, characterState) {
  const characterExists = characterState.characters.includes(pluginData.displayName);
  if (characterExists) {
    const characterIndex = characterState.characters.indexOf(pluginData.displayName);
    dispatch(updateActiveCharacter(characterIndex));
  } else {
    dispatch(addCharacter({ rsn: pluginData.displayName, setActive: true }));
  }

  const syncedTasks = importTasks(pluginData.tasks, userState.tasks.tasks, dispatch);
  dispatch(
    loadTaskState({ newState: { rsn: pluginData.displayName, tasks: syncedTasks, regions: userState.regions } })
  );

  const importedQuests = pluginData.quests;
  if (importedQuests) {
    dispatch(loadQuestState({ newState: { quests: importedQuests } }));
  }
}

function importTasks(pluginTasks, localTasks, dispatch) {
  const syncedTasks = {};
  Object.keys(pluginTasks).forEach(taskId => {
    const pluginTask = pluginTasks[taskId];
    const localTask = localTasks[taskId] || INITIAL_TASK_STATE;
    const completed = pluginTask.completed > 0 ? pluginTask.completed : null; // Always trust plugin as single source of truth for completion
    syncedTasks[taskId] = {
      ...localTask,
      completed,
      todo: completed ? null : selectCurrentValue(pluginTask.tracked, localTask.todo),
      ignored: selectCurrentValue(pluginTask.ignored, localTask.ignored),
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
