import { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import DashBoardRouter from "./DashBoardRoutes";
import Login from "../pages/Login";

const AppRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DashBoardRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
