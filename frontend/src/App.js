import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import SignUp from "./components/main/SignUp";
import Equipment from "./components/main/Equipment";
import Admin from "./components/admin";
import AddEquipment from "./components/admin/addequipment";
import AdminDashboard from "./components/admin/dashboard";
import Product from "./components/main/Product";
import NotFound from "./components/main/NotFound";
// import User from "./components/user";
// import path from "node:path/posix";
// import Header from "./components/user/header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="Home" />
            <Route element={<Login />} path="Login" />
            <Route element={<Header />} path="Header" />
            <Route element={<Footer />} path="Footer" />
            <Route element={<SignUp />} path="SignUp" />
            <Route element={<Equipment />} path="Equipment" />
            <Route element={<Product />} path="Product" />
            <Route element={<NotFound />} path="NotFound" />

          </Route>
          {/*
          </Route>
          <Route element={<Main/>} path="main">
            <Route element={<resetPassword/>} path="resetPassword"/>
          </Route> */}


          <Route element={<Admin />} path="admin">
            <Route element={<AdminDashboard />} path="dashboard" >
              <Route element={<AddEquipment />} path="addequipment" />
            </Route>

          </Route>
          {/* <Route element={<Admin/>} path="admin">
            <Route element={<addequipment/>} path="addequipment" />
          </Route>
          <Route element={<Admin/>} path="admin">
            <Route element={<addstaff/>} path="addstaff" />
          </Route>
          <Route element={<Admin/>} path="admin">
            <Route element={<footer/>} path="footer" />
          </Route>
          <Route element={<Admin/>} path="admin">
            <Route element={<header/>} path="header" />
          </Route>


          <Route element={<User/>} path="user">
            <Route element={<AdminDashboard/>} path="dashboard"/>
          </Route> */}
          {/* <Route element={<User/>} path="user">
            <Route element={<Footer/>} path="footer"/>
          </Route>
          <Route element={<User/>} path="user">
            <Route element={<Header/>} path="header"/>
          </Route> */}
          <Route exact element={<Navigate to="/main/home" />} path="" />
          <Route exact element={<Navigate to="/main/NotFound" />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;