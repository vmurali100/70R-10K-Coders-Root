import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {  updateCollegeAction } from '../store/collegesSlice';
import { useEffect } from 'react';
import { UserForm } from './UserForm'



export const Edit = () => {
    const btnText ="Update College"
    const [college, setcollege] = useState({id:"",university:"",institute:"",branch:"",degree:"",experience:"",yourwebsiteorblog:""})
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const collegeInfo=useParams()
    const handleUpdate=()=>{
        dispatch(updateCollegeAction(college))
        navigate("/")

        
    }
    const handleChange=(e)=>{//for giving inputs
        let newColleges={...college}
        newColleges[e.target.name]=e.target.value
        setcollege(newColleges)

    }
    useEffect(()=>{
        const allColleges = JSON.parse(localStorage.getItem("colleges"))
        const newCollege=allColleges.find((myCollege)=>myCollege.id==collegeInfo.id);
        setcollege(newCollege)

    },[])//[] it executes one time
  return (
    <div className='container'>
        <UserForm  btnText={btnText} college={college} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}

