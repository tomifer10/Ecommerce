import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Catalog from "../Catalog";
import GreetingPage from "../GreetingPage";
import ProductInfo from "../ProductInfo";
import ShoppingCart from "../ShoppingCart";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/greeting"
        element={<ProtectedRoute component={GreetingPage} />}
      />
      <Route path="/catalog" element={<ProtectedRoute component={Catalog} />} />
      <Route
        path="/:productId"
        element={<ProtectedRoute component={ProductInfo} />}
      />
      <Route
        path="/cart"
        element={<ProtectedRoute component={ShoppingCart} />}
      />
    </Routes>
  );
};
