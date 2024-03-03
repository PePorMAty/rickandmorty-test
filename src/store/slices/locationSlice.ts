import { createSlice } from "@reduxjs/toolkit";
import { initialLocationData } from "../../stubData/locationData";
import { IInitialStateLocation } from "../../types";

const initialState: IInitialStateLocation = {
  isActive: false,
  filteredLocations: [],
  data: initialLocationData,
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    onActiveLocation: (state) => {
      state.isActive = true;
      /* if (localStorage.getItem("page") === "locations") {
        state.isActive = true;
      } */
    },
    onDisabledLocation: (state) => {
      state.isActive = false;
    },
    getLocation: (state, { payload }) => {
      let current = state.data.locations.find((item) => item.id === payload);
      state.data.currentLocation = { ...current };
    },
    filterLocation: (state, { payload }) => {
      state.filteredLocations = state.data.locations.filter((item) => {
        return item.name.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
});

export const {
  onActiveLocation,
  onDisabledLocation,
  getLocation,
  filterLocation,
} = locationsSlice.actions;

export default locationsSlice.reducer;
