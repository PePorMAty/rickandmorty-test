import { createSlice } from "@reduxjs/toolkit";
import { IIinitialStateVideo } from "../../types";
import { initialVideoData } from "../../stubData/videosData";

const initialState: IIinitialStateVideo = {
  isActive: true,
  data: initialVideoData,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    onActiveVideos: (state) => {
      state.isActive = true;
    },
    onDisabledVideos: (state) => {
      state.isActive = false;
    },
    selectSeason: (state, { payload }) => {
      state.data.currentSeason = state.data.video.filter(
        (item) => item.season === payload
      );
    },
    getVideo: (state, { payload }) => {
      let current = state.data.video.find((item) => item.id === payload);
      state.data.currentVideo = { ...current };
    },
  },
});

export const { onActiveVideos, onDisabledVideos, selectSeason, getVideo } =
  videosSlice.actions;

export default videosSlice.reducer;
