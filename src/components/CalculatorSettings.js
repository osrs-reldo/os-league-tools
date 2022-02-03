import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from './common/Select';
import {
    updateCalculatorsExpValues,
    updateCalculatorsSkill,
    updateSingleCalculatorsExpValue,
    updateCalculatorsMode,
    reset,
} from '../store/calculators/calculators';
import numberWithCommas from '../util/helpers';
import { experienceToLevel, levelToExperience } from '../util/xpAndLevelConversions';
import { STATS } from '../data/constants';
import calculatorData from '../data/calculatorData.json';

const calculatorSkills = calculatorData.skills.map(skillName => ({
    ...STATS[skillName],
    value: STATS[skillName].label,
}));

export default function CalculatorSettings() {
    const { calculators, character } = useSelector(state => ({
        calculators: state.calculators,
        character: state.character,
    }));
    const dispatch = useDispatch();
    const { skill: selectedSkill, expValues } = calculators;
    const { skills } = character.hiscoresCache?.data || {};
    const hiscoresForSelectedSkill = skills && skills[selectedSkill.toLowerCase()];

    useEffect(() => {
        if (hiscoresForSelectedSkill) {
            const { xp } = hiscoresForSelectedSkill;
            const nextLevel = experienceToLevel(xp) + 1;
            const nextLevelExp = levelToExperience(nextLevel);
            dispatch(
                updateCalculatorsExpValues({
                    start: { xp, level: experienceToLevel(xp), mode: expValues.start.mode },
                    target: {
                        xp: nextLevelExp,
                        level: nextLevel,
                        mode: expValues.target.mode,
                    },
                })
            );
        }
    }, [hiscoresForSelectedSkill]);

    const updateMode = ({ value: mode }, type) => {
        dispatch(
            updateCalculatorsMode({
                type,
                mode,
            })
        );
    };

    const updateXpValue = (e, type) => {
        const { value } = e.target;

        dispatch(
            updateSingleCalculatorsExpValue({
                type,
                xp: expValues[type].mode === 'xp' ? value : levelToExperience(value),
                level: expValues[type].mode === 'xp' ? experienceToLevel(value) : value,
            })
        );
    };

    const xpRequired = expValues.target.xp - expValues.start.xp;
    const isValidValues = expValues.start.xp < expValues.target.xp;

    return (
        <>
            <h3 className='heading-accent-md'>Skill</h3>
            <Select
                defaultSelected={selectedSkill}
                options={calculatorSkills}
                onSelect={e => dispatch(updateCalculatorsSkill({ skill: e.value }))}
                className='w-full'
            />

            <h3 className='heading-accent-md mt-4'>Experience</h3>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <h4>Start</h4>
                    <Select
                        defaultSelected={expValues.start.mode}
                        onSelect={selection => updateMode(selection, 'start')}
                        options={[
                            { label: 'Experience', value: 'xp' },
                            { label: 'Level', value: 'level' },
                        ]}
                    />
                    <input
                        className='input-primary form-input mt-2 w-full'
                        onChange={e => updateXpValue(e, 'start')}
                        maxLength={expValues.start.mode === 'level' ? 2 : 9}
                        type='text'
                        value={expValues.start[expValues.start.mode]}
                    />
                </div>

                <div>
                    <h3>End</h3>
                    <Select
                        defaultSelected={expValues.target.mode}
                        onSelect={selection => updateMode(selection, 'target')}
                        options={[
                            { label: 'Level', value: 'level' },
                            { label: 'Experience', value: 'xp' },
                        ]}
                    />
                    <input
                        className='input-primary form-input mt-2 w-full'
                        onChange={e => updateXpValue(e, 'target')}
                        maxLength={expValues.target.mode === 'level' ? 2 : 9}
                        type='text'
                        value={expValues.target[expValues.target.mode]}
                    />
                </div>
            </div>
            <p className={isValidValues ? 'text-accent' : 'text-error'}>
                {isValidValues
                    ? `XP required: ${numberWithCommas(xpRequired)}`
                    : 'Start experience must be lower than end'}
            </p>

            {/* TODO: Add override xp modifiers and relic effects */}
            <button className='button-outline w-full mt-4' type='button' onClick={() => dispatch(reset())}>
                Reset calculator
            </button>
        </>
    );
}
