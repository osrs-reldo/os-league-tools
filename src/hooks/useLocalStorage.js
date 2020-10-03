import { useState } from 'react';
import { getFromLocalStorage, updateLocalStorage } from '../util/browser-util'

/** shamelessly copy/pasted https://usehooks.com/useLocalStorage **/
export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        return getFromLocalStorage(key, initialValue);
    });

    const setValue = value => {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        updateLocalStorage(key, valueToStore, setStoredValue);
    };

    return [storedValue, setValue];
}
