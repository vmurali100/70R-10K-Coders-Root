import React from 'react'
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
        <h2>Welcome to home component</h2>
        <button>
            <Link to='/contacts'>Go to Contacts</Link>
        </button>
    </div>
  )
}
