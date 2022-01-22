/* eslint-disable no-unused-vars */

import { INITIAL_TASK_STATE } from '../store/tasks/constants';
import { load as loadTaskState } from '../store/tasks/tasks';
import { load as loadUnlocksState } from '../store/unlocks/unlocks';

export default function importFromPlugin(pluginData, userState, dispatch) {
    const syncedTasks = importTasks(pluginData.tasks, userState.tasks.tasks, dispatch);
    dispatch(loadTaskState({ rsn: pluginData.displayName, tasks: syncedTasks }));

    // Assume the plugin is the source of truth, overwrite local data
    const importedQuests = pluginData.quests;
    dispatch(loadUnlocksState({ quests: importedQuests }));

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
        syncedTasks[taskId] = {
            ...INITIAL_TASK_STATE,
            completed: selectCurrentValue(pluginTask.completedOn, localTask.completed),
            todo: selectCurrentValue(pluginTask.trackedOn, localTask.todo),
            ignored: selectCurrentValue(pluginTask.ignoredOn, localTask.ignored),
            lastUpdated: Date.now(),
        };
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
