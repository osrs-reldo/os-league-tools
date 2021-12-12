import React from 'react';
import { OverlayTrigger, Badge, Tooltip, Form } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import closeIcon from '@iconify/icons-mdi/close';
import _ from 'lodash';
import { isRelicUnlocked } from './relic-util';
import calculatorData from '../../resources/legacy/calculatorData.json';
import { getExpForLevel, getLevelForExp } from './exp-table';

export function getFormatters() {
    return {
        nameFormatter,
        levelFormatter,
        amountFormatter,
        outputListFormatter,
        inputListFormatter,
        expFormatter,
        inputAmountFormatter,
        plannerTotalExpFormatter,
        deleteFormatter,
    };
}

function nameFormatter(cell, row) {
    return (
        <>
            {row.icon && <img src={row.icon} alt='' />}
            {` ${cell}`}
            {row.tooltip && (
                <OverlayTrigger placement='top' overlay={<Tooltip>{row.tooltip}</Tooltip>}>
                    <Badge variant='dark' pill>
                        ...
                    </Badge>
                </OverlayTrigger>
            )}
            <div className='small'>{row.subtitle}</div>
        </>
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
    let countMultiplier = props.countMultiplier.apply(row.outputMultipliers);
    if (props.useBotanist) {
        countMultiplier *= 2;
    }
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
    return itemListFormatter(cell, countMultiplier, actionsRemaining);
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
    return itemListFormatter(cell, countMultiplier, actionsRemaining, true, props.useDoubleCast);
}

function itemListFormatter(cell, countMultiplier, actionsRemaining, roundAmounts = false, useDoubleCast = false) {
    return (
        <ul className='mb-0'>
            {cell.map(item => {
                if (item.amount) {
                    const chanceMultiplier = useDoubleCast && item.name.includes('rune') ? 0.1 : 1;
                    let amount = actionsRemaining * item.amount * chanceMultiplier * countMultiplier;
                    amount = roundAmounts ? Math.ceil(amount) : +amount.toFixed(2);
                    return <li key={item.name}>{`${amount} ${item.name}`}</li>;
                }
                return <li key={item.name}>{item.name}</li>;
            })}
        </ul>
    );
}

function inputAmountFormatter(cell, row, rowIndex, { onChange }) {
    const debouncedOnChange = _.debounce(onChange, 700);
    return (
        <Form.Control
            defaultValue={row.amount}
            onChange={event => debouncedOnChange(row.id, event.target.value)}
            style={{ width: '100px' }}
            type='number'
        />
    );
}

function plannerTotalExpFormatter(cell, row, rowIndex, { baseMultiplier, expMultiplier, totalLevel }) {
    const expEach = calcExpPerAction(
        row.exp,
        baseMultiplier,
        expMultiplier,
        row.expMultipliers,
        totalLevel,
        row.expActions
    );
    const totalGained = expEach * row.amount;
    return +totalGained.toFixed(2);
}

function deleteFormatter() {
    return <Icon icon={closeIcon} width='20px' height='20px' />;
}

function calcExpPerAction(baseExp, baseMultiplierStr, expMultiplier, validMultipliers, totalLevel, numExpActions) {
    const baseMultiplier = parseInt(baseMultiplierStr, 10);
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
    if (!Object.prototype.hasOwnProperty.call(expMultiplier.get(), 'G0')) {
        return 0;
    }
    return totalLevel * 0.1 * numExpActions;
}

export function getBaseMultiplier() {
    if (isRelicUnlocked('6,4')) {
        return '16';
    } else if (isRelicUnlocked('4,4')) {
        return '12';
    } else if (isRelicUnlocked('2,4')) {
        return '8';
    }
    return '5';
}

export function getDefaultCheckedMultipliers(globalMultiplierData, multipliers) {
    const toCheckByDefault = [];
    globalMultiplierData.forEach(multiplier => {
        if (multiplier.autoApply) {
            const checkByDefault = multiplier.autoApply === 'always' || isRelicUnlocked(multiplier.autoApply);
            if (checkByDefault) {
                toCheckByDefault.push(multiplier.id);
                multipliers.add(multiplier.id, multiplier.multiplier, true);
            }
        }
    });
    return toCheckByDefault;
}

export function generatePlannerActivities(skill) {
    const allActions = {};
    calculatorData.calculators[skill].actions.forEach(action => {
        if (allActions[action.category] !== undefined) {
            allActions[action.category].push({
                name: action.name,
                description: action.subtitle,
                value: action.id,
                icon: action.icon,
            });
        } else {
            allActions[action.category] = [
                {
                    name: action.name,
                    description: action.subtitle,
                    value: action.id,
                    icon: action.icon,
                },
            ];
        }
    });

    const activities = [];
    calculatorData.calculators[skill].categories.forEach(category => {
        activities.push({
            type: 'group',
            name: category.label,
            items: allActions[category.label],
        });
    });
    return activities;
}

export function getCalcData(skill, id) {
    return calculatorData.calculators[skill].actions.find(action => action.id === id);
}

export function calculateTotalGained(currentExp, plannedActivities, baseMultiplier, expMultiplier, totalLevel) {
    let gainedExp = 0;
    plannedActivities.forEach(activity => {
        const expEach = calcExpPerAction(
            activity.exp,
            baseMultiplier,
            expMultiplier,
            activity.expMultipliers,
            totalLevel,
            activity.expActions
        );
        gainedExp += expEach * activity.amount;
    });

    gainedExp = Math.floor(gainedExp);
    const newExp = currentExp + gainedExp;
    const newLevel = getLevelForExp(newExp);
    const expToNextLevel = getExpForLevel(newLevel + 1) - newExp;

    return {
        exp: newExp,
        level: newLevel,
        gainedExp,
        expToNextLevel,
    };
}
