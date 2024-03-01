import Logo from "./components/Logo";
import Routing from "./components/Routing";
import Search from "./components/Search/Search";

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
