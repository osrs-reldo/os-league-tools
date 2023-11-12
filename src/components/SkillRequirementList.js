import React from 'react';
import { useSelector } from 'react-redux';
import { STATS } from '../data/constants';
import LabeledIcon from './common/LabeledIcon';

export default function SkillRequirementList({
  value,
  isProductionProdigy = false,
  maxLength = 100,
  className = '',
  hidePlaceholder = false,
}) {
  const hiscores = useSelector(state => state.character.hiscoresCache.data);
  if (value.length === 0) {
    return hidePlaceholder ? null : <span className={`italic text-xs ${className}`}>none</span>;
  }
  return (
    <div className={`flex flex-wrap items-center content-center gap-x-1 ${className}`}>
      {value.slice(0, maxLength).map(({ skill, level }) => {
        if (!hiscores) {
          return <LabeledIcon key={`${skill}${level}`} label={level} icon={STATS[skill].iconMini} />;
        }
        const levelBoost = isProductionProdigy && STATS[skill]?.productionProdigyEligible ? 12 : 0;
        return (
          <LabeledIcon
            key={`${skill}${level}`}
            label={level}
            icon={STATS[skill].iconMini}
            className={
              hiscores.skills[skill.toLowerCase()]?.level ?? 0 + levelBoost >= level ? 'text-success' : 'text-error'
            }
          />
        );
      })}
      {value.length > maxLength && <LabeledIcon label='...' />}
    </div>
  );
}
