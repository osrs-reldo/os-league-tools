import update from 'immutability-helper';
import _ from 'lodash';
import { LOCALSTORAGE_KEYS } from '../../util/legacy/browser-util';
import { REGIONS } from '../../util/legacy/region-util';
import useLocalStorage from '../useLocalStorage';

const CURRENT_VERSION = 3;

const INITIAL_TASKS_STATE_V2 = {
    version: 2,
    tasks: [],
    todoList: [],
};
export const INITIAL_TASKS_STATE_V3 = {
    version: 3,
    tasks: [],
    todoList: [],
    hidden: [],
};

export default function useTaskStatus() {
    const [storedTaskStatus, setTaskStatus] = useLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_TASKS_STATE_V3);

    let taskStatus = storedTaskStatus;
    if (shouldUpdateVersion(storedTaskStatus)) {
        const updatedVersion = updateTaskStatusVersion(taskStatus, storedTaskStatus.version);
        taskStatus = updatedVersion;
        setTaskStatus(updatedVersion);
    }

    const setCompleted = (taskId, isComplete) => {
        let updatedTaskStatus;
        if (isComplete) {
            updatedTaskStatus = update(taskStatus, {
                tasks: prevTasks => [...prevTasks, taskId],
            });
        } else {
            updatedTaskStatus = update(taskStatus, {
                tasks: prevTasks => _.without(prevTasks, taskId),
            });
        }
        setTaskStatus(updatedTaskStatus);
    };

    const setTodoListed = (taskIds, isOnTodoList) => {
        const idsToSet = !Array.isArray(taskIds) ? [taskIds] : taskIds;
        let updatedTaskStatus;
        if (isOnTodoList) {
            updatedTaskStatus = update(taskStatus, {
                todoList: prevTasks => [...prevTasks, ...idsToSet],
            });
        } else {
            updatedTaskStatus = update(taskStatus, {
                todoList: prevTasks => _.without(prevTasks, ...idsToSet),
            });
        }
        setTaskStatus(updatedTaskStatus);
    };

    const setHidden = (taskId, isHidden) => {
        let updatedTaskStatus;
        if (isHidden) {
            updatedTaskStatus = update(taskStatus, {
                hidden: prevTasks => [...prevTasks, taskId],
            });
        } else {
            updatedTaskStatus = update(taskStatus, {
                hidden: prevTasks => _.without(prevTasks, taskId),
            });
        }
        setTaskStatus(updatedTaskStatus);
    };

    return [taskStatus, { setCompleted, setTodoListed, setHidden }];
}

function shouldUpdateVersion(taskStatus) {
    return !taskStatus.version || taskStatus.version < CURRENT_VERSION;
}

function updateTaskStatusVersion(taskStatus, prevVersion) {
    if (!prevVersion || prevVersion === 1) {
        const updatedStatus = updateToVersion2(taskStatus);
        return updateToVersion3(updatedStatus);
    } else if (prevVersion === 2) {
        return updateToVersion3(taskStatus);
    }
    return taskStatus;
}

function updateToVersion2(taskStatus) {
    const newTaskStatus = INITIAL_TASKS_STATE_V2;
    const regions = ['Common', ...REGIONS];
    regions.forEach(region => {
        const taskStatusInRegion = taskStatus[region].tasks;
        for (const [id, status] of Object.entries(taskStatusInRegion)) {
            if (status.complete) {
                newTaskStatus.tasks.push(id);
            }
            if (status.todoList) {
                newTaskStatus.todoList.push(id);
            }
        }
    });
    return newTaskStatus;
}

function updateToVersion3(taskStatus) {
    const updatedTaskStatus = INITIAL_TASKS_STATE_V3;

    // an old bug caused these to sometimes contain duplicates, make sure they've been removed
    updatedTaskStatus.todoList = [...new Set(taskStatus.todoList)];
    updatedTaskStatus.tasks = [...new Set(taskStatus.tasks)];

    return updatedTaskStatus;
}
