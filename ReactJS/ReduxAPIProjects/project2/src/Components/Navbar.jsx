import React from "react";
import { Link } from "react-router-dom";



export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            Redux Project 2
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">


            <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
            <li class="nav-item"><Link to="/create" class="nav-link">Create User</Link></li>
            
                </ul>

          </div>
      </div>

    </nav>
  );
};
