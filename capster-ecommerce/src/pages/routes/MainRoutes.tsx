import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Catalog from "../Catalog";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
    </Routes>
  );
};
