import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/home";
import Login from "./components/main/Login";
import User from "./components/user";
import path from "node:path/posix";
import Footer from "./components/main/footer";
import Header from "./components/user/header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
          </Route>
          <Route element={<Main />} path="main">
            <Route element={<Login/>} path="Login" />
          </Route>
          <Route element={<Main/>} path="main">
            <Route element={<header/>} path="header"/>
          </Route>
          <Route element={<Main/>} path="main">
            <Route element={<footer/>} path="footer"/>
          </Route>
          <Route element={<Main/>} path="main">
            <Route element={<signuo/>} path="signup"/>
          </Route>
          <Route element={<Main/>} path="main">
            <Route element={<resetPassword/>} path="resetPassword"/>
          </Route>


          <Route element={<Admin/>} path="admin">
            <Route element={<AdminDashboard />} path="dashboard" />
          </Route>
          <Route element={<Admin/>} path="admin">
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
          </Route>
          <Route element={<User/>} path="user">
            <Route element={<Footer/>} path="footer"/>
          </Route>
          <Route element={<User/>} path="user">
            <Route element={<Header/>} path="header"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;