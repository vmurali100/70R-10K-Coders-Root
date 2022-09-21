import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTypeAction } from '../store/typesSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update type";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const typeInfo = useParams();

    const [type, settype] = useState({
        id:"",
        title:"",
        price:"",
        description:"",
        category:""
    })

    const handleUpdate=()=>{
        dispatch(updateTypeAction(type));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newType = {...type};
        newType[e.target.name] = e.target.value;
        settype(newType)
    };
    useEffect(()=>{
            const allTypes = JSON.parse(localStorage.getItem("types"))
            const newType = allTypes.find((myType)=>myType.id == typeInfo.id);
            settype(newType);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} type={type} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
