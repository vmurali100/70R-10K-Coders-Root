import React,{useState} from 'react'
import { UserForm } from './UserForm'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateUserAction } from '../store/usersSlice';
import { useEffect } from 'react';





export const Edit = () => {
    const btnText ="Update User"
    const [user, setuser] = useState({id:"",email:"",username:"",password:""})
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const userInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updateUserAction(user))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newUsers={...user}
        newUsers[e.target.name]=e.target.value
        setuser(newUsers)

    }
    useEffect(()=>{
        const allUsers = JSON.parse(localStorage.getItem("users"))
        const newUser=allUsers.find((myUser)=>myUser.id==userInfo.id);
        setuser(newUser)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} user={user} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
