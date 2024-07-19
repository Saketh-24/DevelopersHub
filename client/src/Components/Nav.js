import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <div className="title">
          <h1>
            <Link className="custom-link" to="/">
              Developers Hub
            </Link>
          </h1>
        </div>
        <div className="links-container">
          <ul className="nav-links">
            <li className="auth-link">
              <Link className="custom-link" to="/Signup">
                Register
              </Link>
            </li>
            <li className="auth-link">
              <Link className="custom-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
