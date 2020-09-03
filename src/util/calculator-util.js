import React from "react";

export function getFormatters() {
    return {
        levelFormatter: levelFormatter,
        iconFormatter: iconFormatter,
        amountFormatter: amountFormatter,
        outputsFormatter: outputsFormatter,
    }
}

function levelFormatter(cell, row, rowIndex, levelData) {
    const boostedLevel = getBoostedLevel(levelData.level, levelData.isSkillingProdigy);
    return (
        <div className={cell <= boostedLevel ? "unlocked" : "locked"}>{cell}</div>
    );
}

function iconFormatter(cell, row) {
    return (
        <React.Fragment>
            <img src={row.icon} alt={cell} />
            {' ' + cell}
        </React.Fragment>
    );
}

function amountFormatter(cell, row, rowIndex, exp) {
    return calcActionsRemaining(exp.current, exp.target, row.exp, exp.expMultiplier);
}

function outputsFormatter(cell, row, rowIndex, exp) {
    const numOfActions = calcActionsRemaining(exp.current, exp.target, row.exp, exp.expMultiplier);
    return (
        <ul>
            {cell.map(output => {
                var amount = numOfActions * output.amount * output.chance * exp.outputMultiplier;
                amount = +amount.toFixed(2);
                return <li key={output.name}>{amount + ' ' + output.name}</li>;
            })}
        </ul>
    );
}

export function calcActionsRemaining(curExp, targetExp, activityExp, expMultiplier) {
    const expLeft = targetExp - curExp;
    const expPerAction = activityExp * expMultiplier;
    return Math.ceil(expLeft / expPerAction);
}

export function getBoostedLevel(currentLevel, isSkillingProdigy) {
    return isSkillingProdigy ? Math.min(99, parseInt(currentLevel) + 10) : currentLevel;
}