import React from 'react';
import { STATS } from '../data/constants';
import LabeledIcon from './common/LabeledIcon';

export default function SkillRequirementList({ value, maxLength = 100, className = '' }) {
    if (value.length === 0) {
        return <span className={`italic text-xs ${className}`}>none</span>;
    }
    return (
        <div className={`flex flex-wrap items-center content-center gap-x-1 ${className}`}>
            {value.slice(0, maxLength).map(({ skill, level }) => (
                <LabeledIcon key={`${skill}${level}`} label={level} icon={`/img/${STATS[skill].iconMini}`} />
            ))}
            {value.length > maxLength && <LabeledIcon label='...' />}
        </div>
    );
}
