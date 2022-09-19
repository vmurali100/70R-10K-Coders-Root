import React from 'react'
import { useEffect } from 'react';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import  {deleteUser, getAllUsers}  from '../Store/UsersSlice';


export const Users = () => {
    const usersDetails = useSelector((state)=> state.users);
    console.log(usersDetails.users);

    const dispatch = useDispatch();
    const getUsers=()=>{
        dispatch(getAllUsers())
    }

    useEffect(()=>{
        getUsers()
    },[])

    const handleDelete =(user)=>{
        dispatch(deleteUser(user))
    }
  return (
    <div>
        {/* <button type="button" onClick={getUsers}>GetData</button> */}
        <table className="table ">
  <thead>
    <tr>
      <th >ID</th>
      <th >Email</th>
      <th >Username</th>
      <th >Password</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {usersDetails.users.map((user,i) => ( 
    <tr key={i}>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>{user.password}</td>
        <td><button type="button" className='btn btn-warning'>Edit</button></td>
        <td><button type="button" className='btn btn-danger' onClick={()=>{handleDelete(user)}}>Delete</button></td>
    </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}
