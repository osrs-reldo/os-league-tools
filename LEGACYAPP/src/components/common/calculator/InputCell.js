import React from 'react';

export default function InputCell({ value, onChange }) {
  return (
    <div className='flex items-center justify-center py-2 h-full'>
      <input className='input-primary form-input w-32' onChange={onChange} type='text' value={value} />
    </div>
  );
}
