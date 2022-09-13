import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Details = () => {

    const objUrl = useParams()

    const [Details, setDetails] = useState({})

    useEffect(() => {
        const photos = JSON.parse(localStorage.getItem("photos"))
        const result = photos.find((photo) => photo.id == objUrl.id)
        setDetails(result)
    }, [])


    return (
        <div className='container'>

            {Object.keys(Details).length > 0 &&
                <div className="card">

                    <div className="card-body">
                        <h5 className="card-title">
                            {Details.id}
                        </h5>

                        <p className="card-text">
                            {Details.title}
                        </p>

                        <p className="card-text">
                           {Details.url}
                        </p> 

                        <p className="card-text">
                           {Details.thumbnailUrl}
                        </p>


                        <Link to="/" className='btn btn-primary'>Go back to photos</Link>


                    </div>

                </div>
             }
      </div>
    
  )
}
