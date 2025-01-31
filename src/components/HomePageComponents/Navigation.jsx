import React from "react";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand ms-5" href="/">
        React firebase file management system
      </a>

      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item mx-2">
          <Link to="/login" className=" btn btn-primary btn-sm">
            login
          </Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/register" className="btn btn-success btn-sm">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationComponent;
