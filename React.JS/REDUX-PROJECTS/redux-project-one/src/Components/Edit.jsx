import React from 'react'
import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUserAction } from '../store/usersSlice'
import { useEffect } from 'react'

export const Edit = () => {
    const btnText = "Update"

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const objUrl = useParams()

    const [user, setuser] = useState({
      id:"",
      name:"",
      username:"",
      email:""
    });

    const handleUpdate=()=>{
      dispatch(updateUserAction(user));
      navigate("/")

      }

    const handleChange=(e)=>{
      let newUser = {...user}
      newUser[e.target.name] = e.target.value;
      setuser(newUser)
      console.log(user)

    }

    useEffect(()=>{
        const info = JSON.parse(localStorage.getItem("users"));
        const result = info.find((a) => a.id == objUrl.id);
        setuser(result)
    },[])

    
  return (
    <div>
        <Form btnText={btnText} handleEvent={handleUpdate} handleChangeEvent={handleChange} user={user} />
    </div>
  )
}
