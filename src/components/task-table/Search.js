import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export default function SearchBox({ globalFilter, setGlobalFilter }) {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce(newVal => {
        setGlobalFilter(newVal || undefined);
    }, 200);

    return (
        <input
            type='text'
            className='input-primary form-input text-xs'
            placeholder='Filter...'
            value={value || ''}
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
        />
    );
}
