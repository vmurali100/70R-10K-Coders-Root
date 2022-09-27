import React from "react";
import { Link } from "react-router-dom";



export const Header = () => {

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              React Routing App 8 with carts
            </a>
            
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                {/* <li>
              <Link to="/" className="nav-link ">Element</Link>
                </li> */}
                <li>
              <Link to="/create" className="btn btn-primary ">Create</Link>
                </li>
                
                
                  
              </ul>
              
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};