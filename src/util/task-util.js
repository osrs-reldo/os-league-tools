import React from "react";
import { Form } from "react-bootstrap";
import { getFromLocalStorage, LOCALSTORAGE_KEYS } from '../util/browser-util'
import update from 'immutability-helper';

export const INITIAL_TASKS_STATE = {
    points: 0,
    taskCount: { total: 0, easy: 0, medium: 0, hard: 0, elite: 0, master: 0, },
    common: { points: 0, taskCount: 0, tasks: {} },
    asgarnia: { points: 0, taskCount: 0, tasks: {} },
    desert: { points: 0, taskCount: 0, tasks: {} },
    fremennik: { points: 0, taskCount: 0, tasks: {} },
    kandarin: { points: 0, taskCount: 0, tasks: {} },
    karamja: { points: 0, taskCount: 0, tasks: {} },
    misthalin: { points: 0, taskCount: 0, tasks: {} },
    morytania: { points: 0, taskCount: 0, tasks: {} },
    tirannwn: { points: 0, taskCount: 0, tasks: {} },
    wilderness: { points: 0, taskCount: 0, tasks: {} },
}

const INITIAL_TASK_STATE = {
    complete: false,
    todoList: false,
}

const DIFFICULTY_POINTS = {
    'easy': 10,
    'medium': 50,
    'hard': 100,
    'elite': 250,
    'master': 500,
}

export function getFormatters() {
    return {
        completedFormatter: completedFormatter,
        pointsFormatter: pointsFormatter,
    }
}

export function getRenderers() {
    return {
        pageButtonRenderer: pageButtonRenderer,
    }
}

function completedFormatter(cell, row, rowIndex, props) {
    return (
        <Form.Check
            checked={isTaskComplete(row.id, props.area, props.taskStatus)}
            onChange={(event) => {
                props.updateTaskCallback(event.target.checked, row.id, row.difficulty);
            }}
        />
    );
}

function pointsFormatter(cell, row, rowIndex) {
    const points = DIFFICULTY_POINTS[row.difficulty];
    if (!points) {
        return 0;
    }
    return points;
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

export function isTaskComplete(taskId, area, taskState) {
    const taskStatus = taskState ? taskState : getFromLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_TASKS_STATE);
    return taskStatus[area]['tasks'][taskId] && taskStatus[area]['tasks'][taskId].complete;
}