import React from "react";
import { InlineIcon } from '@iconify/react';
import addToListIcon from '@iconify/icons-mdi/text-box-plus-outline';
import removeFromListIcon from '@iconify/icons-mdi/text-box-remove-outline';
import checkedIcon from '@iconify/icons-mdi/check-circle-outline';
import uncheckedIcon from '@iconify/icons-mdi/checkbox-blank-circle-outline';
import closeIcon from '@iconify/icons-mdi/close';
import plusIcon from '@iconify/icons-mdi/plus';
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
        difficultyFormatter: difficultyFormatter,
        todoFormatter: todoFormatter,
        nameFormatter: nameFormatter,
        hideFormatter: hideFormatter,
    }
}

export function getRenderers() {
    return {
        pageButtonRenderer: pageButtonRenderer,
        pageListRenderer: pageListRenderer,
        sizePerPageRenderer: sizePerPageRenderer
    }
}

function completedFormatter(cell, row, rowIndex, props) {
    const isComplete = isTaskComplete(row.id, props.taskStatus);
    return (
        <div className={isComplete ? 'completed' : ''}>
            <InlineIcon icon={isComplete ? checkedIcon : uncheckedIcon} height='1.25rem' />
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

function difficultyFormatter(cell, row, rowIndex) {
    const points = pointsFormatter(cell, row, rowIndex);
    return `${cell} (${points})`;
}

function nameFormatter(cell, row, rowIndex, props) {
    let className = '';
    if (isTaskHidden(row.id, props.taskStatus)) {
        className = 'text-muted';
    } else if (isTaskComplete(row.id, props.taskStatus)) {
        className = 'completed'
    }

    return (
        <div className={className}>
            {cell}
            <div className='small'>
                {row.description}
            </div>
        </div>
    );
}

function todoFormatter(cell, row, rowIndex, props) {
    const isOnTodoList = isTaskOnTodoList(row.id, props.taskStatus);
    return (
        <div>
            <InlineIcon icon={isOnTodoList ? removeFromListIcon : addToListIcon} />
            {isOnTodoList ? ' Remove' : ' Add'}
        </div>
    );
}

function hideFormatter(cell, row, rowIndex, props) {
    const isHidden = isTaskHidden(row.id, props.taskStatus);
    return <InlineIcon icon={isHidden ? plusIcon : closeIcon} height='1.25rem' />
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
        activeStyle.backgroundColor = '#343a40';
        activeStyle.color = 'white';
    }
    return (
        <li key={page} style={{ display: "inline" }}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={handleClick} style={activeStyle}>{page}</a>
        </li>
    );
};

function pageListRenderer({ pages, onPageChange }) {
    return (
        <div className="mt-2">
            <ul className="list-unstyled">
                {pages.map(page => (
                    pageButtonRenderer({ ...page, onPageChange })
                ))}
            </ul>
        </div>
    );
  };

function sizePerPageRenderer({ options, currSizePerPage, onSizePerPageChange }) {
    return (
        <div className="btn-group ml-5" role="group">
            {
                options.map((option) => {
                    const isSelected = currSizePerPage === `${option.page}`;
                    return (
                        <button
                            key={ option.text }
                            type="button"
                            onClick={() => onSizePerPageChange(option.page)}
                            className={`btn ${isSelected ? 'btn-light' : 'btn-secondary'}`}
                        >
                            {option.text}
                        </button>
                    );
                })
            }
        </div>
  );
}

export function isTaskComplete(taskId, taskState) {
    return taskState.tasks.includes(taskId);
}

export function isTaskOnTodoList(taskId, taskState) {
    return taskState.todoList.includes(taskId);
}

export function isTaskHidden(taskId, taskState) {
    return taskState.hidden.includes(taskId);
}

export function removeCompletedFromTodo(taskStatus, setIsTodoCallback) {
    let idsToRemove = [];
    taskStatus.todoList.forEach(taskId => {
        if (isTaskComplete(taskId, taskStatus)) {
            idsToRemove.push(taskId);
        }
    })
    setIsTodoCallback(idsToRemove, false);
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

export function getMaxCompletableTasks(unlockedRegions, taskStatus) {
    const maxTasks = {
        Total: 0,
        Easy: 0,
        Medium: 0,
        Hard: 0,
        Elite: 0,
        Master: 0,
    }
    unlockedRegions.forEach(region => {
        const regionValues = taskData.taskCounts[region];
        maxTasks.Total = maxTasks.Total + regionValues.Total;
        maxTasks.Easy = maxTasks.Easy + regionValues.Easy;
        maxTasks.Medium = maxTasks.Medium + regionValues.Medium;
        maxTasks.Hard = maxTasks.Hard + regionValues.Hard;
        maxTasks.Elite = maxTasks.Elite + regionValues.Elite;
        maxTasks.Master = maxTasks.Master + regionValues.Master;
        maxTasks[region] = regionValues.Total;
    })
    taskStatus.hidden.forEach(taskId => {
        const task = taskData.tasksById[taskId];
        maxTasks[task.difficulty] = maxTasks[task.difficulty] - 1;
        maxTasks.Total = maxTasks.Total - 1;
        maxTasks[task.area] = maxTasks[task.area] - 1;
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
        if (regions.includes(task.area) && !isTaskComplete(taskId, taskStatus) && !isTaskHidden(taskId, taskStatus)) {
            const pointValue = DIFFICULTY_POINTS[task.difficulty];
            todoListStatus.tasks = todoListStatus.tasks + 1;
            todoListStatus.points = todoListStatus.points + pointValue;
        }
    })
    return todoListStatus;
}