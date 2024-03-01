import { useAppSelector } from "../store/hooks";
import Characters from "./Characters/Characters";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Search from "./Search/Search";
import Videos from "./Videos/Videos";

const Home = () => {
  const videos = useAppSelector((state) => state.videos);
  const characters = useAppSelector((state) => state.characters);

  return (
    <div>
      <Navbar />
      {videos.active && <Videos />}
      {characters.active && <Characters />}
    </div>
  );
};

export default Home;
