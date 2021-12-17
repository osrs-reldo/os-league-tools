import React, { useState } from 'react';

export default function InputSelect({
    label,
    options,
    defaultSelection,
    onChangeCallback = () => {},
    multiple = false,
    disabled = false,
    className = '',
}) {
    let initialSelect = disabled ? null : defaultSelection;
    if (!initialSelect) {
        initialSelect = multiple ? [] : options[0];
    }
    if (multiple && initialSelect === 'all') {
        initialSelect = options;
    }

    const [selected, setSelected] = useState(initialSelect);

    const onChange = e => {
        let selection;
        if (multiple) {
            const items = e.target.options;
            selection = [];
            for (let i = 0, l = items.length; i < l; i++) {
                if (items[i].selected) {
                    selection.push(items[i].value);
                }
            }
        } else {
            selection = e.target.value;
        }
        setSelected(selection);
        onChangeCallback(selection);
    };

    return (
        <select
            label={label}
            className={`${multiple ? 'form-multiselect' : 'form-select'} ${
                disabled ? 'input-disabled' : 'input-primary'
            } shadow-subdued ${className}`}
            value={selected}
            onChange={onChange}
            multiple={multiple}
            disabled={disabled}
        >
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}
