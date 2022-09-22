import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateObjectAction } from '../store/objectsSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update Object"
    const [object, setobject] = useState({id:"",fname:"",lname:"",tel:"",address:"",city:"",state:"",zip:""})
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const objectInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updateObjectAction(object))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newObjects={...object}
        newObjects[e.target.name]=e.target.value
        setobject(newObjects)
        

    }
    useEffect(()=>{
        const allObjects = JSON.parse(localStorage.getItem("objects"))
        const newObject=allObjects.find((myObject)=>myObject.id==objectInfo.id);
        setobject(newObject)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} object={object} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}

