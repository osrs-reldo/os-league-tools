import React, { useEffect } from 'react';

export default function InputSelect({
    label,
    options,
    selection = null,
    setSelection = () => {},
    multiple = false,
    enabled = true,
    className = '',
}) {
    useEffect(() => {
        if (multiple && selection === 'all') {
            setSelection(options.map(x => x.value));
        }
    }, [selection]);

    const onChange = e => {
        if (multiple) {
            setSelection([...e.target.options].filter(option => option.selected).map(x => x.value));
        } else {
            setSelection(e.target.value);
        }
    };

    if (!enabled) {
        return (
            <select
                label={label}
                className={`${
                    multiple ? 'form-multiselect' : 'form-select'
                } input-disabled shadow-subdued ${className}`}
                value={multiple ? [] : options[0].value}
                multiple={multiple}
                disabled
            >
                {options.map((option, i) => (
                    <option key={i} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }
    return (
        <select
            label={label}
            className={`${multiple ? 'form-multiselect' : 'form-select'} input-primary shadow-subdued ${className}`}
            value={selection}
            onChange={onChange}
            multiple={multiple}
        >
            {options.map((option, i) => (
                <option key={i} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
