import React from 'react';

export default function LabeledCheckbox({ label, defaultChecked = false, onClick = () => {}, className = '' }) {
  return (
    <div className={className}>
      <input type='checkbox' className='checkbox-primary' defaultChecked={defaultChecked} onClick={onClick} />
      <span className='ml-1'>{label}</span>
    </div>
  );
}
