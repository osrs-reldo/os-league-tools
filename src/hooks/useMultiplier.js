import { useState } from 'react';
import update from 'immutability-helper';

export default function useMultiplier() {
    const [multipliers, setMultipliers] = useState({});
    const [globalMultipliers, setGlobalMultipliers] = useState({});

    const addMultiplier = (id, amount, isGlobal = false) => {
        if (isGlobal) {
            setGlobalMultipliers(
                update(globalMultipliers, {
                    [id]: { $set: amount },
                })
            );
        } else {
            setMultipliers(
                update(globalMultipliers, {
                    [id]: { $set: amount },
                })
            );
        }
    };

    const removeMultiplier = (id, isGlobal = false) => {
        if (isGlobal) {
            setGlobalMultipliers(prevState => {
                const prevStateCopy = { ...prevState };
                delete prevStateCopy[id];
                return prevStateCopy;
            });
        } else {
            setMultipliers(prevState => {
                const prevStateCopy = { ...prevState };
                delete prevStateCopy[id];
                return prevStateCopy;
            });
        }
    };

    const applyMultipliers = applicableIds => {
        let totalMultiplier = 1;
        Object.values(globalMultipliers).forEach(multiplier => {
            totalMultiplier *= multiplier;
        });
        applicableIds.forEach(id => {
            if (multipliers[id] !== undefined) {
                totalMultiplier *= multipliers[id];
            }
        });
        return totalMultiplier;
    };

    const getMultipliers = () => {
        return {
            ...multipliers,
            ...globalMultipliers,
        };
    };

    const clearMultipliers = () => {
        setMultipliers({});
        setGlobalMultipliers({});
    };

    return {
        add: addMultiplier,
        remove: removeMultiplier,
        apply: applyMultipliers,
        get: getMultipliers,
        clear: clearMultipliers,
    };
}
