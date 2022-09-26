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
      <th scope="col">Email</th>
      <th scope="col">UserName</th>
      <th scope="col">Password</th>
      <th scope="col">Phone</th>
      <th scope="col">City</th>
      <th scope="col">Street</th>
      <th scope="col">Number</th>
      <th scope="col">zipcode</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {usersDetails.users.map((user,i)=> <tr key={i}>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <td>{user.phone}</td>
        <td>{user.city}</td>
        <td>{user.street}</td>
        <td>{user.number}</td>
        <td>{user.zipcode}</td>
        <td><button className='btn btn-warning' onClick={()=>{handleEdit(user)}}>Edit</button></td>
        <td><button className='btn btn-danger' onClick={()=>{handleDelete(user)}}>Delete</button></td>
    </tr>
    )}
  </tbody>
</table>

        </div>
    )
}
