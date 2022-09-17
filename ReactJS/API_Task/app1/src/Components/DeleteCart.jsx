import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export const DeleteCart = () => {
    const urlobj = useParams()
    let url = "http://localhost:3004/carts/"
    const navigate = useNavigate();
    
    const deletestudent = () => {
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
        <button type="button" onClick={deletestudent} className='btn btn-danger'>Delete Cart</button>

    </div>
  )
}
