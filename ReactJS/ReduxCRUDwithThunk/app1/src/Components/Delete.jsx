import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deletePost } from '../postsSlice'

export const Delete = () => {
  const param =useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDelete=()=>{    
    dispatch(deletePost(param))
    navigate('/posts')

   }
  return (
    <div className='container' style={{ textAlign: "center" }}><h3>Delete Post??</h3>
      <p style={{ align: 'center' }}>Are you sure you want to delete???  </p>
      <button type="button" className='btn btn-danger' onClick={handleDelete}>Delete</button>
      <Link to={'/posts'}><button type="button" className='btn btn-primary' style={{ marginLeft: '10px' }}>Cancel</button></Link>

    </div>
  )
}
