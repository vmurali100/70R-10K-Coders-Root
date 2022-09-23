import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createEventAction } from '../store/eventsSlice'
import { UserForm } from './UserForm'

export const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [event, setevent] = useState({
        id:"",
        name:"",
        email:"",
        username:"",
        password:"",
        confirmpassword:"",
        message:""
    })
    const btnText = "Add event Detail"

    const handleCreate=()=>{
        dispatch(createEventAction(event))
        navigate('/')
    }
    const handleChange=(e)=>{
        let newEvent = {...event};
        newEvent[e.target.name] = e.target.value;
        setevent(newEvent)
    }
    return (
        <div className="container">
            <UserForm btnText={btnText} event={event} handleEvent={handleCreate} handleChangeEvent={handleChange}/>

        </div>

    )
}