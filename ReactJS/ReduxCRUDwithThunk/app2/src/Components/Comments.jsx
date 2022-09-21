import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllComments } from '../CommentsSlice';
import { Link, useNavigate } from 'react-router-dom';

export const Comments = () => {
  const commentDetails = useSelector((state)=> state.comments);
  console.log(commentDetails.comments)
  localStorage.setItem('Comments',JSON.stringify(commentDetails.comments))
  const dispatch = useDispatch();

//   const getComments=()=>{
//     dispatch(getAllComments())
//   }
  
// useEffect(()=>{
//   getComments()
// },[])


useEffect(()=>{
  dispatch(getAllComments())
},[])
 
  return (
    <div className='container'><h2>Comments</h2>    
    <Link to="/create"><button type="button" id="create"  className='btn btn-primary'>Create New</button></Link>  
        <table className="table table-info">
        <thead>
    <tr>
      <th >postId</th>
      <th >Id</th>
      <th >Name</th>
      <th>Email</th>
      <th >Body</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {commentDetails.comments.map((cmnt,i)=> <tr key={i}>
        <td>{cmnt.postId}</td>
        <td>{cmnt.id}</td>
        <td>{cmnt.name}</td>
        <td>{cmnt.email}</td>
        <td>{cmnt.body}</td>
        <td><Link to={`/edit/${cmnt.id}`} className='btn btn-warning'> Edit</Link></td>
        <td> <Link to={`/delete/${cmnt.id}`} className='btn btn-danger'> Delete</Link>
        </td>

    </tr>)}
    </tbody>
        </table>
     
        
    </div>
  )
}
