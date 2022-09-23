import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateEventAction } from '../store/eventsSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update event";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const eventInfo = useParams();

    const [event, setevent] = useState({
        id:"",
        name:"",
        email:"",
        username:"",
        password:"",
        confirmpassword:"",
        message:""

    })

    const handleUpdate=()=>{
        dispatch(updateEventAction(event));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newEvent = {...event};
        newEvent[e.target.name] = e.target.value;
        setevent(newEvent)
    };
    useEffect(()=>{
            const allEvents = JSON.parse(localStorage.getItem("events"))
            const newEvent = allEvents.find((myevent)=>myevent.id == eventInfo.id);
            setevent(newEvent);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} event={event} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
