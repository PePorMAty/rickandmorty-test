import { IInitialStateCharacterData } from "../types";
import rickSanchez from "../assets/characters/rickSanchez.jpg";
import mortySmith from "../assets/characters/mortySmith.jpg";
import summerSmith from "../assets/characters/summerSmith.jpg";
import jerrySmith from "../assets/characters/jerrySmith.jpg";
import bethSmith from "../assets/characters/bethSmith.jpg";
import rickPrime from "../assets/characters/rickPrime.png";
import evilMorty from "../assets/characters/evilMorty.png";
import dianeSanchez from "../assets/characters/dianeSanchez.png";
import jessica from "../assets/characters/jessica.png";
import narutoSmith from "../assets/characters/narutoSmith.png";
import mrPoopybutthole from "../assets/characters/mrPoopybutthole.png";
import johnnyDepp from "../assets/characters/johnnyDepp.png";

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
    {
      id: 6,
      name: "Rick Prime",
      image: rickPrime,
      species: "Cybernetically Enhanced Human",
      status: "Deceased",
      age: 70,
      placeOfOrigin: "Earth (Prime Dimension)",
      description: `He was the Rick who was responsible for the deaths of Diane in every single dimension and Beth Sanchez in Dimension C-137[3]. Rick C-137 attempted to find and kill Rick Prime throughout the multiverse for decades, killing countless other Ricks in the process. Rick eventually landed in Rick Prime's original dimension and took his place, kickstarting the events of the series.`,
    },
    {
      id: 7,
      name: "Evil Morty",
      image: evilMorty,
      species: "Cybernetically Enhanced Human",
      status: "Alive",
      age: 14,
      placeOfOrigin: "Earth (Dimension 79⊢⊇V)",
      description: `He is one of the many versions of Morty from across the multiverse, but unique in being notably amoral, ruthless and displaying intelligence rivalling that of Rick. He initially appeared alongside Evil Rick, who was hunting down and killing several Ricks throughout the multiverse. It was later revealed Evil Rick was merely being controlled by Evil Morty, although he remained undetected and travelled to the Citadel by posing as one of the Mortys liberated from Evil Rick's lair.`,
    },
    {
      id: 8,
      name: "Diane Sanchez",
      image: dianeSanchez,
      species: "Human",
      status: "Deceased (erased across infinity)",
      age: 20,
      placeOfOrigin: "Dimension C-137",
      description: `Diane Sanchez is the deceased wife of Rick Sanchez and the mother of Beth Sanchez.Diane's death was the defining moment in Rick's life that made him into who he is. The story of Diane has been the overarching mystery of the series from Season 1 up until Season 5. She was murdered by another Rick via an explosion from a futuristic bomb. The trauma from her murder caused Rick to spiral into a vengeful rampage, sending him on a journey to avenge his dead wife by finding the Rick that killed her.`,
    },
    {
      id: 9,
      name: "Jessica",
      image: jessica,
      species: "Human",
      status: "Alive",
      age: 14,
      placeOfOrigin: "Earth",
      description: `Jessica W. is a student at Harry Herpson High School. She is a popular girl in Morty Smith's math class who he has a crush on. Much to Morty's dismay, she is frequently in a relationship with Brad, though she experiences difficulties with him and the two have been shown to have an on-again-off-again relationship which finally ended in "Rest and Ricklaxation" with Jessica breaking up with Brad.`,
    },
    {
      id: 10,
      name: "Naruto Smith",
      image: narutoSmith,
      species: "Genetically Modified Human",
      status: "Alive",
      age: 1,
      placeOfOrigin: "Is unknown",
      description: `Naruto Smith is the gigantic biological offspring of Summer Smith and Morty Smith. He was created when one of Morty's sperm, Sticky, became augmeted by one of Rick Sanchez's experiments that went wrong and combined with a giant Summer's egg. He is nicknamed the "Giant Incest Baby", and later the "Giant Incest Monster".`,
    },
    {
      id: 11,
      name: "Mr. Poopybutthole",
      image: mrPoopybutthole,
      species: "Sausage Fella Parasite (possibly)",
      status: "Alive",
      age: "Unknown",
      placeOfOrigin: "Is unknown",
      description: `Wayne Poopybutthole, more commonly referred to as Mr. Poopybutthole and formerly Professor Poopybutthole, is a long-time family friend of the Smith Family and a recurring character of the show.He is mostly shown breaking the fourth wall during the show and is the only other character to do this besides Rick. Mr. Poopybutthole often addresses the audience in post-credit scenes following a season finale, where he talks about what just happened in the episode as well as his personal life, before encouraging the audience to tune in for the next season.`,
    },
    {
      id: 12,
      name: "Johnny Depp",
      image: johnnyDepp,
      species: "Human",
      status: "Alive",
      age: "52, 54 in reality",
      placeOfOrigin: "Is unknown",
      description: `Johnny Depp (C-500A) is an American actor. He appeared in the episode "Rixty Minutes" as Jerry Smith (C-500A)'s best friend.He is based on the real-life actor of the same name.`,
    },
  ],
  currentCharacter: {},
};
