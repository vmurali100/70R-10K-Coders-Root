import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export const Details = () => {
    const objUrl = useParams()
    const [fillTextThree, setfillTextThree] = useState({})

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("filltextthree"))
        const result = info.find((inf) => inf.id == objUrl.id)
        setfillTextThree(result)
        
    },[]);

    return (
        <div>
            {Object.keys(fillTextThree).length > 0 && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Details</h5>

                    <p className="card-text">
                        {fillTextThree.id}
                    </p>

                    <p className="card-text">
                        {fillTextThree.email}
                    </p>

                    <p className="card-text">
                        {fillTextThree.username}
                    </p>

                    
                    <p className="card-text">
                        {fillTextThree.password}
                    </p>

                    
                   

                   
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </div>
            </div>
            }
        </div>
    )
}
