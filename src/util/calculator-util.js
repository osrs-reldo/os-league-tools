import React from 'react';
import { OverlayTrigger, Badge, Tooltip } from 'react-bootstrap';

export function getFormatters() {
    return {
        nameFormatter: nameFormatter,
        levelFormatter: levelFormatter,
        amountFormatter: amountFormatter,
        outputListFormatter: outputListFormatter,
        inputListFormatter: inputListFormatter,
        expFormatter: expFormatter,
    };
}

function nameFormatter(cell, row, rowIndex, props) {
    return (
        <React.Fragment>
            {row.icon && <img src={row.icon} alt='' />}
            {' ' + cell}
            {row.tooltip && (
                <OverlayTrigger placement='top' overlay={<Tooltip>{row.tooltip}</Tooltip>}>
                    <Badge variant='dark' pill>
                        ...
                    </Badge>
                </OverlayTrigger>
            )}
            <div className='small'>{row.subtitle}</div>
        </React.Fragment>
    );
}

function levelFormatter(cell, row, rowIndex, props) {
    const boostedLevel = getBoostedLevel(props.level, props.isSkillingProdigy);
    return <div className={cell <= boostedLevel ? 'unlocked' : 'locked'}>{cell}</div>;
}

function expFormatter(cell, row, rowIndex, props) {
    return calcExpPerAction(
        cell,
        props.baseMultiplier,
        props.expMultiplier,
        row.expMultipliers,
        props.totalLevel,
        row.expActions
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
        props.totalLevel,
        row.expActions
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
        props.totalLevel,
        row.expActions
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
        props.totalLevel,
        row.expActions
    );
    if (props.hasDoubleCast) {
        return itemListDoubleCastFormatter(cell, countMultiplier, actionsRemaining);
    } else {
        return itemListFormatter(cell, countMultiplier, actionsRemaining);
    }
}

function itemListFormatter(cell, countMultiplier, actionsRemaining) {
    return (
        <ul className='mb-0'>
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
        <ul className='mb-0'>
            {cell.map(item => {
                if (item.amount) {
                    var amount;
                    if (item.name.includes('rune')) {
                        amount = actionsRemaining * item.amount * (item.chance * 0.1) * countMultiplier;
                        amount = Math.ceil(amount);
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
        <ul className='mb-0'>
            {cell.map(item => {
                if (item.amount) {
                    var amount = actionsRemaining * item.amount * item.chance * countMultiplier;
                    amount = +amount.toFixed(2);
                    amount = amount * 2;
                    return <li key={item.name}>{amount + ' ' + item.name}</li>;
                }
                return <li key={item.name}>{item.name}</li>;
            })}
        </ul>
    );
}

function calcExpPerAction(baseExp, baseMultiplierStr, expMultiplier, validMultipliers, totalLevel, numExpActions) {
    const baseMultiplier = parseInt(baseMultiplierStr);
    const secondaryMultiplier = baseMultiplier * expMultiplier.apply(validMultipliers);
    const equilibriumBonus = getEquilibriumBonusExp(expMultiplier, totalLevel, numExpActions);
    return Math.round((baseExp * secondaryMultiplier + equilibriumBonus) * 10) / 10;
}

function calcActionsRemaining(
    curExp,
    targetExp,
    activityExp,
    baseMultiplierStr,
    expMultiplier,
    validMultipliers,
    totalLevel,
    numExpActions
) {
    const expLeft = targetExp - curExp;
    const expPerAction = calcExpPerAction(
        activityExp,
        baseMultiplierStr,
        expMultiplier,
        validMultipliers,
        totalLevel,
        numExpActions
    );
    return Math.ceil(expLeft / expPerAction);
}

export function getBoostedLevel(currentLevel, isSkillingProdigy) {
    return isSkillingProdigy ? Math.min(99, currentLevel + 12) : currentLevel;
}

function getEquilibriumBonusExp(expMultiplier, totalLevel, numExpActions) {
    if (!expMultiplier.get().hasOwnProperty('G0')) {
        return 0;
    }
    return totalLevel * 0.1 * numExpActions;
}
