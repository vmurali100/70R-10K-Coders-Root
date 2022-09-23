import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export const Details = () => {
    const objUrl = useParams()
    const [users, setusers] = useState({})

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("users"))
        const result = info.find((inf) => inf.id == objUrl.id)
        setusers(result)
        
    },[]);

    return (
        <div>
            {Object.keys(users).length > 0 && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Details</h5>

                    <p className="card-text">
                        {users.id}
                    </p>

                    <p className="card-text">
                        {users.fname}
                    </p>

                    <p className="card-text">
                        {users.lname}
                    </p>

                   
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </div>
            </div>
            }
        </div>
    )
}
