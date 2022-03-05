import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
    return (
      <div>
        <h1>Home components</h1>
        <Outlet/>
      </div>
    );
  };
  
  export default AdminDashboard;