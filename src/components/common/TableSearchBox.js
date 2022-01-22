import React from 'react';

export default function SearchBox({ globalFilter, setGlobalFilter }) {
    return (
        <input
            type='text'
            className='input-primary form-input text-xs'
            placeholder='Search...'
            value={globalFilter || ''}
            onChange={e => {
                setGlobalFilter(e.target.value);
            }}
        />
    );
}
