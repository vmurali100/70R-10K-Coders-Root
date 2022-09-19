import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';

export const Teachers = () => {
    const [teacher, setteacher] = useState({
        id: "",
        name: "",
        sub_teaches: "",
        email: "",
        phone: ""
    });

    let url = "http://localhost:3202/teachers"

    const [teacherArr, setteacherArr] = useState([]);

    const handleChange = (e) => {
        let newTeacher = { ...teacher };
        newTeacher[e.target.name] = e.target.value;
        setteacher(newTeacher);
    }

    useEffect(() => {
        getDataFromServer()
    }, [])

    const getDataFromServer = () => {
        axios.get(url).then((response) => {
            console.log(response.data)
            localStorage.setItem("teachers",JSON.stringify(response.data));
            setteacherArr(response.data)
        })
    }

    const clearform = () => {
        setteacher({
            id: "",
            name: "",
            sub_teaches: "",
            email: "",
            phone: ""
        })
    }

    const addTeacher = () => {
        axios.post(url, teacher).then(() => {
            console.log("data added successfully")
            clearform();
            getDataFromServer();
        })
    }

    return (
        <div id="container">

            <button type="button" className='btn btn-primary' onClick={addTeacher}>Add Teacher Data</button>
            <form>

                <label htmlFor="id">ID : </label>
                <input type="text" name="id" value={teacher.id} onChange={(e) => { handleChange(e) }} /> <br />


                <label htmlFor="name">Name of Teacher : </label>
                <input type="text" name="name" value={teacher.name} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="sub_teaches">Subject Teaches  : </label>
                <input type="text" name="sub_teaches" value={teacher.sub_teaches} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="email">Email of Teacher : </label>
                <input type="text" name="email" value={teacher.email} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="phone">Mobile Number of Teacher : </label>
                <input type="text" name="phone" value={teacher.phone} onChange={(e) => { handleChange(e) }} /> <br />
            </form>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name Of Teacher</th>
                        <th>Subject Teacher Teaches</th>
                        <th>Email of the Teacher</th>
                        <th>Mobile Number of Teacher</th>
                        <th>Details</th>
                    </tr>
                </thead>

                <tbody>
                    {teacherArr.map((tea, i) => {
                        return <tr key={i}>
                            <td>{tea.id}</td>
                            <td>{tea.name}</td>
                            <td>{tea.sub_teaches}</td>
                            <td>{tea.email}</td>
                            <td>{tea.phone}</td>
                            <td>
                                <Link className='btn btn-primary' to={`/Teachers/${tea.id}`}>Details</Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
