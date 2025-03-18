import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ThemeState {
  isDark: boolean;
}

/**
 * Theme Slice
 * 
 * This slice manages the theme state of the application, specifically whether the 
 * theme is dark or light. It includes an initial state, a reducer to set the theme, 
 * and a selector to access the current theme state.
 */
const initialState: ThemeState = {

  isDark: true,
};

const themeSlice = createSlice({
  name: "isDark",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState["isDark"]>) => {
      state.isDark = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: { isDark: ThemeState }) =>
  state.isDark;
export default themeSlice.reducer;
