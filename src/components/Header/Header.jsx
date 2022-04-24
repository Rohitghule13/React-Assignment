import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          <h3>React Assignment</h3>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item h6 mb-0 mx-2">
              <Link to="/userlist" className="nav-link">
                User List
              </Link>
            </li>
            <li className="nav-item h6 mb-0 mx-2 active">
              <Link to="/" className="nav-link">
                User Form
              </Link>
            </li>
            <li className="nav-item h6 mb-0 mx-2">
              <Link to="/colleges" className="nav-link">
                Colleges
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
