import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers,deleteUser } from '../store/usersSlice'
import { useNavigate } from "react-router-dom";


export const Users = () => {
  const usersDetails=useSelector((state)=>state.users)//for  defining  state we use useselector.
  console.log(usersDetails.users)
  localStorage.setItem('users',JSON.stringify(usersDetails.users))

  const dispatch=useDispatch()
  const navigate= useNavigate()

  const getusers=()=>{
    dispatch(getAllUsers())
  }

  useEffect(()=>{//by default to get data
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
      {/* <button onClick={getusers}>Get User</button> */}
      <table class="table table-success table-striped-columns">
        
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            {/* <th>Details</th> */}
            <th>Edit</th>
            <th>Delete</th>



          </tr>
        </thead>
        <tbody>
          {usersDetails.users.map((user,i)=>(
          <tr key={i}>

            <td>{user.id}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td><button className='btn btn-warning' onClick={()=>{handleEdit(user)}}>Edit</button></td>
            <td><button className='btn btn-danger' onClick={()=>{handleDelete(user)}}>Delete</button></td>
         </tr>))}
        </tbody>
        </table>

        

           {/* <button type="button" className='btn btn-primary' onClick={AddUser}>Update</button> */}


  
    </div>
  )

  
}