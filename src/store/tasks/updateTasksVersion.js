import { deleteFromLocalStorage } from '../../client/localstorage-client';
import { CURRENT_VERSION, INITIAL_STATE, LEGACY_TO_INTERNAL_IDS } from './constants';

const SHATTERED_RELICS_MIN_VERSION = 4;

const versionUpdaters = {
    4: updateToV4,
    5: updateToV5,
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
