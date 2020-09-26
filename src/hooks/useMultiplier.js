import { useState } from 'react';

export default function useMultiplier() {
    const [multipliers, setMultipliers] = useState({});
    const [globalMultipliers, setGlobalMultipliers] = useState({});

    const addMultiplier = (id, amount, isGlobal = false) => {
        if (isGlobal) {
            setGlobalMultipliers(prevState => ({
                ...prevState,
                [id]: amount
            }))
        } else {
            setMultipliers(prevState => ({
                ...prevState,
                [id]: amount
            }))
        }
    }

    const removeMultiplier = (id, isGlobal = false) => {
        if (isGlobal) {
            setGlobalMultipliers(prevState => {
                let prevStateCopy = Object.assign({}, prevState);
                delete prevStateCopy[id];
                return prevStateCopy;
            })
        } else {
            setMultipliers(prevState => {
                let prevStateCopy = Object.assign({}, prevState);
                delete prevStateCopy[id];
                return prevStateCopy;
            })
        }
    }

    const applyMultipliers = applicableIds => {
        let totalMultiplier = 1;
        Object.values(globalMultipliers).forEach(function (multiplier, index) {
            totalMultiplier = totalMultiplier * multiplier;
        });
        applicableIds.forEach(function (id, index) {
            if (multipliers[id] !== undefined) {
                totalMultiplier = totalMultiplier * multipliers[id];
            }
        });
        return totalMultiplier;
    }

    return [addMultiplier, removeMultiplier, applyMultipliers];
}
