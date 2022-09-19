import React,{useState} from 'react'
import { useEffect } from 'react';
import {  useParams,Link } from 'react-router-dom';

export const PostsDetails = () => {
  let url= "http://localhost:3201/ReactPosts";
  const [postInfo, setpostInfo] = useState({});
  let objurl=useParams();
 
  useEffect(()=>{
    const postData = JSON.parse(localStorage.getItem("Posts"));
    const pstData = postData.find((pt)=>pt.id == objurl.id);
    // console.log(postData);
    setpostInfo(pstData);
  },[])
  return (
    <div>PostsDetails
      <div className="container">
      <div className="card" >
  
  <div className="card-body">
    <h5 className="card-title">Post Detail of PostID -{postInfo.id}</h5>
    <p className="card-text">{postInfo.userId}</p>
    <p className="card-text">{postInfo.id}</p>
    <p className="card-text">{postInfo.title}</p>
    <p className="card-text">{postInfo.body}</p>
    {/* <a href="#" className="btn btn-primary">Go Back</a> */}
    <Link  to="/posts" className="btn btn-primary">Go Back</Link>
  </div>
</div>
      </div>
    </div>
  )
}
