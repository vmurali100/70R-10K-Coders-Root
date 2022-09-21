import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllUsers } from '../store/usersSlice'
import { useNavigate } from "react-router-dom";


export const Users = () => {
     const usersDetails=useSelector((state)=>state.users);//for accessing state
     
   console.log(usersDetails.users)
   localStorage.setItem('users',JSON.stringify(usersDetails.users))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getusers=()=>{
    dispatch(getAllUsers());
   }
   
   useEffect(()=>{
        getusers()
   },[])
   const handleDelete=(user)=>{
    navigate(`delete/${user.id}`)
  }
  const handleEdit=(user)=>{
    navigate(`edit/${user.id}`)
  }
  return (
  <div className='container'>
      <table class="table table-dark table-striped">
        
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersDetails.users.map((user,i)=>(
          <tr key={i}>

            <td>{user.id}</td>
            <td>{user.title}</td>
            <td>{user.body}</td>
            <td><button className='btn btn-warning' onClick={()=>{handleEdit(user)}}>Edit</button></td>
            <td><button className='btn btn-danger' onClick={()=>{handleDelete(user)}}>Delete</button></td>
         </tr>))}
        </tbody>
        </table>

        



  
    </div>
  )

  
}
