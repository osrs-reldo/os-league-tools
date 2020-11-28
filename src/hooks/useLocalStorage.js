import { useState } from 'react';
import { getFromLocalStorage, updateLocalStorage } from '../util/browser-util';

/** originally from https://usehooks.com/useLocalStorage */
export default function useLocalStorage(key, initialValue, useSessionStorage = false) {
    const getValue = () => {
        return getFromLocalStorage(key, initialValue, useSessionStorage);
    };

    const [storedValue, setStoredValue] = useState(getValue());

    const setValue = value => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        updateLocalStorage(key, valueToStore, setStoredValue, useSessionStorage);
    };

    const refreshStoredValue = () => {
        setStoredValue(getValue());
    };

    return [storedValue, setValue, refreshStoredValue];
}
