import { createSlice } from "@reduxjs/toolkit";
import preview from "../../assets/preview.jpg";

interface IInitialState {
  active: boolean;
  video: {
    id?: number;
    title?: string;
    image?: string;
    season?: string;
    series?: number;
    description?: string;
  }[];
  currentSeason: {
    id?: number;
    title?: string;
    image?: string;
    season?: string;
    series?: number;
    description?: string;
  }[];
  currentVideo: {
    id?: number;
    title?: string;
    image?: string;
    season?: string;
    series?: number;
    description?: string;
  };
}

const initialState: IInitialState = {
  active: true,
  video: [
    {
      id: 1,
      title: "Pilot",
      image: preview,
      season: "1",
      series: 1,
      description: `Rick, in a drunken state, takes his grandson, Morty, for a ride in his flying car and rambles on about how he plans to use a neutrino bomb to wipe out all life on Earth. Rick lands the vehicle on Morty's demand and passes out. The bomb activates by itself and seems to be left unchecked, but ultimately it is shown that life on Earth remains intact. After having breakfast with their family, Rick takes Morty to another dimension to collect seeds of "Mega Trees", which Morty is forced to hide in his own rectum to get past intergalactic customs. However, Rick and Morty's cover is blown and they escape while engaging in a shootout with alien insect soldiers. Ultimately, the seeds briefly cause Morty to be highly intelligent, despite the fact that he missed a semester of school because he's been in adventures with Rick. This causes his parents to believe he is fine with his education, but this wastes the seeds, so Rick informs Morty that they need to go back and get more, while their aftereffects leave Morty writhing on the floor.`,
    },
    {
      id: 2,
      title: "Lawnmower Dog",
      image: preview,
      season: "1",
      series: 2,
      description: `On Jerry's demand, Rick gives Snuffles, the family dog, an intelligence-enhancing helmet. Rick and Morty, in an Inception-esque scenario, enter the dream of Morty's teacher, in an attempt to make him give Morty an "A" in math class. They find themselves in a dangerous situation, where they are forced to repeatedly enter dreams within dreams to escape. Eventually, they are chased by a dream character named Scary Terry, a "legally safe" parody of Freddy Krueger. They manage to enter his dream, where they stand up for him against his bully teacher. This persuades Scary Terry to help them complete their mission. Meanwhile, at home, Snuffles builds a mechanical suit and assembles a dog army intending to take over Earth. Returning home from their adventure, Rick and Morty enter Snuffles' dream, where Rick causes Morty to fall into a coma. This prompts Snuffles to rethink his priorities, resulting in him taking his army to another planet.`,
    },
    {
      id: 3,
      title: "Anatomy Park",
      image: preview,
      season: "1",
      series: 3,
      description: `On Christmas, Rick sends Morty inside the body of a homeless man to save his life (a parody of Fantastic Voyage). Inside the man's body is a microscopic enclosure called Anatomy Park (a parody of Jurassic Park), which houses various deadly diseases that escape their enclosures. Morty and one of the park staff, Annie, flee from the rampaging diseases as they kill the rest of the base staff. Rick rescues them by enlarging the homeless man's body to the width of the US before destroying it in an explosion. Back at the family home, Jerry's parents visit, and the family attempts to bond without electronic devices. Jerry is dismayed to discover his parents have decided to try polyamory.`,
    },
    {
      id: 4,
      title: "M. Night Shaym-Aliens!",
      image: preview,
      season: "1",
      series: 4,
      description: `Aliens hold Rick and Jerry captive in a virtual reality, in an attempt to steal Rick's recipe for Concentrated Dark Matter. As Rick attempts escape, he discovers that there are multiple virtual reality layers on top of each other. Jerry, on the other hand, despite numerous system glitches, remains completely oblivious, and keeps trying to sell his advertising slogan for apples. Rick finally games the aliens by giving them a fake recipe. The aliens send Rick and Jerry on their way, and their ship explodes as they prepare the concoction.`,
    },
    {
      id: 5,
      title: "Meeseeks and Destroy",
      image: preview,
      season: "1",
      series: 5,
      description: `After killing deadly enemies in an alternative dimension, Morty complains that Rick's adventures are too dangerous and traumatizing. This leads them into a "Jack and the Beanstalk" type adventure, where Morty is in charge. He decides to steal the giant's treasure and give it to the villagers. The giant dies by accident, Rick and Morty are charged with murder but are ultimately acquitted. Rick and Morty then descend from the Giants' beanstalk realm and stop in a fairy tale pub on the way down. There, King Jellybean attempts to rape Morty, but Morty escapes. Rick wins money playing poker and gives it to the villagers. As Rick and Morty are leaving this dimension, Rick kills King Jellybean, having figured out his attempted rape of Morty. Meanwhile, Beth, Summer and Jerry use Rick's "Meeseeks Box" to spawn Meeseeks, blue creatures that fulfill one request and then explode. Jerry summons one Meeseeks to help him improve his golf game, and spends some time training, to no avail. The Meeseeks summons more of them to help, resulting in a increasingly larger crowd of frustrated Meeseeks. They decide to kill Jerry, but given one last chance, he ultimately demonstrates that his skills actually have improved and the Meeseeks are happy to disappear.`,
    },
    {
      id: 6,
      title: "Rick Potion #9",
      image: preview,
      season: "1",
      series: 6,
      description: `Morty is interested in going to the dance at his school with his classmate Jessica, so he asks Rick for a love potion. However, because Jessica has the flu, the potion becomes airborne and goes haywire, causing not only her but the whole population of Earth to fall for Morty save for blood relatives. Rick attempts to fix up an antidote, but he fails twice, ultimately causing all humans affected by the love potion to turn into mutated monsters called "Cronenbergs" (a reference to famous director of body horror films David Cronenberg). Meanwhile, Jerry visits Beth in her workplace because he is concerned about her fidelity, and they find Summer later. Rick and Morty then migrate to another dimension where their duplicates died soon after successfully curing all of Earth, thus allowing Rick and Morty to assume their roles.`,
    },
    {
      id: 12,
      title: "A Rickle in Time",
      image: preview,
      season: "2",
      series: 1,
      description: `Continuing from "Ricksy Business", Rick, Morty and Summer spend six months repairing the house and screwing around with time frozen. After unfreezing it, the trio ends up in a decaying dimension. They split into separate timelines whenever they are uncertain about something. Rick becomes paranoid, thinking that his duplicates want to kill him, but eventually he calms down. A creature in charge of safeguarding time appears and gives them collars that integrate all the timelines, then attempts to arrest them because Rick stole the time-freezing crystal. Rick, Morty, and Summer show uncertainty on purpose and break the collars, splitting into sixty-four timelines, and they simultaneously beat up the same creature. Rick then repairs the collars, and they successfully integrate all the timelines. In one timeline, Rick attempts to sacrifice himself and let Morty live by giving him his collar, but ultimately he survives too. Meanwhile, Beth and Jerry hit a deer, and bring it to an animal hospital. A hunter claims the deer for his own because he shot it before the accident. Beth is able to save the deer's life and release it.`,
    },
    {
      id: 13,
      title: "Mortynight Run",
      image: preview,
      season: "2",
      series: 2,
      description: `Rick takes Morty on a trip to teach him how to pilot the flying car. When Rick realizes that Jerry has followed them without being noticed in the back seat, he leaves him in a daycare specifically designed for Jerries from alternate realities. Jerry socializes with other Jerries, some of them left there indefinitely because their Rick and Morty never returned. Rick sells an antimatter gun to Krombopulous Michael, an alien assassin who intends to use it to eliminate a gaseous being whom Rick nicknames Fart that is held captive by alien authorities. Rick plans to spend the day at the "Blips & Chitz" video arcade, but Morty decides to stop the assassin. After Rick and Morty release Fart, they are chased by the authorities. Fart uses telepathic powers to kill the authorities, which also leads to civilian casualties. Later, Morty learns that Fart wants to eliminate all carbon-based life forms. Morty then kills Fart using Krombopulous Michael's antimatter gun. Rick and Morty return to pick up their Jerry, but it is left unclear whether they got the right one.`,
    },
  ],
  currentSeason: [],
  currentVideo: {},
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
    selectSeason: (state, action) => {
      state.currentSeason = state.video.filter(
        (item) => item.season === action.payload
      );
    },
    getVideo: (state, action) => {
      let current = state.video.find((item) => item.id === action.payload);
      state.currentVideo = { ...current };
    },
  },
});

export const { onActiveVideos, onDisabledVideos, selectSeason, getVideo } =
  videosSlice.actions;

export default videosSlice.reducer;
