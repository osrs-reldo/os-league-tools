import React from "react";

export function getFormatters() {
    return {
        levelFormatter: levelFormatter,
        iconFormatter: iconFormatter,
        amountFormatter: amountFormatter,
        outputListFormatter: outputListFormatter,
        inputListFormatter: inputListFormatter,
        expFormatter: expFormatter
    }
}

function levelFormatter(cell, row, rowIndex, props) {
    const boostedLevel = getBoostedLevel(props.level, props.isSkillingProdigy);
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

function expFormatter(cell, row, rowIndex, props) {
    return calcExpPerAction(
        cell,
        props.baseMultiplier,
        props.expMultiplier,
        row.expMultipliers,
        props.totalLevel
    );
}

function amountFormatter(cell, row, rowIndex, props) {
    return calcActionsRemaining(
        props.current,
        props.target,
        row.exp,
        props.baseMultiplier,
        props.expMultiplier,
        row.expMultipliers,
        props.totalLevel
    );
}

function outputListFormatter(cell, row, rowIndex, props) {
    const countMultiplier = props.countMultiplier.apply(row.outputMultipliers);
    const actionsRemaining = calcActionsRemaining(
        props.current,
        props.target,
        row.exp,
        props.baseMultiplier,
        props.expMultiplier,
        row.expMultipliers,
        props.totalLevel
    );
    if (props.hasBotanist) {
        return itemListBotanistFormatter(cell, countMultiplier, actionsRemaining);
    } else {
        return itemListFormatter(cell, countMultiplier, actionsRemaining);
    }
}

function inputListFormatter(cell, row, rowIndex, props) {
    const countMultiplier = props.countMultiplier.apply(row.inputMultipliers);
    const actionsRemaining = calcActionsRemaining(
        props.current,
        props.target,
        row.exp,
        props.baseMultiplier,
        props.expMultiplier,
        row.expMultipliers,
        props.totalLevel
    );
    if (props.hasDoubleCast) {
        return itemListDoubleCastFormatter(cell, countMultiplier, actionsRemaining);
    } else {
        return itemListFormatter(cell, countMultiplier, actionsRemaining);
	}

}

function itemListFormatter(cell, countMultiplier, actionsRemaining) {
    return (
        <ul>
            {cell.map(item => {
                if (item.amount) {
                    var amount = actionsRemaining * item.amount * item.chance * countMultiplier;
                    amount = +amount.toFixed(2);
                    return <li key={item.name}>{amount + ' ' + item.name}</li>;
                }
                return <li key={item.name}>{item.name}</li>;
            })}
        </ul>
    );
}

function itemListDoubleCastFormatter(cell, countMultiplier, actionsRemaining) {
    return (
        <ul>
            {cell.map(item => {
                if (item.amount) {
                    var amount
                    if (item.name.includes('rune')){
                        amount = actionsRemaining * item.amount * (item.chance * 0.1) * countMultiplier;
                        amount = Math.ceil(amount)
                    } else {
                        amount = actionsRemaining * item.amount * item.chance * countMultiplier;
                        amount = +amount.toFixed(2);
                    }
                    return <li key={item.name}>{amount + ' ' + item.name}</li>;
                }
                return <li key={item.name}>{item.name}</li>;
            })}
        </ul>
    );
}

function itemListBotanistFormatter(cell, countMultiplier, actionsRemaining) {
    return (
        <ul>
            {cell.map(item => {
                if (item.amount) {
                    var amount = actionsRemaining * item.amount * item.chance * countMultiplier;
                    amount = +amount.toFixed(2);
                    amount = amount*2;
                    return <li key={item.name}>{amount + ' ' + item.name}</li>;
                }
                return <li key={item.name}>{item.name}</li>;
            })}
        </ul>
    );
}


function calcExpPerAction(baseExp, baseMultiplierStr, expMultiplier, validMultipliers, totalLevel) {
    const baseMultiplier = parseInt(baseMultiplierStr);
    const secondaryMultiplier = baseMultiplier * expMultiplier.apply(validMultipliers);
    const equilibriumBonus = expMultiplier.get().hasOwnProperty("G0") ? totalLevel *.1 : 0;
    return Math.round((baseExp * secondaryMultiplier + equilibriumBonus) * 10) / 10;
}

export function calcActionsRemaining(curExp, targetExp, activityExp, baseMultiplierStr, expMultiplier, validMultipliers, totalLevel) {
    const expLeft = targetExp - curExp;
    const expPerAction = calcExpPerAction(activityExp, baseMultiplierStr, expMultiplier, validMultipliers, totalLevel);
    return Math.ceil(expLeft / expPerAction);
}

export function getBoostedLevel(currentLevel, isSkillingProdigy) {
    return isSkillingProdigy ? Math.min(99, currentLevel + 12) : currentLevel;
}