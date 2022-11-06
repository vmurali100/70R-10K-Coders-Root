import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateDetailAction } from '../store/detailsSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update detail";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const detailInfo = useParams();

    const [detail, setdetail] = useState({
        id:"",
        fname:"",
        lname:"",
        tel:"",
        address:"",
        city:"",
        state:"",
        zip:""
    })

    const handleUpdate=()=>{
        dispatch(updateDetailAction(detail));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newDetail = {...detail};
        newDetail[e.target.name] = e.target.value;
        setdetail(newDetail)
    };
    useEffect(()=>{
            const allDetails = JSON.parse(localStorage.getItem("details"))
            const newDetail = allDetails.find((myDetail)=>myDetail.id == detailInfo.id);
            setdetail(newDetail);
    },[])

  return (
    <div className="container">
            <UserForm btnText={btnText} detail={detail} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}