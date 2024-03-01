import { createSlice } from "@reduxjs/toolkit";

interface initialStateI {
  active: boolean;
}

const initialState: initialStateI = {
  active: true,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    onActiveVideos: (state) => {
      state.active = true;
    },
    onDisabledVideos: (state) => {
      state.active = false;
    },
  },
});

export const { onActiveVideos, onDisabledVideos } = videosSlice.actions;

export default videosSlice.reducer;
