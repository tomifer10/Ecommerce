import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";

type Props = {};

export default function AppRoutes({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <MainRoutes />
      </Routes>
    </BrowserRouter>
  );
}