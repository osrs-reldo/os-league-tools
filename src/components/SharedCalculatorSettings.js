import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCalculatorsBaseMultiplier } from '../store/calculators/calculators';
import CalculatorFilters from './CalculatorFilters';
import ButtonGroup from './common/ButtonGroup';
import LabeledCheckbox from './common/LabeledCheckbox';
import calculatorData from '../data/calculatorData.json';

export default function SharedCalculatorSettings({ selectedSkill, baseMultiplier, multipliersState }) {
  const relicsState = useSelector(state => state.unlocks.relics);
  const dispatch = useDispatch();
  const { multipliers } = calculatorData.calculators[selectedSkill.toLowerCase()];

  // Auto-check multipliers for unlocked relics
  useEffect(() => {
    for (const multiplier of multipliers) {
      if (
        !!multiplier.autoCheckWithRelic &&
        relicsState[multiplier.autoCheckWithRelic.tier] === multiplier.autoCheckWithRelic.index
      ) {
        multipliersState.addMultiplier(multiplier.id, multiplier);
      }
    }
  }, [relicsState, selectedSkill]);

  return (
    <>
      <h3 className='heading-accent-md mt-4'>Base exp multiplier</h3>
      <div className='ml-2 mb-2'>
        <ButtonGroup
          buttons={[
            { value: 5, label: 'x5' },
            { value: 8, label: 'x8' },
            { value: 12, label: 'x12' },
            { value: 16, label: 'x16' },
          ]}
          selection={baseMultiplier}
          setSelection={val => dispatch(updateCalculatorsBaseMultiplier(val))}
        />
      </div>

      {!!multipliers.length && (
        <>
          <h3 className='heading-accent-md mt-4'>Additional multipliers</h3>
          <div className='ml-2 mb-2'>
            {multipliers.map(multiplier => (
              <div key={multiplier.id} className='mb-1'>
                <LabeledCheckbox
                  className='text-sm'
                  label={multiplier.name}
                  checked={!!multipliersState.multipliers[multiplier.id]}
                  onClick={e => {
                    if (e.target.checked) {
                      multipliersState.addMultiplier(multiplier.id, multiplier);
                    } else {
                      multipliersState.removeMultiplier(multiplier.id);
                    }
                  }}
                />
                <p className='text-xs italic ml-[18px] text-secondary-alt'>{multiplier.subtitle}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <CalculatorFilters skill={selectedSkill} />
    </>
  );
}
