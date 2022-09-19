import React from 'react'
import { UserForm } from './UserForm'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUserAction } from '../store/usersSlice'
import { useEffect } from 'react'
export const Edit = () => {
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const userInfo = useParams()
    const[user,setuser]=useState({
        albumId: "",
        id: "",
        title: "",
        url: "",
        thumbnailUrl: ""

    })
    const handleUpdate=()=>{
        dispatch(updateUserAction(user))
        alert("Updated Successfully")
        navigate("/")
    }
    const handlechange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value;
        setuser(newUser)
    }
    useEffect(()=>{
        const allUsers=JSON.parse(localStorage.getItem("users"))
        const newUser= allUsers.find((myUser)=>myUser.id == userInfo.id)
        setuser(newUser)
    },[])
    const btnText ="Update User"
  return (
    <div className='container'>

    <UserForm btnText={btnText} user={user} handleEvent={handleUpdate} handlechangeEvent={handlechange}/>
     </div>
  )
}
