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

  const applyMultipliers = (value, validMultipliers) => {
    let newValue = value;
    for (const multiplier of Object.values(multipliers)) {
      if (multiplier.applyToAll || validMultipliers.includes(multiplier.id)) {
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
