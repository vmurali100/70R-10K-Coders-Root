import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    
        <nav className="navbar navbar-expand-lg bg-light" style={{textalign:"40px"}}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontstyle:"italic"}} href="#">My</a>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/" className="nav-link ">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/Create" className="nav-link ">Create User</Link>
        </li>
        <li className="nav-item">
            <Link to="/Edit" className="nav-link ">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/Delete" className="nav-link ">Contact Us</Link>
        </li>
      
        
      </ul>
      <form className="d-flex" role="search">
        <Link to="./Search" className="btn btn-outline-success" type="submit">Search</Link>
      </form>
    </div>
  </div>
</nav>
    
  )
}
