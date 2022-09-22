import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStudentAction } from '../store/studentsSlice'
import { UserForm } from './UserForm'

export const Create = () => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const [student, setstudent] = useState({
        id:"",
        fname:"",
        lname:"",
        city:""
    })
    const btnText = "Add student Detail"

    const handleCreate=()=>{
        dispatch(createStudentAction(student))
        navigate('/')
    }
    const handleChange=(e)=>{
        let newStudent = {...student};
        newStudent[e.target.name] = e.target.value;
        setstudent(newStudent)
    }
    return (
        <div className="container">
            <UserForm btnText={btnText} student={student} handleEvent={handleCreate} handleChangeEvent={handleChange}/>

        </div>

    )
}