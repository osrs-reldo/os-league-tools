import { useMemo } from 'react';
import CALCULATOR_DATA from '../data/calculatorData.json';

export default function useCalculatorData(skill, expValues, baseMultiplier, multipliersState, equilibriumState) {
  const rawData = useMemo(() => CALCULATOR_DATA.calculators[skill.toLowerCase()], [skill]);
  const expRequired = useMemo(() => expValues.target.xp - expValues.start.xp, [expValues]);

  const calculatedData = useMemo(
    () =>
      rawData.actions.map(activity => {
        const equilibriumExpPerAction = equilibriumState.getBonusExp(activity.expActions);
        const totalExp =
          multipliersState.applyMultipliers(activity.exp * baseMultiplier, activity, undefined, {
            exp: true,
          }) + equilibriumExpPerAction;
        return {
          ...activity,
          exp: totalExp,
          actionsRequired: Math.ceil(expRequired / totalExp),
          inputs: activity.inputs.map(input => ({
            ...input,
            amount: multipliersState.applyMultipliers(input.amount, activity, input, { inputs: true }),
          })),
          outputs: activity.outputs.map(output => ({
            ...output,
            amount: multipliersState.applyMultipliers(output.amount, activity, output, { outputs: true }),
          })),
        };
      }),
    [rawData, expRequired, baseMultiplier, multipliersState]
  );

  return { data: calculatedData };
}
