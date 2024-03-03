import { createSlice } from "@reduxjs/toolkit";

import { IInitialStateCharacter } from "../../types";
import { initialCharactersData } from "../../stubData/charactersData";

const initialState: IInitialStateCharacter = {
  isActive: false,
  filteredCharacters: [],
  data: initialCharactersData,
};

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    onActiveCharacters: (state) => {
      if (localStorage.getItem("page") === "characters") {
        state.isActive = true;
      }
    },
    onDisabledCharacters: (state) => {
      state.isActive = false;
    },
    getCharacter: (state, { payload }) => {
      let current = state.data.characters.find((item) => item.id === payload);
      state.data.currentCharacter = { ...current };
    },
    filterCharacterSearch: (state, { payload }) => {
      state.filteredCharacters = state.data.characters.filter((item) => {
        return item.name.toLowerCase().includes(payload.toLowerCase());
      });
    },
    filterCharacters: (state, { payload }) => {
      if (payload.status && payload.species) {
        state.filteredCharacters = state.data.characters.filter(
          (item) =>
            item.species === payload.species && item.status == payload.status
        );
      }
      if (payload.status && !payload.species) {
        state.filteredCharacters = state.data.characters.filter(
          (item) => item.status === payload.status
        );
      }
      if (!payload.status && payload.species) {
        state.filteredCharacters = state.data.characters.filter(
          (item) => item.species === payload.species
        );
      }
      if (!payload.status && !payload.species) {
        state.filteredCharacters = state.data.characters;
      }
    },
  },
});

export const {
  onActiveCharacters,
  onDisabledCharacters,
  getCharacter,
  filterCharacterSearch,
  filterCharacters,
} = characterSlice.actions;

export default characterSlice.reducer;
