import relicData from '../resources/relicData.json';
import { LOCALSTORAGE_KEYS } from './browser-util';
import { getFromLocalStorage } from '../util/browser-util';
import update from 'immutability-helper';
import taskData from '../resources/taskData.json';

export const MAX_POINTS = 15000;
export const RELIC_UNLOCKS = [0, 500, 2000, 4000, 7500, 15000];

export function getRelicKey(tierId, relicId) {
    return [tierId + 1, relicId + 1].join(',');
}

export function getRelicIndices(key) {
    const [tierId, relicId] = key.split(',');
    return [tierId - 1, relicId - 1];
}

export function getRelicInfo(relicKey) {
    const [tierId, relicId] = getRelicIndices(relicKey);
    return relicData[tierId].relics[relicId];
}

export function unlockRelicInState(currentRelicState, relicKey) {
    const [tierId, relicId] = getRelicIndices(relicKey);

    const stateWithPassive = immutablyUpdateRelicState(currentRelicState, tierId, 'passive', true);
    return immutablyUpdateRelicState(stateWithPassive, tierId, 'relic', relicId);
}

export function lockRelicInState(currentRelicState, relicKey) {
    const [tierId,] = getRelicIndices(relicKey);

    const stateWithPassive = immutablyUpdateRelicState(currentRelicState, tierId, 'passive', false);
    return immutablyUpdateRelicState(stateWithPassive, tierId, 'relic', -1);
}

export function isPassiveRelic(relicKey) {
    const [, relicId] = getRelicIndices(relicKey);
    return relicId === 3;
}

function immutablyUpdateRelicState(currentRelicState, tierId, fieldToUpdate, valueToUpdate) {
    return update(currentRelicState, {
        [tierId]: prevTierState =>
            update(prevTierState || {},
                { [fieldToUpdate]: { $set: valueToUpdate } }
            )
    });
}

export function isRelicUnlocked(relicKey, unlockedRelics) {
    if (!relicKey) {
        return false;
    }

    const [tierId, relicId] = getRelicIndices(relicKey);
    const relics = unlockedRelics ? unlockedRelics : getFromLocalStorage(LOCALSTORAGE_KEYS.UNLOCKED_RELICS, {});

    if (relicId === 3) {
        return relics && relics[tierId] && relics[tierId]['passive'];
    } else {
        return relics && relics[tierId] && relics[tierId]['relic'] === relicId;
    }
}

export function getPointsToNextRelic(currentPoints) {
    for (var i = 0; i < RELIC_UNLOCKS.length; i++) {
        if (currentPoints < RELIC_UNLOCKS[i]) {
            return RELIC_UNLOCKS[i] - currentPoints;
        }
    }
    return 0;
}

export function getMaxCompletablePoints(unlockedRegions) {
    const maxTasks = {
        Total: taskData.pointCounts.Common.Total,
        Easy: taskData.pointCounts.Common.Easy,
        Medium: taskData.pointCounts.Common.Medium,
        Hard: taskData.pointCounts.Common.Hard,
        Elite: taskData.pointCounts.Common.Elite,
        Master: taskData.pointCounts.Common.Master,
    }
    unlockedRegions.forEach(region => {
        const regionValues = taskData.pointCounts[region];
        maxTasks.Total = maxTasks.Total + regionValues.Total;
        maxTasks.Easy = maxTasks.Easy + regionValues.Easy;
        maxTasks.Medium = maxTasks.Medium + regionValues.Medium;
        maxTasks.Hard = maxTasks.Hard + regionValues.Hard;
        maxTasks.Elite = maxTasks.Elite + regionValues.Elite;
        maxTasks.Master = maxTasks.Master + regionValues.Master;
    })
    return maxTasks;
}
