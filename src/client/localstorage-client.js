export const LOCALSTORAGE_KEYS = {
    USERNAME: 'hiscoresUsername',
};

export const SESSIONSTORAGE_KEYS = {
    HISCORES_CACHE: 'hiscoresCache',
};

export function getFromLocalStorage(key, initialValue, useSessionStorage = false) {
    try {
        let item;
        if (useSessionStorage) {
            item = window.sessionStorage.getItem(key);
        } else {
            item = window.localStorage.getItem(key);
        }
        return item ? JSON.parse(item) : initialValue;
    } catch (error) {
        console.warn(error);
        return initialValue;
    }
}

export function updateLocalStorage(key, value, setValueCallback = () => {}, useSessionStorage = false) {
    try {
        setValueCallback(value);
        if (useSessionStorage) {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        } else {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
        console.warn(error);
    }
}

export function deleteFromLocalStorage(key, useSessionStorage = false) {
    try {
        if (useSessionStorage) {
            window.sessionStorage.removeItem(key);
        } else {
            window.localStorage.removeItem(key);
        }
    } catch (error) {
        console.warn(error);
    }
}

export function reloadPage() {
    window.location.reload();
}

export function resetLocalStorageData() {
    localStorage.clear();
}
