import React from 'react'
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
        <header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Carousel</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            {/* <a className="nav-link" aria-current="page" href="#">Students</a> */}
            <Link to="/" className="nav-link">Students</Link>
          </li>
          <li className="nav-item">
          <Link to="/subject" className="nav-link">Subject</Link>
          </li>
          <li className="nav-item">
          <Link to="/teachers" className="nav-link">Teachers</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
</header>
    </div>
  )
}
