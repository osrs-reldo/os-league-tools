/* eslint-disable no-unused-vars */

import { INITIAL_TASK_STATE } from '../store/tasks/constants';
import { load } from '../store/tasks/tasks';

export default function importFromPlugin(pluginData, userState, dispatch) {
    // eslint-disable-next-line no-console
    console.log({ pluginData });
    const syncedTasks = importTasks(pluginData.tasks, userState.tasks.tasks, dispatch);
    dispatch(load({ rsn: pluginData.displayName, tasks: syncedTasks }));
    // importQuests(pluginData.quests);
    // importBossKc(pluginData.bosses);
    // importUnlocks(pluginData.varbits);
}

function importQuests(questData) {
    // TODO
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
    // eslint-disable-next-line no-console
    console.log({
        syncedTasks: {
            ...localTasks,
            ...syncedTasks,
        },
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
