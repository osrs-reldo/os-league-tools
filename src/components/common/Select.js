import React, { useEffect, useState } from 'react';

export default function Select({ className, onSelect, options = [], value, ...rest }) {
    const [selected, setSelected] = useState(options.find(option => option.value === value) || options[0]);
    const [selectOpen, setSelectOpen] = useState(false);

    useEffect(() => {
        setSelected(options.find(option => option.value === value));
    }, [value]);

    const toggleDropdown = () => setSelectOpen(!selectOpen);

    const selectFromDropdown = option => {
        setSelected(option);
        toggleDropdown();
        if (onSelect) {
            onSelect(option);
        }
    };

    const selectClassnames = `relative rounded ${className}`;

    return (
        <div className={selectClassnames} {...rest}>
            <div
                className={`flex cursor-pointer items-center justify-between button-outline px-4 py-2 ${
                    selectOpen && 'rounded-b-none'
                }`}
                onClick={toggleDropdown}
            >
                {selected.icon && <img className='mr-2' src={selected.icon} alt={selected.label} />}
                <p className='grow mr-2'>{selected.label}</p>
                <span className='icon-base'>{selectOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
            </div>
            {selectOpen && (
                <div className='absolute bg-primary content-outline rounded-b w-full z-50'>
                    {options.map(option => (
                        <div
                            className='flex items-center cursor-pointer px-4 py-2 last:rounded-b odd:bg-secondary bg-hover-subdued'
                            onClick={() => selectFromDropdown(option)}
                            key={option.label}
                        >
                            {option.icon && <img className='mr-2' src={option.icon} alt={option.label} />}
                            <p key={option.label}>{option.label}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}