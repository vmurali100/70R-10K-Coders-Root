import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
    const urlobj = useParams()
    let url = "http://localhost:3005/products/"
    const navigate = useNavigate();
    
    const deletepage = () => {
        axios.delete(url + urlobj.id).then(() => {
            navigate("/")
        })
    }
    return (
        <div>
            <p>Are you sure to Delete?</p>
            <button type="button" onClick={deletepage} className='btn btn-danger'>Delete Page</button>
        </div>
    )
}
