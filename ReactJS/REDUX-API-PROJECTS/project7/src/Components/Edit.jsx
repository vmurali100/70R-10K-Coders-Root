import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateInputAction } from '../store/inputsSlice';
import { UserForm } from './UserForm.'

export const Edit = () => {
    const btnText =" Update Input";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const InputInfo = useParams();

    const [Input, setInput] = useState({
        id:"",
        fname:"",
        lname:"",
        dofb:"",
        emailid:"",
        mobilenumber:""
    })

    const handleUpdate=()=>{
        dispatch(updateInputAction(Input));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newInput = {...Input};
        newInput[e.target.name] = e.target.value;
        setInput(newInput)
    };
    useEffect(()=>{
            const allInputs = JSON.parse(localStorage.getItem("inputs"))
            const newInput = allInputs.find((myInput)=>myInput.id == InputInfo.id);
            setInput(newInput);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} Input={Input} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
