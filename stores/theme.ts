import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface themeState {
  light: boolean;
}

const initialState: themeState = {
  light: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggle: (state, action: PayloadAction<boolean>) => {
      state.light = !state.light;
    },
  },
});

// Action creators are generated for each case reducer function
export const { themeToggle } = themeSlice.actions;

export default themeSlice.reducer;
