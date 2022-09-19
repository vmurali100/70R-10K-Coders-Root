import React from 'react'
import {Link} from 'react-router-dom'

 const Home = () => {
  return (
    <div className='container'>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" >
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">     
      <span className="fs-4">Sidebar</span>
    </a>
    
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        {/* <a href="#" className="nav-link active" aria-current="page">         
          Albums
        </a> */}
        <Link to="/albums" className="nav-link active">Albums</Link>
      </li>
      <li>
        {/* <a href="#" className="nav-link text-white">         
          Create NewAlbums
        </a> */}
         <Link to="/createalbum" className="nav-link active">Create NewAlbums</Link>
      </li>
      {/* <li>
        <a href="#" className="nav-link text-white">          
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">          
          Products
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">         
          Customers
        </a>
      </li> */}
    </ul>
    </div>
    
    </div>
  )
}
export default Home;