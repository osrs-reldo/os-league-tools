import React from 'react';
import { InlineIcon } from '@iconify/react';
import checkedIcon from '@iconify/icons-mdi/check-circle-outline';
import uncheckedIcon from '@iconify/icons-mdi/checkbox-blank-circle-outline';
import closeIcon from '@iconify/icons-mdi/close';
import plusIcon from '@iconify/icons-mdi/plus';
import taskData from '../resources/taskData.json';
import Badge from 'react-bootstrap/Badge';
import calculatorData from '../resources/calculatorData.json';

export const DIFFICULTY_POINTS = {
    Easy: 10,
    Medium: 50,
    Hard: 100,
    Elite: 250,
    Master: 500,
};

export function getFormatters() {
    return {
        completedFormatter: completedFormatter,
        pointsFormatter: pointsFormatter,
        difficultyFormatter: difficultyFormatter,
        nameFormatter: nameFormatter,
        skillsFormatter: skillsFormatter,
        manageFormatter: manageFormatter,
    };
}

export function getRenderers() {
    return {
        pageButtonRenderer: pageButtonRenderer,
        pageListRenderer: pageListRenderer,
        sizePerPageRenderer: sizePerPageRenderer,
    };
}

function completedFormatter(cell, row, rowIndex, props) {
    const isComplete = isTaskComplete(row.id, props.taskStatus);
    return (
        <div className={isComplete ? 'completed' : ''}>
            <InlineIcon icon={isComplete ? checkedIcon : uncheckedIcon} height='20px' />
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
        className = 'completed';
    }

    return (
        <div className={className}>
            {cell}
            <div className='small'>{row.description}</div>
        </div>
    );
}

function manageFormatter(cell, row, rowIndex, props) {
    const isOnTodoList = isTaskOnTodoList(row.id, props.taskStatus);
    const isHidden = isTaskHidden(row.id, props.taskStatus);
    return (
        <div className='d-flex justify-content-around'>
            <div className='clickable mb-1 hover-highlight' onClick={() => props.setTaskTodo(!isOnTodoList, row.id)}>
                <InlineIcon icon={isOnTodoList ? closeIcon : plusIcon} />
                {' To-do'}
            </div>
            <div className='clickable hover-highlight' onClick={() => props.setTaskHidden(!isHidden, row.id)}>
                <InlineIcon icon={isHidden ? plusIcon : closeIcon} />
                {isHidden ? ' Unhide' : ' Hide'}
            </div>
        </div>
    );
}

function skillsFormatter(cell, row, rowIndex, props) {
    return cell.map(skill => {
        const name = skill.name.toLowerCase();
        const isReqMet = meetsSkillRequirement(
            props.hiscores,
            name,
            skill.level,
            skill.boostable,
            props.isSkillingProdigy
        );
        const icon = `/img/${name}.gif`;
        return (
            <Badge pill key={name} variant={props.hiscores ? (isReqMet ? 'success' : 'danger') : 'light'}>
                <img src={icon} alt={skill.name} title={skill.name} /> {skill.level}
            </Badge>
        );
    });
}

function pageButtonRenderer({ page, active, disable, title, onPageChange }) {
    const handleClick = e => {
        e.preventDefault();
        onPageChange(page);
    };
    const activeStyle = {
        padding: '6px 12px',
    };
    if (active) {
        activeStyle.backgroundColor = '#484e53';
        activeStyle.color = 'white';
    } else {
        activeStyle.backgroundColor = '#343a40';
        activeStyle.color = 'white';
    }
    return (
        <li key={page} className='align-self-center' style={{ display: 'inline' }}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href='#' onClick={handleClick} style={activeStyle}>
                {page}
            </a>
        </li>
    );
}

function pageListRenderer({ pages, onPageChange }) {
    return (
        <div>
            <ul className='list-unstyled'>{pages.map(page => pageButtonRenderer({ ...page, onPageChange }))}</ul>
        </div>
    );
}

function sizePerPageRenderer({ options, currSizePerPage, onSizePerPageChange }) {
    return (
        <div className='btn-group mb-2' role='group'>
            {options.map(option => {
                const isSelected = currSizePerPage === `${option.page}`;
                return (
                    <button
                        key={option.text}
                        type='button'
                        onClick={() => onSizePerPageChange(option.page)}
                        className={`btn ${isSelected ? 'btn-light' : 'btn-secondary'}`}
                    >
                        {option.text}
                    </button>
                );
            })}
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

export function isTaskCompletable(taskId, hiscores, isSkillingProdigy) {
    const taskReqs = taskData.tasksById[taskId].skills;
    for (const skillReq of taskReqs) {
        if (
            !meetsSkillRequirement(
                hiscores,
                skillReq.name.toLowerCase(),
                skillReq.level,
                skillReq.boostable,
                isSkillingProdigy
            )
        ) {
            return false;
        }
    }
    return true;
}

export function meetsSkillRequirement(hiscores, reqSkill, reqLevel, isBoostable, isSkillingProdigy) {
    let currentLevel = hiscores && hiscores.skills[reqSkill] && hiscores.skills[reqSkill].level;
    if (isBoostable && isSkillingProdigy) {
        const isNoncombatSkill =
            calculatorData.calculators[reqSkill] && !calculatorData.calculators[reqSkill].isCombatSkill;
        currentLevel = isNoncombatSkill ? currentLevel + 12 : currentLevel;
    }
    return currentLevel >= reqLevel;
}

export function removeCompletedFromTodo(taskStatus, setIsTodoCallback) {
    let idsToRemove = [];
    taskStatus.todoList.forEach(taskId => {
        if (isTaskComplete(taskId, taskStatus)) {
            idsToRemove.push(taskId);
        }
    });
    setIsTodoCallback(idsToRemove, false);
}

export function applyFilters(tasks, area, filterFunctions) {
    return tasks.filter(task => {
        let status = true;
        filterFunctions.forEach(filterFunction => (status = status && filterFunction(task, area)));
        return status;
    });
}

export function isTaskCompletableWithRegions(taskId, unlockedRegions) {
    const task = taskData.tasksById[taskId];
    if (!unlockedRegions.includes(task.area)) {
        return false;
    }

    const reqAllOfRegions = task.additionalAreas.allOf;
    if (reqAllOfRegions) {
        console.log(`task ${task.name} requires regions ${reqAllOfRegions}`);
        for (const reqReqion of reqAllOfRegions) {
            if (!unlockedRegions.includes(reqReqion)) {
                return false;
            }
        }
    }

    const reqOneOfRegions = task.additionalAreas.oneOf;
    if (reqOneOfRegions) {
        console.log(`task ${task.name} requires one of regions ${reqOneOfRegions}`);
        for (const reqReqion of reqOneOfRegions) {
            if (unlockedRegions.includes(reqReqion)) {
                return true;
            }
        }
    }

    return true;
}

export function getCompletedTasksInArea(area, taskStatus) {
    const completedTasks = [];
    taskStatus.tasks.forEach(taskId => {
        const task = taskData.tasksById[taskId];
        if (task.area === area) {
            completedTasks.push(taskId);
        }
    });
    return completedTasks;
}

export function getCompletedTasksWithDifficulty(difficulty, taskStatus) {
    const completedTasks = [];
    taskStatus.tasks.forEach(taskId => {
        const task = taskData.tasksById[taskId];
        if (task.difficulty === difficulty) {
            completedTasks.push(taskId);
        }
    });
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
    });
    return totalPoints;
}

export function getMaxCompletableTaskPoints(unlockedRegions, taskStatus) {
    const maxTaskPoints = {
        tasks: {
            Total: 0,
            Easy: 0,
            Medium: 0,
            Hard: 0,
            Elite: 0,
            Master: 0,
        },
        points: {
            Total: 0,
            Easy: 0,
            Medium: 0,
            Hard: 0,
            Elite: 0,
            Master: 0,
        },
    };
    for (let [id, task] of Object.entries(taskData.tasksById)) {
        if (isTaskCompletableWithRegions(id, unlockedRegions) && !isTaskHidden(id, taskStatus)) {
            const region = task.area;
            const difficulty = task.difficulty;
            const pointValue = DIFFICULTY_POINTS[difficulty];
            maxTaskPoints.tasks.Total += 1;
            maxTaskPoints.points.Total += pointValue;
            maxTaskPoints.tasks[difficulty] += 1;
            maxTaskPoints.points[difficulty] += pointValue;
            maxTaskPoints.tasks[region] = maxTaskPoints.tasks[region] ? maxTaskPoints.tasks[region] + 1 : 1;
            maxTaskPoints.points[region] = maxTaskPoints.points[region]
                ? maxTaskPoints.points[region] + pointValue
                : pointValue;
        }
    }
    return maxTaskPoints;
}

export function getTaskPointsOnTodoList(taskStatus, regions) {
    const todoListStatus = {
        tasks: 0,
        points: 0,
    };

    taskStatus.todoList.forEach(taskId => {
        const task = taskData.tasksById[taskId];
        if (regions.includes(task.area) && !isTaskComplete(taskId, taskStatus) && !isTaskHidden(taskId, taskStatus)) {
            const pointValue = DIFFICULTY_POINTS[task.difficulty];
            todoListStatus.tasks = todoListStatus.tasks + 1;
            todoListStatus.points = todoListStatus.points + pointValue;
        }
    });
    return todoListStatus;
}
