import { Route, Routes } from "react-router-dom";
import SingleVideo from "./Videos/SingleVideo/SingleVideo";
import Home from "./Home";
import SingleCharacter from "./Characters/SingleCharacter/SingleCharacter";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<SingleVideo />} />
      <Route path="/character/:id" element={<SingleCharacter />} />
    </Routes>
  );
};

export default Routing;
