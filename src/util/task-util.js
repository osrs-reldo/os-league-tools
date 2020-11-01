import React from "react";
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../util/browser-util';
import update from 'immutability-helper';
import { InlineIcon } from '@iconify/react';
import addToListIcon from '@iconify/icons-mdi/text-box-plus-outline';
import removeFromListIcon from '@iconify/icons-mdi/text-box-remove-outline';
import checkedIcon from '@iconify/icons-mdi/check-circle-outline';
import uncheckedIcon from '@iconify/icons-mdi/checkbox-blank-circle-outline';
import taskData from '../resources/taskData.json';

export const DIFFICULTY_POINTS = {
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
            <div className='clickable completed' onClick={() => props.updateTaskCallback(false, row.id)}>
                <InlineIcon icon={checkedIcon} height='1.25rem' />
            </div>
        );
    }
    return (
        <div className='clickable' onClick={() => props.updateTaskCallback(true, row.id)}>
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
    const isComplete = isTaskComplete(row.id, props.area, props.taskStatus);
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
    const isOnTodoList = isTaskOnTodoList(row.id, props.taskStatus);
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

export function isTaskComplete(taskId, area, taskState) {
    return taskState.tasks.includes(taskId);
}

export function isTaskOnTodoList(taskId, taskState) {
    return taskState.todoList.includes(taskId);
}

export function applyFilters(tasks, area, filterFunctions) {
    return tasks.filter(task => {
        let status = true;
        filterFunctions.forEach(filterFunction => status = status && filterFunction(task, area));
        return status;
    });
}

export function getCompletedTasksInArea(area, taskStatus) {
    const completedTasks = [];
    taskStatus.tasks.forEach(taskId => {
        const task = taskData.tasksById[taskId];
        if (task.area === area) {
            completedTasks.push(taskId);
        }
    })
    return completedTasks;
}

export function getCompletedTasksWithDifficulty(difficulty, taskStatus) {
    const completedTasks = [];
    taskStatus.tasks.forEach(taskId => {
        const task = taskData.tasksById[taskId];
        if (task.difficulty === difficulty) {
            completedTasks.push(taskId);
        }
    })
    return completedTasks;
}

export function getPointsEarned(taskStatus, area, difficulty) {
    let totalPoints = 0;
    taskStatus.tasks.forEach(taskId => {
        const task = taskData.tasksById[taskId];
        if (area) {
            if (task.area === area) {
                totalPoints += DIFFICULTY_POINTS[task.difficulty];
            }
        } else if (difficulty) {
            if (task.difficulty === difficulty) {
                totalPoints += DIFFICULTY_POINTS[task.difficulty];
            }
        } else {
            totalPoints += DIFFICULTY_POINTS[task.difficulty];
        }
    })
    return totalPoints;
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

export function getTaskPointsOnTodoList(taskStatus, regions) {
    const todoListStatus = {
        'tasks': 0,
        'points': 0
    }

    taskStatus.todoList.forEach(taskId => {
        const task = taskData.tasksById[taskId];
        if (regions.includes(task.area)) {
            const pointValue = DIFFICULTY_POINTS[task.difficulty]
            todoListStatus.tasks = todoListStatus.tasks + 1
            todoListStatus.points = todoListStatus.points + pointValue
        }
    })
    return todoListStatus;
}