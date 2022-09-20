import React from 'react'
import { deletePhotoAction } from '../Store/photosslice'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export const Delete = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const objUrl = useParams()


  const handleDelete = () => {
    dispatch(deletePhotoAction(objUrl));
    navigate("/")
  }

  const handleCancel = () => {
    navigate("/")
  }



  return (
    <div>
      <p style={{ color: "red" }}>Are you sure to delete ?</p>
      <button type="button" className='btn btn-danger' onClick={handleDelete}>DELETE</button>
      <button style={{marginLeft:"20px"}} type="button" className='btn btn-primary' onClick={handleCancel}>Cancel</button>
    </div>
  )
}
