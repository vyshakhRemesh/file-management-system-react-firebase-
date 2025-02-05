import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";

const NavigationComponent = () => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = !!user; // Convert user object to a boolean value
  console.log(`isAuthenticated: ${isAuthenticated} ,user: ${user}`);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand ms-5" href="/">
        React firebase file management system
      </a>

      <ul className="navbar-nav ms-auto me-5">
        {isAuthenticated ? (
          <>
            <li className="nav-item mx-2">
              <Link to="/dashboard" className=" btn btn-primary btn-sm">
                Dashboard
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/" className="btn btn-success btn-sm">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationComponent;
