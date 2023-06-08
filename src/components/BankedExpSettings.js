import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from './common/Select';
import {
  updateCalculatorsExpValues,
  updateCalculatorsSkill,
  updateSingleCalculatorsExpValue,
  updateCalculatorsMode,
  updateCalculatorsTier,
  DEFAULT_CALCULATOR_EXP_VALUES,
} from '../store/calculators/calculators';
import { experienceToLevel, levelToExperience } from '../util/xpAndLevelConversions';
import { STATS } from '../data/constants';
import calculatorData from '../data/calculatorData.json';
import ButtonGroup from './common/ButtonGroup';
import { fetchHiscores } from '../store/user/character';
import Spinner from './common/Spinner';
import { numberWithCommas } from '../util/numberFormatters';

const calculatorSkills = calculatorData.skills.map(skillName => ({
  ...STATS[skillName],
  value: STATS[skillName].label,
}));

export default function BankedExpSettings({ expGained }) {
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
  const { skill: selectedSkill, expValues, calculatorTier } = calculators;
  const { skills } = character.hiscoresCache?.data || {};
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

  useEffect(() => dispatch(updateCalculatorsTier(tier)), []);

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

  const resetCalculator = () => {
    dispatch(
      updateCalculatorsExpValues(
        hiscoresForSelectedSkill ? getValuesFromHiscores(hiscoresForSelectedSkill) : DEFAULT_CALCULATOR_EXP_VALUES
      )
    );
  };

  const newExp = expValues.start[expValues.start.mode] + expGained;
  const newLevel = experienceToLevel(newExp);

  return (
    <>
      <h3 className='heading-accent-md'>Results</h3>
      <div className='flex flex-col gap-2 ml-2 mb-2'>
        <span>
          Exp gained: <strong>{numberWithCommas(expGained)}</strong>
        </span>
        <span>
          New level: <strong>{newLevel}</strong>
        </span>
        <span>
          Exp to next level: <strong>{numberWithCommas(levelToExperience(newLevel + 1) - newExp)}</strong>
        </span>
      </div>
      <h3 className='heading-accent-md'>Tier</h3>
      <ButtonGroup
        buttons={[
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 4, label: '4' },
          { value: 5, label: '5' },
          { value: 6, label: '6' },
          { value: 7, label: '7' },
        ]}
        selection={calculatorTier}
        setSelection={val => dispatch(updateCalculatorsTier(val))}
      />
      <h3 className='heading-accent-md mt-4'>Skill</h3>
      <Select
        className='w-full'
        onSelect={e => dispatch(updateCalculatorsSkill({ skill: e.value }))}
        options={calculatorSkills}
        value={selectedSkill}
      />
      <h3 className='heading-accent-md mt-4'>Start exp/level</h3>
      <div className='flex items-center justify-center gap-4'>
        <Select
          onSelect={selection => updateMode(selection, 'start')}
          options={[
            { label: 'Experience', value: 'xp' },
            { label: 'Level', value: 'level' },
          ]}
          value={expValues.start.mode}
        />
        <input
          className='input-primary form-input w-full'
          onChange={e => updateXpValue(e, 'start')}
          maxLength={expValues.start.mode === 'level' ? 2 : 9}
          type='text'
          value={expValues.start[expValues.start.mode]}
        />
      </div>

      <button className='button-outline w-full mt-4' type='button' onClick={resetCalculator}>
        <span className='icon-base align-bottom'>refresh</span> Reset
      </button>
      <button
        className='button-outline w-full mt-2'
        type='button'
        onClick={() => dispatch(fetchHiscores(character, true))}
      >
        {character.hiscoresCache.loading ? (
          <Spinner size={Spinner.SIZE.sm} invertColorForDarkMode={false} />
        ) : (
          <p>
            <span className='icon-base align-bottom'>cached</span> Update hiscores
          </p>
        )}
      </button>
    </>
  );
}
