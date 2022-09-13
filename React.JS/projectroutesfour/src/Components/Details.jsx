import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const CartDetail = () => {

    const objUrl = useParams()

    const [Details, setDetails] = useState({})

    useEffect(() => {
        const Items = JSON.parse(localStorage.getItem("Items"))
        const result = Items.find((item) => item.id == objUrl.id)
        setDetails(result)
        console.log(result)
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
                            {Details.userId}
                        </p>

                        <p className="card-text">
                           {Details.products[0].productId}
                        </p>
                        
                        <p className="card-text">
                           {Details.products[0].quantity}
                        </p> 

                        


                        <Link to="/" className='btn btn-primary'>Go back to Carts</Link>


                    </div>

                </div>
             }
      </div>
    
  )
}