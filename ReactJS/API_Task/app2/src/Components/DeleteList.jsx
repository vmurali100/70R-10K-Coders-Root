import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DeleteList = () => {
    const urlobj = useParams()
    let url = "http://localhost:3003/lists/"
    const navigate = useNavigate();
    
    const deletelist = () => {
        axios.delete(url + urlobj.id).then(() => {
            navigate("/")
        })
    }
    return (
        <div>
          <hr />
          <hr />
          <hr />
            <p>Are you sure to Delete?</p>
            <button type="button" onClick={deletelist} className='btn btn-danger'>Delete List</button>
        </div>
    )
}