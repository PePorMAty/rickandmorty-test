import { useAppSelector } from "../store/hooks";
import Characters from "./Characters/Characters";
import Navbar from "./Navbar";
import Videos from "./Videos/Videos";

const Home = () => {
  const videos = useAppSelector((state) => state.videos);
  const characters = useAppSelector((state) => state.characters);

  return (
    <div>
      <Navbar />
      {videos.isActive && <Videos />}
      {characters.isActive && <Characters />}
    </div>
  );
};

export default Home;
