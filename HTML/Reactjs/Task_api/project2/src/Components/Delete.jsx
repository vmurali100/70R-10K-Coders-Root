import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {
    const urlobj = useParams()
    let url = "/"
    const navigate = useNavigate();
    
    const deletedata = () => {
        axios.delete(url + urlobj.id).then(() => {
            navigate("/")
        })
    }
    return (
        <div>
          <hr />
            <p>Are you sure to Delete?</p>
            <button type="button" onClick={deletedata} className='btn btn-danger'>Delete Data</button>
        </div>
    )
}