import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export const Details = () => {
    const objUrl = useParams()
    const [albums, setAlbums] = useState({})

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("albums"))
        const result = info.find((inf) => inf.id == objUrl.id)
        setAlbums(result)
        
    },[]);

    return (
        <div>
            {Object.keys(albums).length > 0 && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Details</h5>

                    <p className="card-text">
                        {albums.id}
                    </p>

                    <p className="card-text">
                        {albums.userId}
                    </p>

                    <p className="card-text">
                        {albums.title}
                    </p>

                   
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </div>
            </div>
            }
        </div>
    )
}
