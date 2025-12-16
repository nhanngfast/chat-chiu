import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import "./MainLayout.css"

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
