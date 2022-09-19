import React from 'react'
import {Link} from 'react-router-dom'

 const Header = () => {
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
            {/* <a className="nav-link active" aria-current="page" href="#">Posts</a> */}
            <Link to="/" className="nav-link active">Header</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="#">Posts</a> */}
            <Link to="/posts" className="nav-link active">Posts</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Create New Post</a> */}
            <Link to="/createposts" className="nav-link active">Create NewPost</Link>
          </li>
          
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>
    </div>
  )
}

export default Header;