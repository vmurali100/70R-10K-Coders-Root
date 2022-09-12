import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
// import axios from 'axios';
import { useState } from 'react';

export const StudentDetails = () => {
    const [studentInfo, setstudentInfo] = useState({})
    const urlObj = useParams();
    console.log(urlObj)
    useEffect(() => {
    //     const url = "http://localhost:3000/students/"
    //     axios.get(`${url + urlObj.id}`).then((res) => {
    //         console.log(res.data)
    //         setstudentInfo(res.data)
    //     })
    const students = JSON.parse(localStorage.getItem("students"));
    const student = students.find((std)=> std.id == urlObj.id)

    console.log(student)

    setstudentInfo(student)
    }, [])

    
    return (
        <div className='container'>
            {Object.keys(studentInfo).length > 0 && <div className="card">

                <div className="card-body">
                    <h5 className="card-title">
                        {studentInfo.name}
                    </h5>
                    <p className="card-text">
                        {studentInfo.phone}
                    </p>
                    <p className="card-text">
                        {studentInfo.username}
                    </p>
                    <p className="card-text">
                        {studentInfo.website}
                    </p>
                    <p className="card-text">
                        {studentInfo.email}
                    </p>
                    <p className="card-text">
                        {studentInfo.phone}
                    </p>

                    <Link to="/" className='btn btn-primary'>Go back to Students</Link>

                </div>

            </div>}
        </div>
    )
}
