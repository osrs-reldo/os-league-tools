import { useMemo } from 'react';
import CALCULATOR_DATA from '../data/calculatorData.json';
import { getExpMultiplier } from '../util/getTier';

export default function useCalculatorData(
  skill,
  expValues,
  calculatorTier,
  applyExpMultipliers,
  applyInputMultipliers,
  applyOutputMultipliers
) {
  const expMultiplier = useMemo(() => getExpMultiplier(calculatorTier), [calculatorTier]);
  const rawData = useMemo(() => CALCULATOR_DATA.calculators[skill.toLowerCase()].actions, [skill]);
  const expRequired = useMemo(() => expValues.target.xp - expValues.start.xp, [expValues]);

  const calculatedData = useMemo(
    () =>
      rawData.map(activity => {
        const totalExp = applyExpMultipliers(activity.exp * expMultiplier, activity.expMultipliers);
        return {
          ...activity,
          exp: totalExp,
          actionsRequired: Math.ceil(expRequired / totalExp),
          inputs: activity.inputs.map(input => ({
            ...input,
            amount: applyInputMultipliers(input.amount, activity.inputMultipliers),
          })),
          outputs: activity.outputs.map(output => ({
            ...output,
            amount: applyOutputMultipliers(output.amount, activity.outputMultipliers),
          })),
        };
      }),
    [rawData, expRequired]
  );

  return { data: calculatedData };
}
