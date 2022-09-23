import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateCalenderAction } from '../store/calendersSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update Calender"
    const [calender, setcalender] = useState({"id":"" ,
    "username": "",
    "password": "",
    "emailaddress": "",
    "dateofbirth": "",
    "height": "",
    "weight": "",
  })
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const calenderInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updateCalenderAction(calender))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newCalenders={...calender}
        newCalenders[e.target.name]=e.target.value
        setcalender(newCalenders)

    }
    useEffect(()=>{
        const allCalenders = JSON.parse(localStorage.getItem("calenders"))
        const newCalender=allCalenders.find((myCalender)=>myCalender.id==calenderInfo.id);
        setcalender(newCalender)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} calender={calender} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}

