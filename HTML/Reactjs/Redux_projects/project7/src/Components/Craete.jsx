import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createInputAction } from '../store/inputsSlice'
import { UserForm } from './UserForm.'

export const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [Input, setInput] = useState({
        id:"",
        fname:"",
        lname:"",
        dofb:"",
        emailid:"",
        mobilenumber:""
    })
    const btnText = "Add Input Detail"

    const handleCreate=()=>{
        dispatch(createInputAction(Input))
        navigate('/')
    }
    const handleChange=(e)=>{
        let newInput = {...Input};
        newInput[e.target.name] = e.target.value;
        setInput(newInput)
    }
    return (
        <div className="container">
            <UserForm btnText={btnText} Input={Input} handleEvent={handleCreate} handleChangeEvent={handleChange}/>

        </div>

    )
}