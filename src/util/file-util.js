import { saveAs } from "file-saver";
import { updateLocalStorage } from "./browser-util";

export function saveLocalStorageToFile() {
    var blob = new Blob(
        [JSON.stringify(localStorage)],
        { type: "text/plain;charset=utf-8" }
    );
    saveAs(blob, "osLeagueTools_backup_" + Date.now() + ".txt");
}

export async function loadLocalStorageFromFile(fileObject) {
    let loadedText;
    try {
        loadedText = await fileObject.text();
    } catch (err) {
        return {
            success: false,
            message: "Unable to load file. Please try again."
        };
    }

    let storageJson;
    try {
        storageJson = JSON.parse(loadedText);
    } catch (err) {
        return {
            success: false,
            message: "Unable to parse file, please check the file and try again."
        };
    }

    localStorage.clear();
    for (let [key, value] of Object.entries(storageJson)) {
        updateLocalStorage(key, JSON.parse(value));
    }

    return { success: true, message: "" };
}
