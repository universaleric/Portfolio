import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/home"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              home.
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutMe"
              className={
                window.location.pathname === "/aboutme"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              about me.
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              contact.
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/skills"
              className={
                window.location.pathname === "/skills"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              skills.
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={
                window.location.pathname === "/projects"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              projects.
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
