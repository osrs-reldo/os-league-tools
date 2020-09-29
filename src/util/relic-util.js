import relicData from '../resources/relicData.json';

export const MAX_POINTS = 12000;
export const RELIC_UNLOCKS = [0, 500, 1500, 3000, 6000, 12000];

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

    const relicStateCopy = Object.assign({}, currentRelicState);
    if (!relicStateCopy[tierId]) {
        relicStateCopy[tierId] = {};
    }

    if (relicId === 3) {
        relicStateCopy[tierId]['passive'] = true;
    } else {
        relicStateCopy[tierId]['relic'] = relicId;
    }
    console.log('setting new relic state to: ' + Object.toString(relicStateCopy));
    return relicStateCopy;
}

export function lockRelicInState(currentRelicState, relicKey) {
    const [tierId, relicId] = getRelicIndices(relicKey);

    const relicStateCopy = Object.assign({}, currentRelicState);
    if (!relicStateCopy[tierId]) {
        relicStateCopy[tierId] = {};
    }

    if (relicId === 3) {
        relicStateCopy[tierId]['passive'] = false;
    } else {
        relicStateCopy[tierId]['relic'] = -1;
    }
    return relicStateCopy;
}

export function isRelicUnlocked(currentRelicState, relicKey) {
    if (!relicKey) {
        return false;
    }

    const [tierId, relicId] = getRelicIndices(relicKey);

    if (relicId === 3) {
        return currentRelicState && currentRelicState[tierId] && currentRelicState[tierId]['passive'];
    } else {
        return currentRelicState && currentRelicState[tierId] && currentRelicState[tierId]['relic'] === relicId;
    }
}