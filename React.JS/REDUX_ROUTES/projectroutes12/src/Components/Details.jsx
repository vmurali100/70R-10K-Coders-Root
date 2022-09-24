import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Details = () => {
    const objUrl = useParams()
    const [carts, setcarts] = useState({})

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("carts"))
        const result = info.find((inf) => inf.id == objUrl.id)
        setcarts(result)

    }, []);

    return (
        <div>
            {Object.keys(carts).length > 0 && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Details</h5>

                    <p className="card-text">
                        {carts.id}
                    </p>

                    <p className="card-text">
                        {carts.userId}
                    </p>

                    <p className="card-text">
                        {carts.date}
                    </p>


                    <p className="card-text">
                        {carts.products.productId}
                    </p>

                    <p className="card-text">
                        {carts.products.quantity}
                    </p>

                    <Link to="/" className="btn btn-primary">Go to Home</Link>

                </div>

            </div>

            }

        </div>
    )
}
