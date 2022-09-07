
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
export const Student = () => {
    const [student, setstudent] = useState({
        fname: "",
        lname: ""
    })
    const [students, setstudents] = useState([])
    let url = "http://localhost:3000/users/";
    
    useEffect(() => {
        getDataFromServer()
    }, [])
    const getDataFromServer = () => {
        axios.get(url).then((response) => {
            console.log(response)
            setstudents(response.data);
        });
    };
    const handleChange = (e) => {
        let newStudent = { ...student };
        newStudent[e.target.name] = e.target.value
        setstudent(newStudent)
    }
    const addUser = () => {

        axios.post(url, student).then(() => {
            console.log("User added successfully")
            clearForm()
            getDataFromServer()
        })
    }
    const clearForm = () => {
        setstudent({
            fname: "",
            lname: ""
        })

    }
    const handleDelete = (std) => {
        axios.delete(url+std.id).then(() => {
            console.log("User deleted succesfully");
            getDataFromServer()
        })
    }
   const editStudent=(std)=>{
setstudent(std)
   }
   const updateStudent=()=>{
axios.put(url+student.id,student).then(()=>{
    console.log("updated")
    getDataFromServer()
    clearForm()
})
   }
    return (
        <div>
            <form>
                <label htmlFor="First Name">First Name :</label>
                <input type="text" name="fname" value={student.fname} onChange={(e) => { handleChange(e) }} />{""} <br />
                <label htmlFor="Last Name">Last Name :</label>
                <input type="text" name="lname" value={student.lname} onChange={(e) => { handleChange(e) }} /> {""}<br />
                <button type='button' onClick={addUser}>Add User</button>
                <button type='button' onClick={updateStudent}>Update</button>
                <hr />
                <table border={1}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((std, i) => {
                            return <tr key={i}>
                                <td>{std.fname}</td>
                                <td>{std.lname}</td>
                                <td><button type="button" onClick={()=>{editStudent(std)}}>Edit</button></td>
                                <td><button type="button" onClick={() => { handleDelete(std) }}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    )
}
