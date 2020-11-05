import { getFromLocalStorage, updateLocalStorage } from "./browser-util";

export async function updateLocalStorageFromRuneliteJson(json) {
    try {
        const runeliteImport = JSON.parse(json);
        for (let [key, value] of Object.entries(runeliteImport)) {
            if (key === "tasks") {
                const tasksImport = JSON.parse(value);
                let tasks = getFromLocalStorage("tasks", {version:0, tasks:[], hidden:[], todoList:[]});
                tasks.tasks = tasksImport.tasks;
                tasks.version = tasksImport.version;
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
            message: "Error parsing the import data: " + e
        };
    }
    
}
