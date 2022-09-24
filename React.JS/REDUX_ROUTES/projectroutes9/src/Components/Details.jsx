import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export const Details = () => {
    const objUrl = useParams()
    const [filltext, setFilltext] = useState({})

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("filltext"))
        const result = info.find((inf) => inf.id == objUrl.id)
        setFilltext(result)
        
    },[]);

    return (
        <div>
            {Object.keys(filltext).length > 0 && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Details</h5>

                    <p className="card-text">
                        {filltext.id}
                    </p>

                    <p className="card-text">
                        {filltext.fname}
                    </p>

                    <p className="card-text">
                        {filltext.lname}
                    </p>

                    
                    <p className="card-text">
                        {filltext.tel}
                    </p>

                    
                    <p className="card-text">
                        {filltext.address}
                    </p>

                    
                    <p className="card-text">
                        {filltext.city}
                    </p>

                    
                    <p className="card-text">
                        {filltext.state}
                    </p>

                    <p className="card-text">
                        {filltext.zip}
                    </p>

                   
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </div>
            </div>
            }
        </div>
    )
}
