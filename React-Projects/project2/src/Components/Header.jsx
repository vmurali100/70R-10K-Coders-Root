import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link to="/Home" className="nav-link ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Users" className="nav-link ">
                Users
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
