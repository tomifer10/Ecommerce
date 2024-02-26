import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Catalog from "../Catalog";
import GreetingPage from "../GreetingPage";
import { ProductContextProvider } from "../../context/prodContext";
import { UserContextProvider } from "../../context/userContext";
import ProductInfo from "../ProductInfo";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<UserContextProvider />}>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<GreetingPage />} />
        <Route element={<ProductContextProvider />}>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/:productId" element={<ProductInfo />} />
        </Route>
      </Route>
    </Routes>
  );
};
