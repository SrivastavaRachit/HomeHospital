import { AccountCircle, Dashboard } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";

const Admin = () => {
  const sideOptions = [
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Add Equipment",
      icon: <AccountCircle />,
      link: "/admin/addequipment",
    },
  ];

  return (
    <>
      <Sidebar sideOptions={sideOptions} title={"Admin Dashboard"}>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Admin;
