import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import SignUp from "./components/main/SignUp";
import Equipment from "./components/main/Equipment";
// import User from "./components/user";
// import path from "node:path/posix";
// import Header from "./components/user/header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="Home"/>
            <Route element={<Login/>} path="Login"/>
             <Route element={<Header/>} path="Header"/>
            <Route element={<Footer/>} path="Footer"/>
            <Route element={<SignUp/>} path="SignUp"/>
            <Route element={<Equipment/>} path="Equipment"/>
          </Route>
          {/*
          </Route>
          <Route element={<Main/>} path="main">
            <Route element={<resetPassword/>} path="resetPassword"/>
          </Route> */}


          {/* <Route element={<Admin/>} path="admin">
            <Route element={<AdminDashboard />} path="dashboard" />
          </Route> */}
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
          <Route exact element={<Navigate to="/main/home"/>} path=""/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;