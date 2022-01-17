import React from 'react';

export default function LabeledIcon({ label, icon, size = 'md', className = '' }) {
    return (
        <div className={className}>
            {icon && <img className={`inline mr-1 ${size === 'lg' ? 'h-[18px]' : 'h-[13px]'}`} src={icon} alt='' />}
            <span className={size === 'lg' ? 'text-sm' : 'text-xs'}>{label}</span>
        </div>
    );
}
