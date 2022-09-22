import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateItemAction } from '../store/itemsSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update item";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const itemInfo = useParams();

    const [item, setitem] = useState({
        id:"",
        userid:"",
        title:"",
        body:""

    })

    const handleUpdate=()=>{
        dispatch(updateItemAction(item));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newItem = {...item};
        newItem[e.target.name] = e.target.value;
        setitem(newItem)
    };
    useEffect(()=>{
            const allItems = JSON.parse(localStorage.getItem("items"))
            const newItem = allItems.find((myItem)=>myItem.id == itemInfo.id);
            setitem(newItem);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} item={item} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
