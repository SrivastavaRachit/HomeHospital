import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
