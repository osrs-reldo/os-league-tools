import { useState } from 'react';
import { getExpForLevel, getLevelForExp } from '../util/exp-table';

export default function useLevel(initialLevel) {
    const [level, setLevel] = useState(initialLevel);
    const [exp, setExp] = useState(getExpForLevel(initialLevel));

    const updateByLevel = newLevel => {
        const parsedLevel = parseInt(newLevel);
        if (isNaN(parsedLevel)) {
            setLevel(newLevel);
            setExp(0);
        } else {
            setLevel(parsedLevel);
            setExp(getExpForLevel(parsedLevel));
        }
    };
    const updateByExp = newExp => {
        const parsedExp = parseInt(newExp);
        if (isNaN(parsedExp)) {
            setExp(newExp);
            setLevel(0);
        } else {
            setExp(parsedExp);
            setLevel(getLevelForExp(parsedExp));
        }
    };

    return { level, exp, updateByLevel, updateByExp };
}
