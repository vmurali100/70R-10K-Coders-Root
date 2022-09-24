import React,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export const Comments = () => {
  const [comments, setcomments] = useState([]);
  let url="http://localhost:3205/Comments";
  useEffect(()=>{
    axios.get(url).then((res)=>{
      // console.log(res.data);
      localStorage.setItem("Comments",JSON.stringify(res.data));
      setcomments(res.data);
    })
  },[])

  return (
    <div className='container'>
   <><Link to="/"><button type="button" id="home"  className='btn btn-primary'>HOME</button></Link> 
        <h2>Lists of Comments</h2></> 
        <table className="table table-striped">
  <thead>
    <tr>
      <th> PostID</th>
      <th >ID</th>
      <th >Name</th>
      <th>Details</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   {comments.map((comment,i)=>{
    return <tr key={i}>
      <td>{comment.postId}</td>
      <td>{comment.id}</td>
      <td>{comment.name}</td>
      <td>
        <Link to={`/comments/${comment.id}`} className="btn btn-primary">Details</Link>
      </td>
      <td>
        <Link to={`/editcomments/${comment.id}`} className="btn btn-warning">Edit</Link>
      </td>
      <td>
        <Link to={`/deletecomments/${comment.id}`} className="btn btn-danger">Delete</Link>
      </td>
    </tr>
   })}
  </tbody>
</table>
    </div>
  )
}
