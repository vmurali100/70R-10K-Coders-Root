import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateDetailAction } from '../store/detailsSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update Detail"
    const [detail, setdetail] = useState({id:"",fname:"",lname:""})
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const detailInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updateDetailAction(detail))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newDetails={...detail}
        newDetails[e.target.name]=e.target.value
        setdetail(newDetails)

    }
    useEffect(()=>{
        const allDetails = JSON.parse(localStorage.getItem("details"))
        const newDetail=allDetails.find((myDetail)=>myDetail.id==detailInfo.id);
        setdetail(newDetail)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} detail={detail} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}

