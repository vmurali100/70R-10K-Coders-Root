import React,{useState} from 'react'
import { useEffect } from 'react';
import { useParams,Link } from 'react-router-dom'

export const CommentDetails = () => {
  const [comment, setcomment] = useState({}); 
  const objurl=useParams();
  // console.log(objurl);

  useEffect(()=>{
    const commentsData = JSON.parse(localStorage.getItem("Comments"));
  const sltdComment = commentsData.find((comment)=> comment.id == objurl.id);
  setcomment(sltdComment);
  },[])
  
  return (
    <div>PostsDetails
      <div className="container">
      <div className="card" >
  
  <div className="card-body">
    <h5 className="card-title">Comment Detail of CommentId -{comment.id}</h5>
    <p className="card-text">{comment.postId}</p>
    <p className="card-text">{comment.id}</p>
    <p className="card-text">{comment.name}</p>
    <p className="card-text">{comment.email}</p>
    <p className="card-text">{comment.body}</p>
    {/* <a href="#" className="btn btn-primary">Go Back</a> */}
    <Link  to="/comments" className="btn btn-primary">Go Back</Link>
  </div>
</div>
      </div>
    </div>
  )
}
