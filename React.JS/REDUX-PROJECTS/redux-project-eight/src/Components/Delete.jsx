import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteFilltextAction } from '../Store/slice'


export const Delete = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const objUrl = useParams()

    const handleDelete=()=>{
        dispatch(deleteFilltextAction(objUrl))
        navigate("/")
    }
  return (
    <div>
        <p style={{color : "red"}}>Are You sure to delete this entry ?</p>
        <button type="button" className='btn btn-danger' onClick={handleDelete}>YES</button>
        <Link to="/" className='btn btn-primary'>Cancel</Link>
    </div>
  )
}
