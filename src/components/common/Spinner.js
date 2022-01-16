import React from 'react';

const SIZE = {
    sm: 'h-3 w-3',
    md: 'h-5 w-5',
    lg: 'h-8 w-8',
};

function Spinner({ size = SIZE.md, color = 'white', invertColorForDarkMode = true }) {
    return (
        <svg
            className={`inline animate-spin ${size} text-primary ${invertColorForDarkMode ? 'img-primary' : ''}`}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
        >
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke={color} strokeWidth='4' />
            <path
                className='opacity-75'
                fill={color}
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            />
        </svg>
    );
}

Spinner.SIZE = SIZE;
export default Spinner;
