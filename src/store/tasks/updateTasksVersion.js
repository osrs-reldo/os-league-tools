import { deleteFromLocalStorage } from '../../client/localstorage-client';
import calculateTaskStats from '../../util/calculateTaskStats';
import { getTier } from '../../util/getTier';
import { CURRENT_VERSION, INITIAL_STATE, LEGACY_TO_INTERNAL_IDS } from './constants';

const SHATTERED_RELICS_MIN_VERSION = 4;

const versionUpdaters = {
    4: updateToV4,
    5: updateToV5,
    6: updateToV6,
    7: updateToV7,
};

export default function updateTasksVersion(taskState) {
    if (taskState.version >= CURRENT_VERSION) {
        return taskState;
    }

    let updatedState = taskState;
    Object.keys(versionUpdaters).forEach(version => {
        if (updatedState.version < version) {
            updatedState = versionUpdaters[version](updatedState);
        }
    });
    return updatedState;
}

function updateToV4(state) {
    if (state.version >= SHATTERED_RELICS_MIN_VERSION) {
        return state;
    }

    // Storage contains old data from last league, reset it and clean up other stale fields
    [
        'contentWidth',
        'filterHideLocked',
        'filterHideTodoTasks',
        'filterShowHiddenTasks',
        'hideAlertBanner',
        'unlockedRegions',
        'unlockedRelics',
        'tasks',
    ].forEach(staleStorageField => deleteFromLocalStorage(staleStorageField));
    return INITIAL_STATE;
}

function updateToV5(state) {
    // Task IDs changed for v5 and need to be remapped
    const newTaskMapping = {};
    Object.keys(state.tasks).forEach(taskKey => {
        const newKey = LEGACY_TO_INTERNAL_IDS[taskKey];
        newTaskMapping[newKey] = state.tasks[taskKey];
    });
    return {
        ...state,
        tasks: newTaskMapping,
        version: 5,
    };
}

function updateToV6(state) {
    // Handful of tasks got official IDs that didn't have them before
    const V6_TASK_REMAP = {
        90000: 1329,
        90001: 834,
        90002: 842,
        90003: 662,
    };
    const newTaskMapping = { ...state.tasks };
    Object.keys(V6_TASK_REMAP).forEach(oldTaskKey => {
        if (Object.prototype.hasOwnProperty.call(newTaskMapping, oldTaskKey)) {
            const data = { ...newTaskMapping[oldTaskKey] };
            delete newTaskMapping[oldTaskKey];
            newTaskMapping[V6_TASK_REMAP[oldTaskKey]] = data;
        }
    });
    return {
        ...state,
        tasks: newTaskMapping,
        version: 6,
    };
}

function updateToV7(state) {
    const taskStats = calculateTaskStats(state.tasks);
    return {
        ...state,
        taskStats,
        tier: getTier(taskStats.points.complete.total),
        version: 7,
    };
}
