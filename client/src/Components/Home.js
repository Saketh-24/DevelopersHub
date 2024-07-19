import React from "react";
import Nav from "./Nav";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Nav />
      <div className="homepage">
        <h1>Developers Hub</h1>
        <h3>
          Welcome to developer hub platform. Find the developer that suits you
        </h3>
        <div className="nav-links">
          <button className="auth-link">
            <Link to="/login">Login</Link>
          </button>
          <button className="auth-link">
            <Link to="/Signup">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
