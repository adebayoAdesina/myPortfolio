import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
  isDark: themeSlice,
  // Add other reducers as needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
