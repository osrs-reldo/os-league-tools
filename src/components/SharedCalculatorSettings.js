import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCalculatorsBaseMultiplier } from '../store/calculators/calculators';
import CalculatorFilters from './CalculatorFilters';
import ButtonGroup from './common/ButtonGroup';
import LabeledCheckbox from './common/LabeledCheckbox';
import calculatorData from '../data/calculatorData.json';

export default function SharedCalculatorSettings({
  selectedSkill,
  baseMultiplier,
  expMultipliersState,
  inputMultipliersState,
  outputMultipliersState,
}) {
  const dispatch = useDispatch();

  const { expMultipliers, inputMultipliers, outputMultipliers } =
    calculatorData.calculators[selectedSkill.toLowerCase()];
  return (
    <>
      <h3 className='heading-accent-md mt-4'>Base exp multiplier: </h3>
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
    </>
  );
}
