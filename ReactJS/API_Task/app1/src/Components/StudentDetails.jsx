import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


export const StudentDetails = () => {
    const [studentInfo, setstudentInfo] = useState({})
    const urlObj = useParams();
    useEffect(() => {
        // console.log(urlObj)
        // const url = "http://localhost:3002/carts/";
        // axios.get(`${url + urlObj.id}`).then((res) => {
        //     console.log(res.data)
        //     setstudentInfo(res.data)
        // })
        const students = JSON.parse(localStorage.getItem("Students"));
        const student = students.find((std)=> std.id == urlObj.id)

        console.log(students)
    }, [])
    console.log(urlObj)
    return (
        <div className='container'>
            <div className="card">
                <div className="card-body">
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <h5 className="card-title">
                        {studentInfo.username}
                    </h5>
                    <p className="card-text">
                    {studentInfo.email}
                    </p>
                    <p className="card-text">
                    {studentInfo.password}
                    </p>
                    <Link className="btn btn-primary" to="/">
                    Go To Students
                    </Link>
                    <a href="#" ></a>
                </div>
            </div>

        </div>
    )
}
