import React,{useState} from 'react'
import { UserForm } from './UserForm'
import {  useDispatch } from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom';
import { updateUser } from '../Store/UsersSlice';
import { useEffect } from 'react';


export const Edit = () => {
  const btnTxt = "Update";
    const dispatch = useDispatch();
    const paramInfo = useParams()
    const navigate = useNavigate();
    const [user, setuser] = useState({
      id:"",
      name:"",
      username:"",
      email:"",
      phone:"",
      website:""
  })

  const handleChangeEvent=(e)=>{
    let newUser= {...user}
    newUser[e.target.name]= e.target.value;
    setuser(newUser)
}

const handleEvent=()=>{
    dispatch(updateUser(user))
    navigate('/')
}

useEffect(()=>{
  const getallUsersData = JSON.parse(localStorage.getItem('ReduxUsers'));
  const newUsers = getallUsersData.find((myUser)=> myUser.id == paramInfo.id)
  setuser(newUsers)
},[])
  return (
    <div>
        <UserForm btnTxt={btnTxt} user={user} handleChangeEvent={handleChangeEvent} handleEvent={handleEvent}/>
    </div>
  )
}
