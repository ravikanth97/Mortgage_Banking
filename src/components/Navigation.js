import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/dashboard">
            <img src="/logo192.png" withd="50px" height="50px" alt="Example" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={onLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to="/"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;