import useLocalStorage from './useLocalStorage';
import { LOCALSTORAGE_KEYS } from '../client/localstorage-client';

const INITIAL_STATE = {
    version: 1,
    sortBy: null,
    status: 'all',
    todo: 'all',
    ignored: 'hide',
    difficulty: null,
    categories: null,
    subcategories: null,
    skills: null,
};

export default function useFilterState() {
    const [filterState, setFilterState] = useLocalStorage(LOCALSTORAGE_KEYS.FILTER_STATE, INITIAL_STATE);

    const setSelection = (field, selectedOption) =>
        setFilterState(prevState => ({ ...prevState, [field]: selectedOption }));

    return [
        filterState,
        {
            sortBy: sortBy => setSelection('sortBy', sortBy),
            status: show => setSelection('status', show),
            todo: show => setSelection('todo', show),
            ignored: show => setSelection('ignored', show),
            difficulty: difficulty => setSelection('difficulty', difficulty),
            categories: categories => setSelection('categories', categories),
            subcategories: subcategories => setSelection('subcategories', subcategories),
            skills: skills => setSelection('skills', skills),
            reset: () => setFilterState(INITIAL_STATE),
            load: state => setFilterState(state),
        },
    ];
}
