import { Navigate } from "react-router-dom";
import { useAuthenticationState } from "../../context/authContext";

const ProtectedRoute = ({
  component: Component,
}: {
  component: React.ElementType;
}) => {
  const { isAuth } = useAuthenticationState();
  return isAuth ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
