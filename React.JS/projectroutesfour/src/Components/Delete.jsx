import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import {useParams,useNavigate} from 'react-router-dom'

export const DeleteCart = () => {
    const objUrl = useParams();
    let url = "http://localhost:3201/items/"
    const navigate = useNavigate()
    const deleteCart=()=>{
        axios.delete(url+objUrl.id).then(()=>{
            navigate("/")
        })
    }
  return (
    <div>
        <p>Sure..you wanna delete the item?</p>
        <button type="button" className='btn btn-danger' onClick={deleteCart}>Delete Item</button>
    </div>
  )
}
