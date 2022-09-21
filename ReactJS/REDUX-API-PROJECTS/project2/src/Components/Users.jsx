import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllUsers } from '../store/userSlice';

export const Users = () => {
   const usersDetails =  useSelector((state)=>state.users);

   console.log(usersDetails.users)

   
   localStorage.setItem('users',JSON.stringify(usersDetails.users))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getusers=()=>{
    dispatch(getAllUsers());
   }
   
   useEffect(()=>{
        getusers()
   },[])
   const handleDelete = (user) => {
    navigate(`delete/${user.id}`)
    // dispatch(deleteUser(user))
}

const handleEdit = (user) => {
    navigate(`edit/${user.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={getusers} className= 'btn btn-primary'>Get User</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Fname</th>
                    <th >Lname</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {usersDetails.users.map((user, i) => (
                    <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td><button className='btn btn-warning' onClick={() => { handleEdit(user) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(user) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}
