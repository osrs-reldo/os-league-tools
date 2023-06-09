import React from 'react';

export default function LabeledCheckbox({
  label,
  checked = false,
  defaultChecked = false,
  onClick = () => {},
  className = '',
}) {
  return (
    <div className={className}>
      <input
        type='checkbox'
        className='checkbox-primary'
        defaultChecked={defaultChecked}
        onClick={onClick}
        checked={checked}
      />
      <span className='ml-1'>{label}</span>
    </div>
  );
}
