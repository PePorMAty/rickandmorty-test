import Characters from "./components/Characters/Characters";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Search from "./components/Search/Search";
import Videos from "./components/Videos/Videos";
import { useAppSelector } from "./store/hooks";

function App() {
  const videos = useAppSelector((state) => state.videos);
  const characters = useAppSelector((state) => state.characters);

  return (
    <div className="container">
      <header className="flex justify-between w-full ">
        <Logo />
        <Search />
      </header>
      <main className="mt-12">
        <Navbar />
        {videos.active && <Videos />}
        {characters.active && <Characters />}
      </main>
    </div>
  );
}

export default App;
