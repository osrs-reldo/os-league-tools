import { LOCALSTORAGE_KEYS } from "../util/browser-util";
import { REGIONS } from '../util/region-util';
import useLocalStorage from './useLocalStorage';
import update from 'immutability-helper';
import _ from 'lodash';

const CURRENT_VERSION = 2;

export const INITIAL_TASKS_STATE_V2 = {
    version: 2,
    tasks: [],
    todoList: []
}

export default function useTaskStatus() {
    const [taskStatus, setTaskStatus] = useLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_TASKS_STATE_V2);

    if (shouldUpdateVersion(taskStatus)) {
        setTaskStatus(updateTaskStatusVersion(taskStatus, setTaskStatus));
    }

    const setCompleted = (taskId, isComplete) => {
        let updatedTaskStatus;
        if (isComplete) {
            updatedTaskStatus = update(taskStatus, {
                tasks: prevTasks => [ ...prevTasks, taskId ]
            })
        } else {
            updatedTaskStatus = update(taskStatus, {
                tasks: prevTasks => _.without(prevTasks, taskId)
            })
        }
        setTaskStatus(updatedTaskStatus);
    }

    const setTodoListed = (taskId, isOnTodoList) => {
        let updatedTaskStatus;
        if (isOnTodoList) {
            updatedTaskStatus = update(taskStatus, {
                todoList: prevTasks => [ ...prevTasks, taskId ]
            })
        } else {
            updatedTaskStatus = update(taskStatus, {
                todoList: prevTasks => _.without(prevTasks, taskId)
            })
        }
        setTaskStatus(updatedTaskStatus);
    }

    return [ taskStatus, { setCompleted, setTodoListed } ];
}

function shouldUpdateVersion(taskStatus) {
    return !taskStatus.version || taskStatus.version < CURRENT_VERSION;
}

function updateTaskStatusVersion(taskStatus) {
    const newTaskStatus = INITIAL_TASKS_STATE_V2;
    const regions = [ 'Common', ...REGIONS ];
    regions.forEach(region => {
        const taskStatusInRegion = taskStatus[region].tasks;
        for (let [id, status] of Object.entries(taskStatusInRegion)) {
            if (status.complete) {
                newTaskStatus.tasks.push(id);
            }
            if (status.todoList) {
                newTaskStatus.todoList.push(id);
            }
        }
    })
    return newTaskStatus;
}
