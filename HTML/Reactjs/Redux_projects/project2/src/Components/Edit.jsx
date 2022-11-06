import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUserAction } from '../store/usersSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update User";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const userInfo = useParams();

    const [user, setuser] = useState({
        id:"",
        email:"",
        username:"",
        password:""
    })

    const handleUpdate=()=>{
        dispatch(updateUserAction(user));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setuser(newUser)
    };
    useEffect(()=>{
            const allUsers = JSON.parse(localStorage.getItem("users"))
            const newUser = allUsers.find((myUser)=>myUser.id == userInfo.id);
            setuser(newUser);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} user={user} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}