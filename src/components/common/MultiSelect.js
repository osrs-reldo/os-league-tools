import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactSelect, { components } from 'react-select';
import ReactTooltip from 'react-tooltip';
import { without } from 'lodash';

function Option({ data: { icon, label }, innerProps }) {
    return (
        <div className='flex items-center px-3 py-2 cursor-pointer bg-hover-accent' {...innerProps}>
            {icon && <img className='mr-2 w-4' src={icon} alt={label} />}
            <p>{label}</p>
        </div>
    );
}

function MultiValueLabel({ data: { icon, label }, innerProps }) {
    return (
        <>
            <div className='flex justify-center items-center p-1 mr-1' data-tip data-for={label} {...innerProps}>
                {icon && <img className='w-4' src={icon} alt={label} />}
                {label === 'All' && <p>{label}</p>}
            </div>
            <ReactTooltip id={label}>{label}</ReactTooltip>
        </>
    );
}

function MultiValueRemove({ data, innerProps }) {
    if (data.isFixed) {
        return <div className='w-[3px] rounded-sm h-full' />;
    }
    return <components.MultiValueRemove innerProps={{ ...innerProps, className: 'bg-hover-accent px-1' }} />;
}

export default function MultiSelect({ defaultSelected, name, updateFunc, options = [], ...rest }) {
    const dispatch = useDispatch();

    const selectAllOption = { isFixed: true, label: 'All' };
    const selectOptions = [selectAllOption, ...options];
    const defaultSelectedOptions = defaultSelected.map(label => options.find(option => option.label === label));

    const [selectedValues, setSelectedValues] = useState(defaultSelectedOptions || options);

    const onSelectChanged = (newValues, selected) => {
        if (selected.action === 'clear') {
            setSelectedValues(options);
            dispatch(updateFunc({ field: name, value: options.map(option => option.label) }));
        } else {
            const allSelected = selected.option?.label === selectAllOption.label;
            const noneSelected = !newValues.length;
            const resetToAllSelected = allSelected || noneSelected;

            setSelectedValues(resetToAllSelected ? options : without(newValues, selectAllOption));
            dispatch(
                updateFunc({
                    field: name,
                    value: resetToAllSelected
                        ? options.map(option => option.label)
                        : without(
                              newValues.map(option => option.label),
                              'All'
                          ),
                })
            );
        }
    };

    const isAllSelected = selectedValues.length === options.length;

    return (
        <ReactSelect
            components={{ Option, MultiValueLabel, MultiValueRemove }}
            isClearable={!isAllSelected}
            isMulti
            onChange={onSelectChanged}
            options={selectOptions}
            value={isAllSelected ? selectAllOption : selectedValues}
            {...rest}
        />
    );
}
