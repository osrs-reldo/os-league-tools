import React from 'react';
import { SEPARATOR } from './util/theme';

export default function Separator({ variant = 'horizontal', breakpoint = null, className = '' }) {
    let dimensions = '';
    if (breakpoint) {
        const key = `${variant}-${breakpoint}`;
        dimensions = SEPARATOR['variant-with-breakpoint'][key] || '';
    } else {
        dimensions = SEPARATOR.variant[variant];
    }
    return <div className={`${dimensions} bg-subdued ${className}`} />;
}
