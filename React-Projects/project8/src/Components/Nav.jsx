import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
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
              <Link to="/Products" className="nav-link ">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FindProduct" className="nav-link ">
                Find Products
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
