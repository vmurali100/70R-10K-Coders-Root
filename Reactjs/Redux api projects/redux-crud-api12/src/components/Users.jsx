import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deleteUser, getAllUsers } from '../Store/usersSlice'
import { useNavigate } from 'react-router-dom'
export const Users = () => {
    const usersDetails = useSelector((state) => state.users)
    console.log(usersDetails.users)
    localStorage.setItem('users',JSON.stringify(usersDetails.users))
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const getusers = () => {
        dispatch(getAllUsers())
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
        <div className="container">
           {/* <button onClick={getusers} classNameName="btn btn-primary">Get user</button>*/}
            <table className="table">
  <thead>
    <tr>
   
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Category</th>
      <th scope="col">Image</th>
     
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {usersDetails.users.map((user,i)=> <tr key={i}>
        <td>{user.id}</td>
        <td>{user.title}</td>
        <td>{user.price}</td>
        <td>{user.description}</td>
        <td>{user.category}</td>
        <td>{user.image}</td>
        
        <td><button className='btn btn-warning' onClick={()=>{handleEdit(user)}}>Edit</button></td>
        <td><button className='btn btn-danger' onClick={()=>{handleDelete(user)}}>Delete</button></td>
    </tr>
    )}
  </tbody>
</table>

        </div>
    )
}
