export const LOCALSTORAGE_KEYS = {
    UNLOCKED_RELICS: 'unlockedRelics',
    UNLOCKED_REGIONS: 'unlockedRegions',
    TASKS: 'tasks',
    FILTER_SELECTED_STATUS: 'filterSelectedStatus',
    FILTER_HIDE_LOCKED_AREAS: 'filterHideLocked',
    FILTER_SHOW_HIDDEN_TASKS: 'filterShowHiddenTasks',
    HIDE_ALERT_BANNER: 'hideAlertBanner'
}

export function getFromLocalStorage(key, initialValue) {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    } catch (error) {
        console.log(error);
        return initialValue;
    }
}

export function updateLocalStorage(key, value, setValueCallback = () => { return; }) {
    try {
        setValueCallback(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

export function reloadPage() {
    window.location.reload();
}

export function resetLocalStorageData() {
    localStorage.clear();
}
