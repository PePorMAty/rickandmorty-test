import { createSlice } from "@reduxjs/toolkit";

import { IInitialStateCharacter } from "../../types";
import { initialCharactersData } from "../../stubData/charactersData";

const initialState: IInitialStateCharacter = {
  isActive: false,
  data: initialCharactersData,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    onActiveCharacters: (state) => {
      state.isActive = true;
    },
    onDisabledCharacters: (state) => {
      state.isActive = false;
    },
    getCharacter: (state, { payload }) => {
      let current = state.data.characters.find((item) => item.id === payload);
      state.data.currentCharacter = { ...current };
    },
  },
});

export const { onActiveCharacters, onDisabledCharacters, getCharacter } =
  characterSlice.actions;

export default characterSlice.reducer;
