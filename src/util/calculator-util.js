import React from "react";

export function getFormatters() {
    return {
        levelFormatter: levelFormatter,
        iconFormatter: iconFormatter,
        amountFormatter: amountFormatter,
        itemListFormatter: itemListFormatter,
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
            {row.icon && <img src={row.icon} alt={cell} />}
            {' ' + cell}
        </React.Fragment>
    );
}

function amountFormatter(cell, row, rowIndex, exp) {
    return calcActionsRemaining(exp.current, exp.target, row.exp, exp.expMultiplier);
}

function itemListFormatter(cell, row, rowIndex, exp) {
    const numOfActions = calcActionsRemaining(exp.current, exp.target, row.exp, exp.expMultiplier);
    const countMultiplier = exp.countMultiplier || 1
    return (
        <ul>
            {cell.map(item => {
                if (item.amount) {
                    var amount = numOfActions * item.amount * item.chance * countMultiplier;
                    amount = +amount.toFixed(2);
                    return <li key={item.name}>{amount + ' ' + item.name}</li>;
                }
                return <li key={item.name}>{item.name}</li>;
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