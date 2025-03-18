// src/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ThemeState {
  isDark: boolean;
}

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
