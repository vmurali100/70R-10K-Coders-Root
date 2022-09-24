import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export const Details = () => {
    const objUrl = useParams()
    const [products, setproducts] = useState({})

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("products"))
        const result = info.find((inf) => inf.id == objUrl.id)
        setproducts(result)
        
    },[]);

    return (
        <div>
            {Object.keys(products).length > 0 && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Details</h5>

                    <p className="card-text">
                        {products.id}
                    </p>

                    <p className="card-text">
                        {products.title}
                    </p>

                    <p className="card-text">
                        {products.price}
                    </p>

                    
                    <p className="card-text">
                        {products.description}
                    </p>

                    <p className="card-text">
                        {products.category}
                    </p>

                    <p className="card-text">
                        {products.image}
                    </p>

                    
                   

                   
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </div>
            </div>
            }
        </div>
    )
}
