import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  active: boolean;
}

const initialState: IInitialState = {
  active: false,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    onActiveCharacters: (state) => {
      state.active = true;
    },
    onDisabledCharacters: (state) => {
      state.active = false;
    },
  },
});

export const { onActiveCharacters, onDisabledCharacters } =
  characterSlice.actions;

export default characterSlice.reducer;
