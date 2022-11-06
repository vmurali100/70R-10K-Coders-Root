import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
    const urlobj = useParams()
    let url = "/"
    const navigate = useNavigate();
    
    const deletekart = () => {
        axios.delete(url + urlobj.id).then(() => {
            navigate("/")
        })
    }
    return (
        <div>
            <p>Are you sure to Delete?</p>
            <button type="button" onClick={deletekart} className='btn btn-danger'>Delete User</button>
        </div>
    )
}