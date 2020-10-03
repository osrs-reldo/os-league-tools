import React from "react";
import { Form } from "react-bootstrap";

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

function completedFormatter(cell, row, rowIndex) {
    return (
        <Form.Check />
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
