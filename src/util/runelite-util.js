import { getFromLocalStorage, LOCALSTORAGE_KEYS, updateLocalStorage } from "./browser-util";
import taskData from '../resources/taskData.json';
import relicData from '../resources/relicData.json';
import { INITIAL_TASKS_STATE_V3 } from '../hooks/useTaskStatus';

const TASKS_BY_NAME = getTaskLookupByName();
const RELICS_BY_NAME = getRelicLookupByName();
const RELIC_ENUM_TO_NAME = {
    ENDLESS_HARVEST: "Endless Harvest",
    PRODUCTION_MASTER: "Production Master",
    SKILLING_PRODIGY: "Skilling Prodigy",
    FAIRYS_FLIGHT: "Fairy's Flight",
    ETERNAL_JEWELLER: "Eternal Jeweller",
    LAST_RECALL: "Last Recall",
    QUICK_SHOT: "Quick Shot",
    FLUID_STRIKES: "Fluid Strikes",
    DOUBLE_CAST: "Double Cast",
    TREASURE_SEEKER: "Treasure Seeker",
    UNNATURAL_SELECTION: "Unnatural Selection",
    THE_BOTANIST: "Botanist",
    INFERNAL_GATHERING: "Infernal Gathering",
    EQUILIBRIUM: "Equilibrium",
    DRAINING_STRIKES: "Draining Strikes",
    EXPLODING_ATTACKS: "Exploding Attacks",
    WEAPON_SPECIALIST: "Weapon Specialist",
}

export async function updateLocalStorageFromRuneliteJson(json) {
    try {
        const runeliteImport = runeliteJsonToStorageFormat(json);
        for (let [key, value] of Object.entries(runeliteImport)) {
            if (key === "tasks") {
                const tasksImport = JSON.parse(value);
                const tasks = getFromLocalStorage(LOCALSTORAGE_KEYS.TASKS, INITIAL_TASKS_STATE_V3);
                tasks.tasks = tasksImport;
                updateLocalStorage("tasks", tasks);
            } else {
                updateLocalStorage(key, JSON.parse(value));
            }
        }
        return {
            success: true,
            message: runeliteImport
        };
    }
    catch (e) {
        return {
            success: false,
            message: "Error parsing the import data: " + e.message
        };
    }
}

function getTaskLookupByName() {
    let lookup = {};
    taskData.tasks.forEach(task => lookup[sanitizeTaskName(task.name)] = task);
    return lookup;
}

function getRelicLookupByName() {
    let lookup = {}
    relicData.forEach((slot, slotIndex) => {
        slot.relics.forEach((relic, relicIndex) => {
            lookup[relic.name] = {
                slot: slotIndex,
                relic: {
                    passive: true,
                    relic: relicIndex
                }
            };
        });
    });
    return lookup;
}

function isValidRuneliteJson(json) {
    return (
        json.hasOwnProperty("relics") &&
        json.hasOwnProperty("areas") &&
        json.hasOwnProperty("tasks")
    );
}

function isOldVersion(json) {
    return json.hasOwnProperty("unlockedRegions");
}

function runeliteJsonToStorageFormat(json) {
    const parsedJson = JSON.parse(json);
    if (isOldVersion(parsedJson)) {
        throw new Error("Your Runelite plugin is out of date! Update your client by closing and reopening Runelite, then try importing again.");
    } else if (!isValidRuneliteJson(parsedJson)) {
        throw new Error("The Runelite import data is invalid.");
    }

    let storageFormat = {};
    storageFormat[LOCALSTORAGE_KEYS.TASKS] = JSON.stringify(extractRuneliteTasks(parsedJson));
    storageFormat[LOCALSTORAGE_KEYS.UNLOCKED_REGIONS] = JSON.stringify(extractRuneliteAreas(parsedJson));
    storageFormat[LOCALSTORAGE_KEYS.UNLOCKED_RELICS] = JSON.stringify(extractRuneliteRelics(parsedJson));

    return storageFormat;
}

function extractRuneliteTasks(runeliteJson) {
    let tasks = runeliteJson.tasks
        .filter(task => task.completed)
        .map(task => {
            const match = TASKS_BY_NAME[sanitizeTaskName(task.name)];
            if (!match) {
                throw new Error("Task match not found for " + task.name);
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
            throw new Error("Relic name not found for enum: " + relic);
        }
        const matched = RELICS_BY_NAME[relicName];
        if (!matched) {
            throw new Error("Relic match not found for " + relicName);
        }
        relics[matched.slot] = matched.relic;
    });

    return relics;
}

function toPascalCase(areaName) {
    if (typeof areaName !== "string") {
        return "";
    }
    areaName = areaName.toLowerCase();
    return areaName.charAt(0).toUpperCase() + areaName.slice(1);
}

function sanitizeTaskName(taskName) {
    taskName = taskName.replaceAll(",", "");
    taskName = taskName.toLowerCase();
    return taskName;
}
