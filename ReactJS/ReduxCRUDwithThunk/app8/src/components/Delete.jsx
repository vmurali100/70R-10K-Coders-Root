import React,{useState} from 'react'
import { deleteCrt } from '../CartsSlice'
import {Link,useParams, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

export const Delete = () => {
  const objurl = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

   const handleDelete=()=>{
    dispatch(deleteCrt(objurl))
    navigate('/')
  }
  return (
    <div>Are u sure u want to delete??
<button type="button" onClick={handleDelete} className="btn btn-danger">Delete</button>
<Link to={'/'}> <button typr="button">Cancel</button> </Link>

    </div>
  )
}
