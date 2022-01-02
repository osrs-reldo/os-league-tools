import { matchSorter } from 'match-sorter';
import _ from 'lodash';

function fuzzyTextFilter(rows, __, filterValue) {
    return matchSorter(rows, filterValue, {
        threshold: matchSorter.rankings.CONTAINS,
        keys: [
            'values.task.label',
            'values.task.description',
            'values.category.category.label',
            'values.category.subcategory.label',
            'values.requirements.*.skill',
        ],
    });
}
fuzzyTextFilter.autoRemove = val => !val;
export { fuzzyTextFilter };

export function difficultyFilter(record, filterState) {
    if (filterState.difficulty === null) {
        return true;
    }
    return filterState.difficulty.includes(record.difficulty.label);
}

export function categoryFilter(record, filterState) {
    if (filterState.categories === null) {
        return true;
    }
    return filterState.categories.includes(record.category.label);
}

export function subcategoryFilter(record, filterState) {
    if (filterState.subcategories === null) {
        return true;
    }
    return filterState.subcategories.includes(record.subcategory.label);
}

export function skillFilter(record, filterState) {
    if (filterState.skills === null) {
        return true;
    }
    const taskSkills = record.skillReqs.map(req => req.skill);
    return _.intersection(taskSkills, filterState.skills).length > 0;
}

export function applyFilterSet(data, filterState, filterSet) {
    return data.filter(record => filterSet.every(filter => filter(record, filterState)));
}
