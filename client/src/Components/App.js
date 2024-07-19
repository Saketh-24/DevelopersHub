import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/Signup" Component={SignUp} />
      </Routes>
    </div>
  );
};

export default App;
