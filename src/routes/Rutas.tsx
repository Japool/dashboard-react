import { Route, Routes } from "react-router-dom";
import { About, Home } from "../pages";

export const Rutas = () => {
  return (
    <Routes>
      {/* dashboard  */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mapa" element={<About />} />
    </Routes>
  );
};
