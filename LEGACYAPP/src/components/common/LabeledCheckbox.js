import React from 'react';

export default function LabeledCheckbox({ label, checked = false, onClick = () => {}, className = '' }) {
  return (
    <div className={className}>
      <input type='checkbox' className='checkbox-primary' onChange={onClick} checked={checked} />
      <span className='ml-1'>{label}</span>
    </div>
  );
}
