import React,{useState} from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Posts = () => {
    let url="http://localhost:3201/ReactPosts";
    const [posts, setposts] = useState([]);

    useEffect(()=>{getDataFromServer()},[])
    
    const getDataFromServer=()=>{
        axios.get(url).then((res)=>{
            localStorage.setItem("Posts",JSON.stringify(res.data));
            setposts(res.data);
            // console.log(posts);
        })
    }
  return (
    <div className='container'>
        <h2>Lists of Posts</h2>
        <table className="table table-striped">
  <thead>
    <tr>
      <th> UserID</th>
      <th >ID</th>
      <th >Title</th>
      <th>Details</th>
      <th>Edit</th>
      <th>Delte</th>
    </tr>
  </thead>
  <tbody>
   {posts.map((pst,i)=>{
    return <tr key={i}>
        <td>{pst.userId}</td>
        <td>{pst.id}</td>
        <td>{pst.title}</td>
        <td><Link to={`/postdetails/${pst.id}`} className="btn btn-primary">Details</Link></td>
        <td><Link to={`/editpost/${pst.id}`} className="btn btn-primary">Edit</Link></td>
        <td><Link to={`/deletepost/${pst.id}`} className="btn btn-primary">Delete</Link></td>
    </tr>
   })}
  </tbody>
</table>
    </div>
  )
}
