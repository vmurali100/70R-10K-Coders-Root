import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="/images/bg.jpg"
            className="card-img"
            alt="Background"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/products" className="btn btn-outline-dark">
            <i className="fa  me-1"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
}
