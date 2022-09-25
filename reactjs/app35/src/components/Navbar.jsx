import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Redux-5-API</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className='nav-link'>DEFAULT-DATA</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/create" className='nav-link'>CREATE</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
