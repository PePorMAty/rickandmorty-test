import { Route, Routes } from "react-router-dom";
import SingleVideo from "./Videos/SingleVideo/SingleVideo";
import Home from "./Home";
import SingleCharacter from "./Characters/SingleCharacter/SingleCharacter";
import SingleLocation from "./Locations/SingleLocation/SingleLocation";
import SearchPage from "./Search/SearchPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<SingleVideo />} />
      <Route path="/character/:id" element={<SingleCharacter />} />
      <Route path="/location/:id" element={<SingleLocation />} />
      <Route path="/search/:value" element={<SearchPage />} />
    </Routes>
  );
};

export default Routing;
