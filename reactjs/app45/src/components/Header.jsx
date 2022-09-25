import React from 'react'
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <div className='container'>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Carousel-Router3</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">

                                    <li >
                                        <Link to="/" className='nav-link'>Display</Link>
                                    </li>
                                    <li>
                                        <Link to="/create" className='nav-link'> Create</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    )
}
