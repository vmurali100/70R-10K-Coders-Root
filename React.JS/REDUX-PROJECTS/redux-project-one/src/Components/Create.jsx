import React from 'react'
import { Form } from './Form'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUserAction } from '../store/usersSlice'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

    const navigate = useNavigate()

    const [user, setuser] = useState({
      id:"",
      name:"",
      username:"",
      email:""
    })
    const btnText = "Add User"

    const dispatch = useDispatch();

    const handleCreate=()=>{
      dispatch(createUserAction(user));
      navigate("/")

      }

    const handleChange=(e)=>{
      let newUser = {...user}
      newUser[e.target.name] = e.target.value;
      setuser(newUser)
      console.log(user)

    }
  return (
    <Form user={user} btnText={btnText} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
  )
}
