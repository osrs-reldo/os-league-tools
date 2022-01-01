import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import { matchSorter } from 'match-sorter';
import _ from 'lodash';

export function GlobalTextSearch({ globalFilter, setGlobalFilter }) {
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

function fuzzyTextFilter(rows, __, filterValue) {
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

function difficultyFilter(task, values) {
    if (values === null) {
        return true;
    }
    return values.includes(task.difficulty.text);
}

function categoryFilter(task, values, useSubcategory = false) {
    if (values === null) {
        return true;
    }
    const taskCategory = useSubcategory ? task.subcategory.text : task.category.text;
    return values.includes(taskCategory);
}

function skillFilter(task, values) {
    if (values === null) {
        return true;
    }
    const taskSkills = task.skillReqs.map(req => req.skill);
    return _.intersection(taskSkills, values).length > 0;
}

export function applyTaskFilters(tasks, filterState) {
    return tasks.filter(task => {
        return (
            skillFilter(task, filterState.skills) &&
            difficultyFilter(task, filterState.difficulty) &&
            categoryFilter(task, filterState.categories) &&
            categoryFilter(task, filterState.subcategories, true)
        );
    });
}

export function filterTypes() {
    return {
        fuzzyText: fuzzyTextFilter,
    };
}
