import { IInitialStateCharacterData } from "../types";
import rickSanchez from "../assets/characters/rickSanchez.jpg";
import mortySmith from "../assets/characters/mortySmith.jpg";
import summerSmith from "../assets/characters/summerSmith.jpg";
import jerrySmith from "../assets/characters/jerrySmith.jpg";
import bethSmith from "../assets/characters/bethSmith.jpg";

export const initialCharactersData: IInitialStateCharacterData = {
  characters: [
    {
      id: 1,
      name: "Rick Sanchez",
      image: rickSanchez,
      species: "Human",
      status: "Alive",
      age: 70,
      placeOfOrigin: "Earth (Dimension C-137)",
      description: `Richard "Rick" Sanchez of Dimension C-137, commonly referred to as Rick C-137, is one of the two titular protagonists of Rick and Morty, alongside Morty.`,
    },
    {
      id: 2,
      name: "Morty Smith",
      image: mortySmith,
      species: "Human",
      status: "Alive",
      age: 14,
      placeOfOrigin: "Earth (Dimension C-137)",
      description: `Mortimer Chauncey "Morty" Smith Sr. of the Prime Dimension is one of the two titular protagonists of Rick and Morty, alongside Rick. He was often incorrectly identified as Morty C-137 until Season 5.`,
    },
    {
      id: 3,
      name: "Summer Smith",
      image: summerSmith,
      species: "Human",
      status: "Alive",
      age: 17,
      placeOfOrigin: "Earth (Dimension C-131)",
      description: `Summer Smith of Dimension C-131 is the tritagonist of Rick and Morty. She is a member of the Smith Family and the daughter of Jerry Smith and Beth Smith/Space Beth, the older sister of Morty Smith, and the mother of Naruto Smith.`,
    },
    {
      id: 4,
      name: "Jerry Smith",
      image: jerrySmith,
      species: "Human",
      status: "Alive",
      age: 35,
      placeOfOrigin: "Earth (Dimension 5126)",
      description: `Jerry Smith of Dimension 5126 is one of the five main characters in Rick and Morty. Jerry is the husband of Beth Smith, the father of Summer Smith and Morty Smith, and the son-in-law of Rick Sanchez. The first six episodes of Season 1 featured Jerry Smith Prime, while subsequent episodes featured a Jerry who was born in and inhabited Dimension C-131 up until episode 2 of season 2 where he switched places with this Jerry at the Jerryboree.`,
    },
    {
      id: 5,
      name: "Beth Smith",
      image: bethSmith,
      species: "Human",
      status: "Alive",
      age: 35,
      placeOfOrigin: "Earth (Dimension C-131)",
      description: `Bethany "Beth" Smith (née Sanchez) of Dimension C-131 is one of the five main characters in Rick and Morty. She is the daughter of Rick and Diane Sanchez, the wife of Jerry Smith, and the mother of Summer Smith and the deceased Morty Smith. She currently acts as the mother and the daughter of the Morty Smith and Rick Sanchez from the Prime Dimension and Dimension C-137, respectively. She also works as a veterinarian at the St. Equis Hospital.`,
    },
  ],
  currentCharacter: {},
};
