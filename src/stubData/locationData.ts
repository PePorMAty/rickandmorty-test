import { IInitialStateLocationData } from "../types";
import boobWorld from "../assets/locations/boobWorld.jpg";
import gazorpazorp from "../assets/locations/gazorpazorp.png";
import onACobPlanet from "../assets/locations/onACobPlanet.png";

export const initialLocationData: IInitialStateLocationData = {
  locations: [
    {
      id: 1,
      name: "Boob World",
      image: boobWorld,
      type: "World",
      description: `Boob World is a world mentioned by Morty in "Rattlestar Ricklactica".`,
    },
    {
      id: 2,
      name: "Gazorpazorp",
      image: gazorpazorp,
      type: "Planet",
      dimension: "Dimension C-131",
      description: `Gazorpazorp is the homeworld of the male and female Gazorpians.`,
    },
    {
      id: 3,
      name: "On a Cob Planet",
      image: onACobPlanet,
      type: "Planet",
      dimension: "Dimension C-131",
      description: `The On a Cob Planet is a distant planet in the Milky Way Galaxy that looks very similar to Earth. It appeared in the episode "The Wedding Squanchers", where the Smith Family moved, having to avoid capture by the Galactic Federation.`,
    },
  ],
  currentLocation: {},
};
