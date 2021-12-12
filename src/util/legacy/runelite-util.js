import { getFromLocalStorage, LOCALSTORAGE_KEYS, updateLocalStorage } from './browser-util';
import taskData from '../../resources/legacy/taskData.json';
import relicData from '../../resources/legacy/relicData.json';
import { INITIAL_TASKS_STATE_V3 } from '../../hooks/legacy/useTaskStatus';

const TASKS_BY_NAME = getTaskLookupByName();
const RELICS_BY_NAME = getRelicLookupByName();
const RELIC_ENUM_TO_NAME = {
    ENDLESS_HARVEST: 'Endless Harvest',
    PRODUCTION_MASTER: 'Production Master',
    SKILLING_PRODIGY: 'Skilling Prodigy',
    FAIRYS_FLIGHT: "Fairy's Flight",
    ETERNAL_JEWELLER: 'Eternal Jeweller',
    LAST_RECALL: 'Last Recall',
    QUICK_SHOT: 'Quick Shot',
    FLUID_STRIKES: 'Fluid Strikes',
    DOUBLE_CAST: 'Double Cast',
    TREASURE_SEEKER: 'Treasure Seeker',
    UNNATURAL_SELECTION: 'Unnatural Selection',
    THE_BOTANIST: 'Botanist',
    INFERNAL_GATHERING: 'Infernal Gathering',
    EQUILIBRIUM: 'Equilibrium',
    DRAINING_STRIKES: 'Draining Strikes',
    EXPLODING_ATTACKS: 'Exploding Attacks',
    WEAPON_SPECIALIST: 'Weapon Specialist',
};

export default async function updateLocalStorageFromRuneliteJson(json) {
    try {
        const runeliteImport = runeliteJsonToStorageFormat(json);
        for (const [key, value] of Object.entries(runeliteImport)) {
            if (key === 'tasks') {
                const tasksImport = JSON.parse(value);
                const tasks = getFromLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_TASKS_STATE_V3);
                tasks.tasks = tasksImport;
                updateLocalStorage('tasks', tasks);
            } else {
                updateLocalStorage(key, JSON.parse(value));
            }
        }
        return {
            success: true,
            message: runeliteImport,
        };
    } catch (e) {
        return {
            success: false,
            message: `Error parsing the import data: ${e.message}`,
        };
    }
}

function getTaskLookupByName() {
    const lookup = {};
    taskData.tasks.forEach(task => {
        lookup[sanitizeTaskName(task.name)] = task;
    });
    return lookup;
}

function getRelicLookupByName() {
    const lookup = {};
    relicData.forEach((slot, slotIndex) => {
        slot.relics.forEach((relic, relicIndex) => {
            lookup[relic.name] = {
                slot: slotIndex,
                relic: {
                    passive: true,
                    relic: relicIndex,
                },
            };
        });
    });
    return lookup;
}

function isValidRuneliteJson(json) {
    return (
        Object.prototype.hasOwnProperty.call(json, 'relics') &&
        Object.prototype.hasOwnProperty.call(json, 'areas') &&
        Object.prototype.hasOwnProperty.call(json, 'tasks')
    );
}

function isOldVersion(json) {
    return Object.prototype.hasOwnProperty.call(json, 'unlockedRegions');
}

function runeliteJsonToStorageFormat(json) {
    const parsedJson = JSON.parse(json);
    if (isOldVersion(parsedJson)) {
        throw new Error(
            'Your Runelite plugin is out of date! Update your client by closing and reopening Runelite, then try importing again.'
        );
    } else if (!isValidRuneliteJson(parsedJson)) {
        throw new Error('The Runelite import data is invalid.');
    }

    const storageFormat = {};
    storageFormat[LOCALSTORAGE_KEYS.TASKS] = JSON.stringify(extractRuneliteTasks(parsedJson));
    storageFormat[LOCALSTORAGE_KEYS.UNLOCKED_REGIONS] = JSON.stringify(extractRuneliteAreas(parsedJson));
    storageFormat[LOCALSTORAGE_KEYS.UNLOCKED_RELICS] = JSON.stringify(extractRuneliteRelics(parsedJson));

    return storageFormat;
}

function extractRuneliteTasks(runeliteJson) {
    const tasks = runeliteJson.tasks
        .filter(task => task.completed)
        .map(task => {
            const match = TASKS_BY_NAME[sanitizeTaskName(task.name)];
            if (!match) {
                throw new Error(`Task match not found for ${task.name}`);
            }
            return match.id;
        });

    return tasks;
}

function extractRuneliteAreas(runeliteJson) {
    return runeliteJson.areas.map(area => toPascalCase(area));
}

function extractRuneliteRelics(runeliteJson) {
    const relics = {};
    runeliteJson.relics.forEach(relic => {
        const relicName = RELIC_ENUM_TO_NAME[relic];
        if (!relicName) {
            throw new Error(`Relic name not found for enum: ${relic}`);
        }
        const matched = RELICS_BY_NAME[relicName];
        if (!matched) {
            throw new Error(`Relic match not found for ${relicName}`);
        }
        relics[matched.slot] = matched.relic;
    });

    return relics;
}

function toPascalCase(areaName) {
    if (typeof areaName !== 'string') {
        return '';
    }
    const lowerName = areaName.toLowerCase();
    return lowerName.charAt(0).toUpperCase() + lowerName.slice(1);
}

function sanitizeTaskName(taskName) {
    const sanitizedName = taskName.replace(/,/g, '');
    return sanitizedName.toLowerCase();
}
