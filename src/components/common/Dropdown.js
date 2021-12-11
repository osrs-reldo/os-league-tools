import React from 'react';

export const WIDTH_PRESETS = {
    SM: 'w-32',
    MD: 'w-60',
    LG: 'w-96',
    CONTENT: 'w-max',
};

function Dropdown({ children, innerRef, show, widthClass = WIDTH_PRESETS.CONTENT }) {
    return (
        <ul role='menu' className={`${widthClass} bg-white border inline-block${!show && ' hidden'}`} ref={innerRef}>
            {children}
        </ul>
    );
}

function TextItem({ children, isHeading = false }) {
    return <li className={`px-3 py-2 block${isHeading && ' font-semibold'}`}>{children}</li>;
}

function LinkItem({ children, href, icon = null }) {
    return (
        <li>
            <a href={href} className='px-3 py-2 block hover:bg-gray-200'>
                {icon && <span className='text-gray-900 icon-lg align-middle mr-1'>{icon}</span>}
                {children}
            </a>
        </li>
    );
}

function Separator() {
    return <li className='h-px w-full bg-gray-300' />;
}

Dropdown.Text = TextItem;
Dropdown.Link = LinkItem;
Dropdown.Separator = Separator;

export default Dropdown;
