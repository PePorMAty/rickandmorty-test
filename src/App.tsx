import Characters from "./components/Characters/Characters";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Search from "./components/Search/Search";
import Videos from "./components/Videos/Videos";
import { useAppSelector } from "./store/hooks";

function App() {
  return (
    <div className="container">
      <header className="flex justify-between w-full ">
        <Logo />
        <Search />
      </header>
      <main className="mt-12">
        <Routing />
      </main>
    </div>
  );
}

export default App;
