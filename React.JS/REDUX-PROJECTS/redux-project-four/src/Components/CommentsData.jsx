import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getallComments } from '../Store/slice';
import {editCommentAction} from '../Store/slice'

export const CommentsData = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const commentsData = useSelector((state) => state.comments);
  console.log(commentsData.comments)

  localStorage.setItem("comments",JSON.stringify(commentsData.comments));

  const getData = () => {
    dispatch(getallComments());
  }

  useEffect(() => {
    getData();
  }, [])

  const handleEdit = (comm) => {
    navigate(`/Edit/${comm.id}`)
   
  }

  const handleDelete = (comm) => {
    navigate(`/Delete/${comm.id}`)

  }

  return (
    <div>
      <table className="table table-dark table-striped" style={{marginTop:"30px"}} >
        <thead>
          <tr>
            <th>POST ID</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {commentsData.comments.map((comm, i) => {
            return <tr key={i}>
              <td>{comm.postId}</td>
              <td>{comm.id}</td>
              <td>{comm.name}</td>
              <td>{comm.email}</td>
              <td>{comm.body}</td>
              <td>
                <button type="button" className='btn btn-warning' onClick={()=>handleEdit(comm)}>Edit</button>
              </td>
              <td>
                <button type="button" className='btn btn-danger' onClick={()=>handleDelete(comm)}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
