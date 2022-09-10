import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h2>Welcome to Home Component</h2>
        <button>
            {/* <Link to ="/Contacts">Go to Contacts Component</Link> */}
            <Link to ="/Contacts">Go to Contacts Component</Link>
        </button>
    </div>
  )
}
