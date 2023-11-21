import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../features/Video/videoSlice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    videos: videoSlice,
    [apiSlice.reducerPath] : apiSlice.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});