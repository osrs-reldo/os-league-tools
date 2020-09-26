import React from "react";

export function getFormatters() {
    return {
        levelFormatter: levelFormatter,
        iconFormatter: iconFormatter,
        amountFormatter: amountFormatter,
        outputListFormatter: outputListFormatter,
        inputListFormatter: inputListFormatter,
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
    const expMultiplier = exp.expMultiplierCallback(row.expMultipliers);
    return calcActionsRemaining(exp.current, exp.target, row.exp, expMultiplier);
}

function outputListFormatter(cell, row, rowIndex, exp) {
    const expMultiplier = exp.expMultiplierCallback(row.expMultipliers);
    const countMultiplier = exp.countMultiplierCallback(row.outputMultipliers);
    return itemListFormatter(cell, expMultiplier, countMultiplier, exp.current, exp.target, row.exp)
}

function inputListFormatter(cell, row, rowIndex, exp) {
    const expMultiplier = exp.expMultiplierCallback(row.expMultipliers);
    const countMultiplier = exp.countMultiplierCallback(row.inputMultipliers);
    return itemListFormatter(cell, expMultiplier, countMultiplier, exp.current, exp.target, row.exp)
}

function itemListFormatter(cell, expMultiplier, countMultiplier, curExp, targetExp, expPerAction) {
    const numOfActions = calcActionsRemaining(curExp, targetExp, expPerAction, expMultiplier);
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
    return isSkillingProdigy ? Math.min(99, currentLevel + 12) : currentLevel;
}