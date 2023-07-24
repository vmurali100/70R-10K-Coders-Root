import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    
        <nav className="navbar navbar-expand-lg bg-light" style={{textalign:"40px"}}>
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontstyle:"bold",fontSize:30,color:'Blue'}} href="#">e-prathibha</a>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/" className="nav-link ">Home</Link>
        </li>
        {/* <li className="nav-item">
            <Link to="/Login" className="nav-link ">Login</Link>
        </li> */}
        <li className="nav-item">
            <Link to="/Signup" className="nav-link ">Sign up</Link>
        </li>
        <li className="nav-item">
            <Link to="/GetFreeexamlist" className="nav-link ">Free Exam List</Link>
        </li>
        <li className="nav-item">
            <Link to="/GetExam" className="nav-link ">Start Exam</Link>
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
