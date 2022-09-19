import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUserAction } from '../store/usersSlice'
import { UserForm } from './UserForm'

export const Create = () => {
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const[user,setuser]=useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
    
        rating: [
          {
            rate: "",
            count: "",
          },
        ],

    })
    const btnText="Add User";

    const handleCreate=()=>{
        dispatch(createUserAction(user))
        alert("Added Successfully")
        navigate("/")
    }
    const handlechange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value;
        setuser(newUser)
    }
  return (
    <div className='container'>

   <UserForm btnText={btnText} user={user} handleEvent={handleCreate} handlechangeEvent={handlechange}/>
    </div>
  )
}
