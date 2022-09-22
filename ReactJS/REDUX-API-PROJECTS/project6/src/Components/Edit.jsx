import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateStudentAction } from '../store/studentsSlice';
import { UserForm } from './UserForm'

export const Edit = () => {
    const btnText =" Update student";
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const studentInfo = useParams();

    const [student, setstudent] = useState({
        id:"",
        fname:"",
        lname:"",
        city:""
    })

    const handleUpdate=()=>{
        dispatch(updateStudentAction(student));
        navigate("/")
    };
    const handleChange=(e)=>{
        let newStudent = {...student};
        newStudent[e.target.name] = e.target.value;
        setstudent(newStudent)
    };
    useEffect(()=>{
            const allStudents = JSON.parse(localStorage.getItem("students"))
            const newStudent = allStudents.find((myStudent)=>myStudent.id == studentInfo.id);
            setstudent(newStudent);
    },[])// [] we are asking to execute only one time
  return (
    <div className="container">
            <UserForm btnText={btnText} student={student} handleEvent={handleUpdate} handleChangeEvent={handleChange}/>
        </div>
  )
}
