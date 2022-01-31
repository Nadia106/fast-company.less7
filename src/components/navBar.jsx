import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          MainPage
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          Users
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
