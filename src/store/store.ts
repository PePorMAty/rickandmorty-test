import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import videosSlice from "./slices/videosSlice";
import charactersSlice from "./slices/charactersSlice";

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    characters: charactersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
