import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { matchSorter } from 'match-sorter';

export function GlobalTextSearch({ globalFilter, setGlobalFilter }) {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce(newVal => {
        setGlobalFilter(newVal || undefined);
    }, 200);

    return (
        <input
            type='text'
            className='input-primary form-input text-sm'
            placeholder='Filter...'
            value={value || ''}
            onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
        />
    );
}

function fuzzyTextFilter(rows, _, filterValue) {
    return matchSorter(rows, filterValue, {
        threshold: matchSorter.rankings.CONTAINS,
        keys: [
            'values.task.text',
            'values.task.description',
            'values.category.category.text',
            'values.category.subcategory.text',
            'values.requirements.*.skill',
        ],
    });
}
fuzzyTextFilter.autoRemove = val => !val;
export { fuzzyTextFilter };

export function filterTypes() {
    return {
        fuzzyText: fuzzyTextFilter,
    };
}
