import { createSlice } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark' | 'system';

export type UiState = {
  sidebarOpen: boolean;
  theme: Theme;
};

const initialState: UiState = {
  sidebarOpen: true,
  theme: 'system',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSidebarOpen: (state, action: { payload: boolean }) => {
      state.sidebarOpen = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setTheme: (state, action: { payload: Theme }) => {
      state.theme = action.payload;
    },
  },
});

export const { setSidebarOpen, toggleSidebar, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
