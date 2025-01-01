/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
//TODO: Uncomment the following line to enable dark mode base on user's system preference
// const getInitialTheme = () => {
//   if (typeof window !== 'undefined' && window.matchMedia) {
//     return window.matchMedia('(prefers-color-scheme: dark)').matches
//       ? 'dark'
//       : 'light';
//   }
//   return 'light';
// };

const initialState = {
  mode: "light",
  isThemeSelected: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      state.isThemeSelected = true;
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
