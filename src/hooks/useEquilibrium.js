import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function useEquilibrium() {
  const hiscoresState = useSelector(state => state.character.hiscoresCache);
  const relicsState = useSelector(state => state.unlocks.relics);
  const [totalLevel, setTotalLevel] = useState(hiscoresState.data?.skills?.overall?.level ?? 0);
  const [enabled, setEnabled] = useState(relicsState[5] === 0);
  const bonusExpPerAction = totalLevel * 0.1;

  const getBonusExp = equilibriumTriggersPerAction => {
    if (!enabled) {
      return 0;
    }
    return equilibriumTriggersPerAction * bonusExpPerAction;
  };

  return {
    totalLevel,
    setTotalLevel,
    enabled,
    setEnabled,
    getBonusExp,
  };
}
