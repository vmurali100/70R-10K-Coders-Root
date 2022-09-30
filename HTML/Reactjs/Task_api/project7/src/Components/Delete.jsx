import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
    const urlobj = useParams()
    let url = "http://localhost:3003/lists/"
    const navigate = useNavigate();
    
    const Del = () => {
        axios.delete(url + urlobj.id).then(() => {
            navigate("/")
        })
    }
    return (
        <div>
          
            <p>Are you sure to Delete?</p>
            <button type="button" onClick={Del} className='btn btn-danger'>Delete List</button>
        </div>
    )
}