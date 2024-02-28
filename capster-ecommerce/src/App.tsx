import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthenticationProvider } from "./context/authContext";
import AppRoutes from "./pages/routes";
import { UserContextProvider } from "./context/userContext";
import { ProductContextProvider } from "./context/prodContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <AuthenticationProvider>
          <ProductContextProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </ProductContextProvider>
        </AuthenticationProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
