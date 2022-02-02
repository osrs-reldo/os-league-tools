import React, { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from './common/Select';
import calculatorData from '../data/calculatorData.json';
import { STATS } from '../data/constants';
import numberWithCommas from '../util/helpers';
import { experienceToLevel, levelToExperience } from '../util/xpAndLevelConversions';

const calculatorSkills = calculatorData.skills.map(skillName => ({
    ...STATS[skillName],
    value: STATS[skillName].label,
}));

const xpReducer = (state, action) => {
    switch (action.type) {
        case 'start/values': {
            const newXp = action.payload.xp;
            const newLevel = action.payload.level;
            return { ...state, start: { xp: newXp, level: newLevel, mode: state.start.mode } };
        }
        case 'start/mode':
            return { ...state, start: { ...state.start, mode: action.payload } };
        case 'target/values': {
            const newXp = action.payload.xp;
            const newLevel = action.payload.level;
            return { ...state, target: { xp: newXp, level: newLevel, mode: state.target.mode } };
        }
        case 'target/mode':
            return { ...state, target: { ...state.target, mode: action.payload } };
        case 'both':
            return action.payload;
        default:
            throw new Error();
    }
};

const xpInitialState = {
    start: {
        level: 1,
        xp: levelToExperience(1),
        mode: 'xp',
    },
    target: {
        level: 2,
        xp: levelToExperience(2),
        mode: 'level',
    },
};

export default function CalculatorSettings() {
    const [selectedSkill, setSelectedSkill] = useState(calculatorSkills[0]);
    const [xpValues, dispatch] = useReducer(xpReducer, xpInitialState);
    const data = useSelector(state => state.character.hiscoresCache.data);
    const hiscoresForSelectedSkill = data && data.skills[selectedSkill.label?.toLowerCase()];

    useEffect(() => {
        if (hiscoresForSelectedSkill) {
            const { xp, level } = hiscoresForSelectedSkill;
            dispatch({
                type: 'both',
                payload: {
                    start: { xp, level, mode: xpValues.start.mode },
                    target: {
                        xp: levelToExperience(level + 1),
                        level: level + 1,
                        mode: xpValues.target.mode,
                    },
                },
            });
        }
    }, [hiscoresForSelectedSkill]);

    const updateMode = ({ value }, name) => {
        dispatch({
            type: `${name}/mode`,
            payload: value,
        });
    };

    const updateXpValue = (e, name) => {
        const { value } = e.target;

        dispatch({
            type: `${name}/values`,
            payload: {
                xp: xpValues[name].mode === 'xp' ? value : levelToExperience(value),
                level: xpValues[name].mode === 'xp' ? experienceToLevel(value) : value,
            },
        });
    };

    const xpRequired = xpValues.target.xp - xpValues.start.xp;
    const isValidValues = xpValues.start.xp < xpValues.target.xp;

    return (
        <>
            <h3 className='heading-accent-md'>Skill</h3>
            <Select options={calculatorSkills} onSelect={setSelectedSkill} className='w-full' />

            <h3 className='heading-accent-md mt-4'>Experience</h3>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <h4>Start</h4>
                    <Select
                        options={[
                            { label: 'Experience', value: 'xp' },
                            { label: 'Level', value: 'level' },
                        ]}
                        onSelect={selection => updateMode(selection, 'start')}
                    />
                    <input
                        className='input-primary form-input mt-2 w-full'
                        onChange={e => updateXpValue(e, 'start')}
                        maxLength={xpValues.start.mode === 'level' ? 2 : 9}
                        type='text'
                        value={xpValues.start[xpValues.start.mode]}
                    />
                </div>

                <div>
                    <h3>End</h3>
                    <Select
                        options={[
                            { label: 'Level', value: 'level' },
                            { label: 'Experience', value: 'xp' },
                        ]}
                        onSelect={selection => updateMode(selection, 'target')}
                    />
                    <input
                        className='input-primary form-input mt-2 w-full'
                        onChange={e => updateXpValue(e, 'target')}
                        maxLength={xpValues.target.mode === 'level' ? 2 : 9}
                        type='text'
                        value={xpValues.target[xpValues.target.mode]}
                    />
                </div>
            </div>
            <p className={isValidValues ? 'text-accent' : 'text-error'}>
                {isValidValues
                    ? `XP required: ${numberWithCommas(xpRequired)}`
                    : 'Start experience must be lower than end'}
            </p>
        </>
    );
}
