import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../Store/UsersSlice'
import {Link} from 'react-router-dom';

export const Users = () => {
const allUsersData = useSelector((state)=> state.users)
localStorage.setItem('ReduxUsers',JSON.stringify(allUsersData.users))
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getAllUsers())
},[])
  return (
    <div className='container'> <div className='containerOne'> <Link to={'/create'}> <button type="button"> CreateNew </button></Link></div>  
    <div className='conatinerTwo'>
        {allUsersData.users.map((user,i)=> <div className='alldetails' key={i}>
            <li>{user.id}</li>
            <li>{user.name}</li>            
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
            <p><Link to={`/edit/${user.id}`}> <button type="button">Edit</button> </Link></p>
            <p><Link to={`/delete/${user.id}`}> <button type="button">Delete</button> </Link></p>
        </div> )}
        </div>
    </div>
  )
}
