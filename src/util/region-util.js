export const MAX_TASKS = 5000;
export const REGION_UNLOCKS = [0, 250, 500, 1000, 2500, 5000];
export const REGIONS = [
    "Asgarnia",
    "Desert",
    "Fremennik",
    "Kandarin",
    "Karamja",
    "Misthalin",
    "Morytania",
    "Tirannwn",
    "Wilderness",
];

export function isRegionUnlocked(region) {
    // TODO placeholder
    return ['misthalin', 'karamja', 'tirannwn', 'fremennik', 'kandarin'].includes(region);
}
