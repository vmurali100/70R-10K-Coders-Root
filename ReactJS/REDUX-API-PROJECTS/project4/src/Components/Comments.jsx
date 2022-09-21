import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { getAllComments } from '../store/commentsSlice'



export const Comments = () => {
   const commentsDetails=useSelector((state)=>state.comments);
   localStorage.setItem('comments',JSON.stringify(commentsDetails.comments))
   console.log(commentsDetails.comments)
   const dispatch = useDispatch();
   const navigate =useNavigate();



   const handleEdit=(comment)=>{
      navigate(`edit/${comment.id}`)
   }

   const handleDelete=(comment)=>{
    navigate(`delete/${comment.id}`)
   }
   
   const getcomments=()=>{
    dispatch(getAllComments());
   }
   
   useEffect(()=>{
        getcomments()
   },[])
  
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
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