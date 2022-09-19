import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'

export const Details = () => {
    const objUrl = useParams()
    const [details, setDetails] = useState({})
    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("comments"));
        const result = info.find((item) => item.id == objUrl.id);
        setDetails(result)
    }, [])
    return (
        <div>
            {Object.keys(details).length > 0 && <div class="card">

                <div class="card-body">
                    <h5 class="card-title">Details</h5>

                    <p class="card-text">
                        {details.id}
                    </p>

                    <p class="card-text">
                        {details.postId}
                    </p>

                    <p class="card-text">
                        {details.name}
                    </p>

                    <p class="card-text">
                        {details.email}
                    </p>

                    <p class="card-text">
                        {details.body}
                    </p>

                    <Link to="/" class="btn btn-primary">Go to Home</Link>
                </div>
            </div>}
        </div>
    )
}
