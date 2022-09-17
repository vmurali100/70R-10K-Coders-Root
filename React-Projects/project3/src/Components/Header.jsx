import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/HomePage" className="nav-link ">
                Home Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Students" className="nav-link ">
              Students
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link ">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Search" className="nav-link ">
                Search
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
