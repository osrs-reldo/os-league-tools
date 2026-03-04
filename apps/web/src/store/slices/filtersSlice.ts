import { createSlice } from '@reduxjs/toolkit';

/**
 * Client-only filter state. Extend these types as you add task panel,
 * calculator, and other filtered views. Server state lives in React Query.
 */
export type TaskFilterState = {
  search: string;
  status: 'all' | 'complete' | 'incomplete';
};

export type CalculatorFilterState = {
  search: string;
};

export type FiltersState = {
  task: TaskFilterState;
  calculator: CalculatorFilterState;
};

const initialTaskFilters: TaskFilterState = {
  search: '',
  status: 'all',
};

const initialCalculatorFilters: CalculatorFilterState = {
  search: '',
};

const initialState: FiltersState = {
  task: initialTaskFilters,
  calculator: initialCalculatorFilters,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTaskFilter: (state, action: { payload: Partial<TaskFilterState> }) => {
      state.task = { ...state.task, ...action.payload };
    },
    resetTaskFilters: (state) => {
      state.task = initialTaskFilters;
    },
    setCalculatorFilter: (state, action: { payload: Partial<CalculatorFilterState> }) => {
      state.calculator = { ...state.calculator, ...action.payload };
    },
    resetCalculatorFilters: (state) => {
      state.calculator = initialCalculatorFilters;
    },
  },
});

export const {
  setTaskFilter,
  resetTaskFilters,
  setCalculatorFilter,
  resetCalculatorFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
