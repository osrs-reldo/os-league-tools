import { useState } from 'react';

export default function useMultipliers() {
  const [multipliers, setMultipliers] = useState({});

  const addMultiplier = (id, multiplier) => setMultipliers(prevState => ({ ...prevState, [id]: multiplier }));
  const removeMultiplier = id =>
    setMultipliers(prevState => {
      const stateCopy = { ...prevState };
      delete stateCopy[id];
      return stateCopy;
    });
  const resetMultipliers = () => setMultipliers({});

  const applyMultipliers = (value, activityData, itemData, applyTo) => {
    const validMultipliers = Object.values(multipliers).filter(
      ({ appliesTo }) =>
        (applyTo.exp && appliesTo.exp) || (applyTo.inputs && appliesTo.inputs) || (applyTo.outputs && appliesTo.outputs)
    );
    let newValue = value;
    for (const multiplier of validMultipliers) {
      const matchesCategory =
        multiplier.categories[0] === 'All' || multiplier.categories.includes(activityData.category);
      const matchesActionId = multiplier.actions.includes(activityData.id);
      const matchesRegex =
        !multiplier.matchers.length || !itemData || multiplier.matchers.some(matcher => itemData.name.match(matcher));
      const matchesExceptions = multiplier.exceptions.includes(activityData.id);
      if ((matchesCategory || matchesActionId) && matchesRegex && !matchesExceptions) {
        newValue *= multiplier.multiplier;
      }
    }
    return newValue;
  };

  return {
    multipliers,
    addMultiplier,
    removeMultiplier,
    resetMultipliers,
    applyMultipliers,
  };
}
