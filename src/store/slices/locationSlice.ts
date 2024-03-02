import { createSlice } from "@reduxjs/toolkit";
import { initialLocationData } from "../../stubData/locationData";
import { IInitialStateLocation } from "../../types";

const initialState: IInitialStateLocation = {
  isActive: false,
  data: initialLocationData,
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    onActiveLocation: (state) => {
      state.isActive = true;
    },
    onDisabledLocation: (state) => {
      state.isActive = false;
    },
    getLocation: (state, { payload }) => {
      let current = state.data.locations.find((item) => item.id === payload);
      state.data.currentLocation = { ...current };
    },
  },
});

export const { onActiveLocation, onDisabledLocation, getLocation } =
  locationsSlice.actions;

export default locationsSlice.reducer;
