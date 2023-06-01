import React, { useRef } from 'react';

export default function SearchBox({ globalFilter, setGlobalFilter }) {
  const inputRef = useRef(null);

  const clearInput = () => {
    setGlobalFilter('');
    inputRef.current.focus();
  };

  return (
    <div className='relative'>
      <input
        ref={inputRef}
        type='text'
        className='input-primary form-input text-xs'
        placeholder='Search...'
        value={globalFilter || ''}
        onChange={e => {
          setGlobalFilter(e.target.value);
        }}
      />
      {!!globalFilter && (
        <button
          type='button'
          className='h-full absolute right-0 top-0 cursor-pointer text-secondary-alt px-2 text-xs'
          onClick={clearInput}
        >
          X
        </button>
      )}
    </div>
  );
}
