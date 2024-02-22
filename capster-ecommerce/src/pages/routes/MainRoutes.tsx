import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Catalog from "../Catalog";
import { ProductContextProvider } from "../../context/prodContext";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProductContextProvider />}>
        <Route path="/catalog" element={<Catalog />} />
      </Route>
    </Routes>
  );
};
