import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deletePost, getAllPosts } from '../postsSlice';

export const Posts = () => {
   const postDetails = useSelector((state)=>{return state.posts});
  //  console.log(postDetails.posts);
   localStorage.setItem('posts',JSON.stringify(postDetails.posts))
   const dispatch = useDispatch();
   const navigate =useNavigate()
   
   const getposts=()=>{
    dispatch(getAllPosts())
   }

   
   useEffect(()=>{
    getposts()
   },[])

  
  return (
    <div className='container'><h2>Posts</h2> 
     <Link to="/"><button type="button" id="home"  className='btn btn-primary'>HOME</button></Link> 
        <table className="table table-warning">
        <thead>
    <tr>
      <th >UserId</th>
      <th >Id</th>
      <th >Title</th>
      <th >Body</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {postDetails.posts.map((post,i)=> <tr key={i}>
        <td>{post.userId}</td>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td><Link to={`/edit/${post.id}`} className='btn btn-warning'> Edit</Link></td>
        <td> <Link to={`/delete/${post.id}`} className='btn btn-danger'> Delete</Link>
        </td>

    </tr>)}
    </tbody>
        </table>
     
        
    </div>
  )
}
