import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
    const urlobj = useParams()
    let url = "http://localhost:3009/products/"
    const navigate = useNavigate();
    
    const deleteproduct = () => {
        axios.delete(url + urlobj.id).then(() => {
            navigate("/")
        })
    }
    return (
        <div>
            <p>Are you sure to Delete?</p>
            <button type="button" onClick={deleteproduct} className='btn btn-danger'>Delete User</button>
        </div>
    )
}
