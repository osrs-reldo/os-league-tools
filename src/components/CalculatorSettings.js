import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from './common/Select';
import {
  updateCalculatorsExpValues,
  updateCalculatorsSkill,
  updateSingleCalculatorsExpValue,
  updateCalculatorsMode,
  updateCalculatorsBaseMultiplier,
} from '../store/calculators/calculators';
import { numberWithCommas } from '../util/numberFormatters';
import { experienceToLevel, levelToExperience } from '../util/xpAndLevelConversions';
import { STATS } from '../data/constants';
import calculatorData from '../data/calculatorData.json';
import { getExpMultiplier } from '../util/getTier';
import SharedCalculatorSettings from './SharedCalculatorSettings';
import Banner from './common/Banner';

const calculatorSkills = calculatorData.skills.map(skillName => ({
  ...STATS[skillName],
  value: STATS[skillName].label,
}));

export default function CalculatorSettings({ multipliersState }) {
  const {
    calculators,
    character,
    tasks: { tier },
  } = useSelector(state => ({
    calculators: state.calculators,
    character: state.character,
    tasks: state.tasks,
  }));
  const dispatch = useDispatch();
  const { skill: selectedSkill, expValues, baseMultiplier } = calculators;
  const { data: skills, error: hiscoresError } = character.hiscoresCache;
  const hiscoresForSelectedSkill = skills && skills[selectedSkill.toLowerCase()];

  const getValuesFromHiscores = hiscores => {
    const { xp } = hiscores;
    const nextLevel = experienceToLevel(xp) + 1;
    const nextLevelExp = levelToExperience(nextLevel);
    return {
      start: { xp, level: experienceToLevel(xp), mode: expValues.start.mode },
      target: {
        xp: nextLevelExp,
        level: nextLevel,
        mode: expValues.target.mode,
      },
    };
  };

  useEffect(() => dispatch(updateCalculatorsBaseMultiplier(getExpMultiplier(tier))), []);

  useEffect(() => {
    if (hiscoresForSelectedSkill) {
      const calculatorValues = getValuesFromHiscores(hiscoresForSelectedSkill);
      dispatch(updateCalculatorsExpValues(calculatorValues));
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
      {!!hiscoresError && (
        <Banner className='text-error text-sm text-italic text-center mb-2'>
          <span className='inline align-middle icon-base mr-1'>sync_problem</span>
          <span className='inline align-middle'>Error: Unable to load hiscores</span>
        </Banner>
      )}
      <h3 className='heading-accent-md mt-4'>Skill</h3>
      <Select
        className='w-full'
        onSelect={e => {
          dispatch(updateCalculatorsSkill({ skill: e.value }));
          multipliersState.resetMultipliers();
        }}
        options={calculatorSkills}
        value={selectedSkill}
      />
      <h3 className='heading-accent-md mt-4'>Experience</h3>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <h4>Start</h4>
          <Select
            onSelect={selection => updateMode(selection, 'start')}
            options={[
              { label: 'Experience', value: 'xp' },
              { label: 'Level', value: 'level' },
            ]}
            value={expValues.start.mode}
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
            onSelect={selection => updateMode(selection, 'target')}
            options={[
              { label: 'Level', value: 'level' },
              { label: 'Experience', value: 'xp' },
            ]}
            value={expValues.target.mode}
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
        {isValidValues ? `XP required: ${numberWithCommas(xpRequired)}` : 'Start experience must be lower than end'}
      </p>

      <SharedCalculatorSettings
        baseMultiplier={baseMultiplier}
        selectedSkill={selectedSkill}
        multipliersState={multipliersState}
      />
    </>
  );
}
