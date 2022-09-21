import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllComments } from '../store/commentsSlice'
import { useNavigate } from "react-router-dom";



export const Comments = () => {
     const commentsDetails=useSelector((state)=>state.comments);//for accessing state
     
   console.log(commentsDetails.comments)
   localStorage.setItem('comments',JSON.stringify(commentsDetails.comments))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getcomments=()=>{
    dispatch(getAllComments());
   }
   
   useEffect(()=>{
        getcomments()
   },[])
   const handleDelete=(comment)=>{
    navigate(`delete/${comment.id}`)
  }
  const handleEdit=(comment)=>{
    navigate(`edit/${comment.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>PostId</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {commentsDetails.comments.map((comment,i)=>(
              <tr key={i}>
    
                <td>{comment.id}</td>
                <td>{comment.postId}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
                <td><button className='btn btn-warning' onClick={()=>{handleEdit(comment)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(comment)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
    
            
    
    
    
      
        </div>
      )
    
      
    }
    