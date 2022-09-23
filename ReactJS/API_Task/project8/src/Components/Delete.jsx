import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
    const urlobj = useParams()
    let url = "http://localhost:3008/lists/"
    const navigate = useNavigate();
    
    const deletetodo = () => {
        axios.delete(url + urlobj.id).then(() => {
            navigate("/")
        })
    }
    return (
        <div>
            <p>Are you sure to Delete?</p>
            <button type="button" onClick={deletetodo} className='btn btn-danger'>Delete Todo</button>
        </div>
    )
}
