import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div>
      <div className="card text-bg-dark text-black border-0">
        <img src="/assests/bg.jpg/images6.jpg" className="card-img" alt="background" height="550px" />
        <div className="card-img-overlay justify-content-center"> 
          <div className="container">
            <h5 className="card-title display-3 fw-bolder flex-start">NEW ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL NEW COLLECTIONS
            </p>           
          </div>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default Home