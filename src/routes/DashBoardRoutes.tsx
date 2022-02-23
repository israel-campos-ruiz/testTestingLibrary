import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/UI/header/Navbar";
import DC from "../pages/DC";
import Marvel from "../pages/Marvel";
import Search from "../pages/Search";

const DashBoardRouter: FC = (): JSX.Element => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="Marvel" element={<Marvel/>}/>
        <Route path="DC" element={<DC/>} />
        <Route path="search" element={<Search/>} />
        <Route path="/" element={<Marvel/>}/>
       
      </Routes>
    </>
  );
};

export default DashBoardRouter;