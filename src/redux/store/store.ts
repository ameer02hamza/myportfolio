import { configureStore } from "@reduxjs/toolkit";
import routeSlice from "../features/routeSlice";
import themeSlice from "../features/themeSlice";


export const store = configureStore({
  reducer: {
    route:routeSlice,
    theme:themeSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
