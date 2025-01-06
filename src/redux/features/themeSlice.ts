import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "light",
  isThemeSelected: false,
  mobileMenu: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.isThemeSelected = true;
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
    toggleMblMenu: (state) => {
      state.mobileMenu = !state.mobileMenu;
    },
  },
});

export const { toggleTheme, setTheme, toggleMblMenu } = themeSlice.actions;
export default themeSlice.reducer;
