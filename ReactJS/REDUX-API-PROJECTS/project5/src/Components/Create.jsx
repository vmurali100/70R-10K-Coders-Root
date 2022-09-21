import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createTypeAction } from '../store/typesSlice'
import { UserForm } from './UserForm'

export const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [type, settype] = useState({
        id:"",
        title:"",
        price:"",
        description:"",
        category:""
    })
    const btnText = "Add type Detail"

    const handleCreate=()=>{
        dispatch(createTypeAction(type))
        navigate('/')
    }
    const handleChange=(e)=>{
        let newType = {...type};
        newType[e.target.name] = e.target.value;
        settype(newType)
    }
    return (
        <div className="container">
            <UserForm btnText={btnText} type={type} handleEvent={handleCreate} handleChangeEvent={handleChange}/>

        </div>

    )
}