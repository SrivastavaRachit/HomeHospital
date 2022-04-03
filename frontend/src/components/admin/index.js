import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./Header";
import Slider from "../SideBar"

const Admin = () => {
  return (
    <>
      <Header />
      <Slider>
      <Outlet />
      </Slider>
      <Footer />
    </>
  );
};

export default Admin;
