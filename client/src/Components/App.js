import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import "./App.css";
import DevPage from "./Developers/DevPage";
import Details from "./Developers/Details";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/Signup" Component={SignUp} />
        <Route path="/devPage" Component={DevPage} />
        <Route path="/devPage/:id" Component={Details} />
      </Routes>
    </div>
  );
};

export default App;
