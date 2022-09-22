import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getAllStudents } from '../store/studentsSlice';

export const Students = () => {
   const studentsDetails =  useSelector((state)=>state.students);

   console.log(studentsDetails.students)

   
   localStorage.setItem('students',JSON.stringify(studentsDetails.students))
   const navigate = useNavigate();

   const dispatch = useDispatch();

   const getstudents=()=>{
    dispatch(getAllStudents());
   }
   
   useEffect(()=>{
        getstudents()
   },[])
   const handleDelete = (student) => {
    navigate(`delete/${student.id}`)
    // dispatch(deleteUser(student))
}

const handleEdit = (student) => {
    navigate(`edit/${student.id}`)
}
  return (
    <div className='container'>

        {/* <button onClick={getstudents} className= 'btn btn-primary'>Get student</button> */}

        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Fname</th>
                    <th >Lname</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {studentsDetails.students.map((student, i) => (
                    <tr key={i}>
                        <td>{student.id}</td>
                        <td>{student.fname}</td>
                        <td>{student.lname}</td>
                        <td>{student.city}</td>
                        <td><button className='btn btn-warning' onClick={() => { handleEdit(student) }}>Edit</button></td>
                        <td><button className='btn btn-danger' onClick={() => { handleDelete(student) }}>Delete</button></td>
                    </tr>))}
            </tbody>
        </table>
        
    </div>
  )
}
