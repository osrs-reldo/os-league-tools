export const MAX_TASKS = 300;
export const REGION_UNLOCKS = [0, 60, 140, 300];
export const REGIONS = [
    'Asgarnia',
    'Desert',
    'Fremennik',
    'Kandarin',
    'Karamja',
    'Misthalin',
    'Morytania',
    'Tirannwn',
    'Wilderness',
];
export const INITIAL_REGIONS_STATE = ['Misthalin', 'Karamja'];

export function isRegionUnlocked(region, unlockedRegions) {
    return unlockedRegions.includes(region);
}

export function getTasksToNextRegion(currentTasks) {
    for (let i = 0; i < REGION_UNLOCKS.length; i++) {
        if (currentTasks < REGION_UNLOCKS[i]) {
            return REGION_UNLOCKS[i] - currentTasks;
        }
    }
    return 0;
}
