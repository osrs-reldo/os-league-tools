/* eslint-disable no-unused-vars */

import _ from 'lodash';
import { useSelector } from 'react-redux';
import { addCharacter } from '../store/user/character';
import { INITIAL_TASK_STATE } from '../store/tasks/constants';
import { load as loadTaskState } from '../store/tasks/tasks';
import { load as loadUnlocksState } from '../store/unlocks/unlocks';
import { SKILL_UNLOCK } from '../data/constants';
import { INITIAL_STATE } from '../store/unlocks/constants';

export default function importFromPlugin(pluginData, userState, dispatch) {
  const characterState = useSelector(state => state.character);
  const characterIndex = _.find(characterState.characters, pluginData.displayName);
  if (!characterIndex) {
    dispatch(addCharacter({ rsn: pluginData.displayName, setActive: true }));
  }

  const syncedTasks = importTasks(pluginData.tasks, userState.tasks.tasks, dispatch);
  dispatch(loadTaskState({ newState: { rsn: pluginData.displayName, tasks: syncedTasks } }));

  const importedQuests = pluginData.quests;
  const importedSkills = importSkillUnlocks(pluginData.varbits);

  // Assume the plugin is the source of truth, overwrite local data
  dispatch(loadUnlocksState({ newState: { quests: importedQuests, skills: importedSkills } }));

  // importBossKc(pluginData.bosses);
}

function importBossKc(bossData) {
  // TODO
}

function importSkillUnlocks(varbits) {
  const unlockedSkills = [...INITIAL_STATE.skills];
  Object.keys(SKILL_UNLOCK).forEach(varbit => {
    if (varbits[varbit] === 1) {
      unlockedSkills.push(SKILL_UNLOCK[varbit].label);
    }
  });
  return unlockedSkills;
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
