import { useState } from 'react';
import { getExpForLevel, getLevelForExp } from '../util/exp-table'

export default function useLevel(initialLevel) {
    const [level, setLevel] = useState(initialLevel);
    const [exp, setExp] = useState(getExpForLevel(initialLevel));

    const updateByLevel = newLevel => {
        newLevel = parseInt(newLevel);
        setLevel(newLevel);
        setExp(getExpForLevel(newLevel));
    }
    const updateByExp = newExp => {
        newExp = parseInt(newExp);
        setExp(newExp);
        setLevel(getLevelForExp(newExp));
    }

    return [level, exp, updateByLevel, updateByExp];
}
