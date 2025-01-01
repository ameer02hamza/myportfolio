import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeRoute: 'About',
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setActiveRoute: (state, action) => {
      state.activeRoute = action.payload;
    },
  },
});

export const { setActiveRoute } = routeSlice.actions;

export default routeSlice.reducer;
