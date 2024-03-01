import { Route, Routes } from "react-router-dom";
import App from "../App";
import SingleVideo from "./SingleVideo/SingleVideo";
import Home from "./Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<SingleVideo />} />
    </Routes>
  );
};

export default Routing;
