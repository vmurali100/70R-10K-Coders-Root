import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavigationBar() {
  // It takes in an funtion argument and returns the part of state
  const state = useSelector((state) => state.HandleCart);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="#">
            ShopHub Collections
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/Login" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"></i> Login
              </Link>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
