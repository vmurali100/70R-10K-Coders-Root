import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createItemAction } from '../store/itemsSlice'
import { UserForm } from './UserForm'

export const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [item, setitem] = useState({
        id:"",
        userid:"",
        title:"",
        body:""
    })
    const btnText = "Add item Detail"

    const handleCreate=()=>{
        dispatch(createItemAction(item))
        navigate('/')
    }
    const handleChange=(e)=>{
        let newItem = {...item};
        newItem[e.target.name] = e.target.value;
        setitem(newItem)
    }
    return (
        <div className="container">
            <UserForm btnText={btnText} item={item} handleEvent={handleCreate} handleChangeEvent={handleChange}/>

        </div>

    )
}