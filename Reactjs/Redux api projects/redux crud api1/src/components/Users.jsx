import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deleteUser, getAllUsers } from '../Store/usersSlice'

export const Users = () => {
    const usersDetails = useSelector((state) => state.users)
    console.log(usersDetails.users)
    const dispatch = useDispatch()
    const getusers = () => {
        dispatch(getAllUsers())
    }
    useEffect(()=>{
        getusers()
    },[])
    const handleDelete=(user)=>{
        dispatch(deleteUser(user))
    }
    return (
        <div>
           {/* <button onClick={getusers} className="btn btn-primary">Get user</button>*/}
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {usersDetails.users.map((user,i)=> <tr key={i}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td><button className='btn btn-warning'>Edit</button></td>
        <td><button className='btn btn-danger' onClick={()=>{handleDelete(user)}}>Delete</button></td>
    </tr>
    )}
  </tbody>
</table>
        </div>
    )
}
