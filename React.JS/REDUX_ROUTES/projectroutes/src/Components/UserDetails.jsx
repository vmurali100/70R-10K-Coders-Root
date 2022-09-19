import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const UserDetails = () => {
    const objUrl = useParams()
    const [userinfo, setuserinfo] = useState({})
    useEffect(()=>{
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users.find((user)=> user.id == objUrl.id)
        setuserinfo(user)
    },[])
  return (
    <div className='container'>
            {Object.keys(userinfo).length > 0 && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">
                        {userinfo.name}
                    </h5>
                    
                    <p className="card-text">
                        {userinfo.username}
                    </p>
                    
                    <p className="card-text">
                        {userinfo.email}
                    </p>
                  

                    <Link to="/User" className='btn btn-primary'>Go back to User page</Link>

                </div>

            </div>}
        </div>
  )
}
