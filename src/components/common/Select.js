import React, { useEffect, useState } from 'react';

export default function Select({ className, onSelect, options = [], value, disabled, ...rest }) {
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
        className={`flex ${disabled ? '' : 'cursor-pointer'} items-center justify-between button-outline${
          disabled ? '-disabled' : ''
        } px-4 py-2 ${selectOpen && 'rounded-b-none'}`}
        onClick={disabled ? undefined : toggleDropdown}
      >
        {selected.icon && <img className='mr-2' src={selected.icon} alt={selected.label} />}
        <p className='grow mr-2'>{selected.label}</p>
        <span className='icon-base'>{selectOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
      </div>
      {selectOpen && (
        <div className='absolute content-outline rounded-b w-full z-50'>
          {options.map(option => (
            <div
              className='flex items-center cursor-pointer px-4 py-2 last:rounded-b bg-primary-alt odd:bg-primary bg-hover-subdued odd:bg-hover-subdued'
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
