import React from "react";
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../util/browser-util'
import update from 'immutability-helper';
import { InlineIcon } from '@iconify/react';
import addToListIcon from '@iconify/icons-mdi/text-box-plus-outline';
import removeFromListIcon from '@iconify/icons-mdi/text-box-remove-outline';
import checkedIcon from '@iconify/icons-mdi/check-circle-outline';
import uncheckedIcon from '@iconify/icons-mdi/checkbox-blank-circle-outline';
import taskData from '../resources/taskData.json';

export const INITIAL_TASKS_STATE = {
    points: 0,
    taskCount: { total: 0, Easy: 0, Medium: 0, Hard: 0, Elite: 0, Master: 0, },
    Common: { points: 0, taskCount: 0, tasks: {} },
    Asgarnia: { points: 0, taskCount: 0, tasks: {} },
    Desert: { points: 0, taskCount: 0, tasks: {} },
    Fremennik: { points: 0, taskCount: 0, tasks: {} },
    Kandarin: { points: 0, taskCount: 0, tasks: {} },
    Karamja: { points: 0, taskCount: 0, tasks: {} },
    Misthalin: { points: 0, taskCount: 0, tasks: {} },
    Morytania: { points: 0, taskCount: 0, tasks: {} },
    Tirannwn: { points: 0, taskCount: 0, tasks: {} },
    Wilderness: { points: 0, taskCount: 0, tasks: {} },
}

const INITIAL_TASK_STATE = {
    complete: false,
    todoList: false,
}

const DIFFICULTY_POINTS = {
    'Easy': 10,
    'Medium': 50,
    'Hard': 100,
    'Elite': 250,
    'Master': 500,
}

export function getFormatters() {
    return {
        completedFormatter: completedFormatter,
        pointsFormatter: pointsFormatter,
        todoFormatter: todoFormatter,
        nameFormatter: nameFormatter,
    }
}

export function getRenderers() {
    return {
        pageButtonRenderer: pageButtonRenderer,
    }
}

function completedFormatter(cell, row, rowIndex, props) {
    const isComplete = isTaskComplete(row.id, props.area, props.taskStatus);
    if (isComplete) {
        return (
            <div className='clickable completed' onClick={() => props.updateTaskCallback(false, row.id, row.difficulty)}>
                <InlineIcon icon={checkedIcon} height='1.25rem' />
            </div>
        );
    }
    return (
        <div className='clickable' onClick={() => props.updateTaskCallback(true, row.id, row.difficulty)}>
            <InlineIcon icon={uncheckedIcon} height='1.25rem' />
        </div>
    );
}

function pointsFormatter(cell, row, rowIndex) {
    const points = DIFFICULTY_POINTS[row.difficulty];
    if (!points) {
        return 0;
    }
    return points;
}

function nameFormatter(cell, row, rowIndex, props) {
    const isComplete = isTaskComplete(row.id, props.area, props.taskStatus)
    return (
        <div className={isComplete ? 'completed' : ''}>
            {cell}
            <div className='small'>
                {row.description}
            </div>
        </div>
    );
}

function todoFormatter(cell, row, rowIndex, props) {
    const isOnTodoList = isTaskOnTodoList(row.id, props.area, props.taskStatus);
    if (isOnTodoList) {
        return (
            <div className='clickable' onClick={() => props.updateTaskCallback(false, row.id)}>
                <InlineIcon icon={removeFromListIcon} />{' '}
                Remove
            </div>
        );
    }
    return (
        <div className='clickable' onClick={() => props.updateTaskCallback(true, row.id)}>
            <InlineIcon icon={addToListIcon} />{' '}
            Add
        </div>
    );
}

function pageButtonRenderer({ page, active, disable, title, onPageChange }) {
    const handleClick = (e) => {
        e.preventDefault();
        onPageChange(page);
    };
    const activeStyle = {
        'padding': '6px 12px'
    };
    if (active) {
        activeStyle.backgroundColor = '#484e53';
        activeStyle.color = 'white';
    } else {
        activeStyle.backgroundColor = ' #343a40';
        activeStyle.color = 'white';
    }
    return (
        <li key={page} >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={handleClick} style={activeStyle}>{page}</a>
        </li>
    );
};

export function immutablyUpdateTaskCompletion(isCompleted, taskId, area, difficulty, taskState, setTaskStatusCallback = () => { }) {
    const taskStatus = taskState ? taskState : getFromLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_TASKS_STATE);
    const pointValue = DIFFICULTY_POINTS[difficulty] * (isCompleted ? 1 : -1);
    const countAdjustment = isCompleted ? 1 : -1;

    const updatedStatus = update(taskStatus, {
        points: prevPoints => prevPoints + pointValue,
        taskCount: {
            total: prevCount => prevCount + countAdjustment,
            [difficulty]: prevCount => prevCount + countAdjustment,
        },
        [area]: {
            points: prevPoints => prevPoints + pointValue,
            taskCount: prevCount => prevCount + countAdjustment,
            tasks: {
                [taskId]: prevTaskState =>
                    update(prevTaskState || INITIAL_TASK_STATE,
                        { complete: { $set: isCompleted } }
                    )
            }
        }
    });
    setTaskStatusCallback(updatedStatus);
    return updatedStatus;
}

export function immutablyUpdateTaskTodoList(isOnTodoList, taskId, area, taskState, setTaskTodoCallback = () => { }) {
    const taskStatus = taskState ? taskState : getFromLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_TASKS_STATE);

    const updatedStatus = update(taskStatus, {
        [area]: {
            tasks: {
                [taskId]: prevTaskState =>
                    update(prevTaskState || INITIAL_TASK_STATE,
                        { todoList: { $set: isOnTodoList } }
                    )
            }
        }
    });
    setTaskTodoCallback(updatedStatus);
    return updatedStatus;
}

export function isTaskComplete(taskId, area, taskState) {
    const taskStatus = taskState ? taskState : getFromLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_TASKS_STATE);
    return taskStatus[area]['tasks'][taskId] && taskStatus[area]['tasks'][taskId].complete;
}

export function isTaskOnTodoList(taskId, area, taskState) {
    const taskStatus = taskState ? taskState : getFromLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_TASKS_STATE);
    return taskStatus[area]['tasks'][taskId] && taskStatus[area]['tasks'][taskId].todoList;
}

export function applyFilters(tasks, area, filterFunctions) {
    return tasks.filter(task => {
        let status = true;
        filterFunctions.forEach(filterFunction => status = status && filterFunction(task, area));
        return status;
    });
}

export function getMaxCompletableTasks(unlockedRegions) {
    const maxTasks = {
        Total: taskData.taskCounts.Common.Total,
        Easy: taskData.taskCounts.Common.Easy,
        Medium: taskData.taskCounts.Common.Medium,
        Hard: taskData.taskCounts.Common.Hard,
        Elite: taskData.taskCounts.Common.Elite,
        Master: taskData.taskCounts.Common.Master,
    }
    unlockedRegions.forEach(region => {
        const regionValues = taskData.taskCounts[region];
        maxTasks.Total = maxTasks.Total + regionValues.Total;
        maxTasks.Easy = maxTasks.Easy + regionValues.Easy;
        maxTasks.Medium = maxTasks.Medium + regionValues.Medium;
        maxTasks.Hard = maxTasks.Hard + regionValues.Hard;
        maxTasks.Elite = maxTasks.Elite + regionValues.Elite;
        maxTasks.Master = maxTasks.Master + regionValues.Master;
    })
    return maxTasks;
}