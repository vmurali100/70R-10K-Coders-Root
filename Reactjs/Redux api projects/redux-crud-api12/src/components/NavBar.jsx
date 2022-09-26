import React from 'react'
import {Link}  from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Redux Project 12</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
           <Link to="/" className="nav-link">
           Home
           </Link>
         </li>
        <li className="nav-item">
           <Link to="/create" className="nav-link">
           Create User
           </Link>
        </li>
        
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
