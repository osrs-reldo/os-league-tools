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
import { numberWithCommas } from '../util/numberFormatters';
import { experienceToLevel, levelToExperience } from '../util/xpAndLevelConversions';
import { STATS } from '../data/constants';
import calculatorData from '../data/calculatorData.json';
import ButtonGroup from './common/ButtonGroup';
import { fetchHiscores } from '../store/user/character';
import Spinner from './common/Spinner';
import LabeledCheckbox from './common/LabeledCheckbox';
import CalculatorFilters from './CalculatorFilters';

const calculatorSkills = calculatorData.skills.map(skillName => ({
  ...STATS[skillName],
  value: STATS[skillName].label,
}));

export default function CalculatorSettings({ expMultipliersState, inputMultipliersState, outputMultipliersState }) {
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
    expMultipliersState.resetMultipliers();
  };

  const xpRequired = expValues.target.xp - expValues.start.xp;
  const isValidValues = expValues.start.xp < expValues.target.xp;
  const expMultipliers = [
    ...calculatorData.globalMultipliers.expMultipliers,
    ...calculatorData.calculators[selectedSkill.toLowerCase()].expMultipliers,
  ];
  const inputMultipliers = [
    ...calculatorData.globalMultipliers.inputMultipliers,
    ...calculatorData.calculators[selectedSkill.toLowerCase()].inputMultipliers,
  ];
  const outputMultipliers = [
    ...calculatorData.globalMultipliers.outputMultipliers,
    ...calculatorData.calculators[selectedSkill.toLowerCase()].outputMultipliers,
  ];

  return (
    <>
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
        onSelect={e => {
          dispatch(updateCalculatorsSkill({ skill: e.value }));
          expMultipliersState.resetMultipliers();
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

      {!!expMultipliers.length && (
        <>
          <h3 className='heading-accent-md mt-4'>Exp multipliers</h3>
          <div className='ml-2 mb-2'>
            {expMultipliers.map(multiplier => (
              <LabeledCheckbox
                key={multiplier.id}
                className='text-sm'
                label={multiplier.name}
                checked={!!expMultipliersState.multipliers[multiplier.id]}
                onClick={e => {
                  if (e.target.checked) {
                    expMultipliersState.addMultiplier(multiplier.id, multiplier);
                  } else {
                    expMultipliersState.removeMultiplier(multiplier.id);
                  }
                }}
              />
            ))}
          </div>
        </>
      )}

      {!!inputMultipliers.length && (
        <>
          <h3 className='heading-accent-md mt-4'>Input multipliers</h3>
          <div className='ml-2 mb-2'>
            {inputMultipliers.map(multiplier => (
              <LabeledCheckbox
                key={multiplier.id}
                className='text-sm'
                label={multiplier.name}
                checked={!!inputMultipliersState.multipliers[multiplier.id]}
                onClick={e => {
                  if (e.target.checked) {
                    inputMultipliersState.addMultiplier(multiplier.id, multiplier);
                  } else {
                    inputMultipliersState.removeMultiplier(multiplier.id);
                  }
                }}
              />
            ))}
          </div>
        </>
      )}

      {!!outputMultipliers.length && (
        <>
          <h3 className='heading-accent-md mt-4'>Output multipliers</h3>
          <div className='ml-2 mb-2'>
            {outputMultipliers.map(multiplier => (
              <LabeledCheckbox
                key={multiplier.id}
                className='text-sm'
                label={multiplier.name}
                checked={!!outputMultipliersState.multipliers[multiplier.id]}
                onClick={e => {
                  if (e.target.checked) {
                    outputMultipliersState.addMultiplier(multiplier.id, multiplier);
                  } else {
                    outputMultipliersState.removeMultiplier(multiplier.id);
                  }
                }}
              />
            ))}
          </div>
        </>
      )}

      <CalculatorFilters skill={selectedSkill} />

      <button className='button-outline w-full mt-4' type='button' onClick={resetCalculator}>
        <span className='icon-base align-bottom'>refresh</span> Reset
      </button>
      <button
        className='button-outline w-full mt-2'
        type='button'
        onClick={() => dispatch(fetchHiscores(character, null, true))}
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
