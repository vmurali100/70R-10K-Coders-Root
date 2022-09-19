import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const Student = () => {

    const [student, setstudent] = useState({
        university: "",
        institute: "",
        website: ""
    })

    let url = "http://localhost:3000/student/";

    const [students, setstudents] = useState([])

    useEffect(()=>{getDataFromServer()},[]);

    const getDataFromServer=()=>{
        axios.get(url).then((res)=>{
            console.log(res.data)
            setstudents(res.data)
        })
    }

    const handleChange = (e) => {
        let newStudent = { ...student };
        newStudent[e.target.name] = e.target.value;
        setstudent(newStudent);
    }

    const addStudent = () => {
        axios.post(url, student).then(() => {
            console.log("student added successfully");
            clearform();
            getDataFromServer();
        })
    }

    const clearform = () => {
        setstudent({
            university: "",
            institute: "",
            website: ""
        })
    }

    const editStudent=(std)=>{
          setstudent(std);
    }

    const updateStudent=()=>{
          axios.put(url+student.id,student).then(()=>{
            console.log("Student Updated");
            getDataFromServer();
            clearform();
          })
    }

    const deleteStudent=(std)=>{
         axios.delete(url+std.id).then(()=>{
            console.log("student deleted successfully")
            getDataFromServer();
         })
    }


    return (
        <div>

            <form>
                <label htmlFor="university">University :</label>
                <input type="text" name="university" value={student.university} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="institute">Institute :</label>
                <input type="text" name="institute" value={student.institute} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="website">Website :</label>
                <input type="text" name="website" value={student.website} onChange={(e) => { handleChange(e) }} /> <br />

                <button type="button" onClick={addStudent}>Add Student</button>

                <button type="button" onClick={updateStudent}>Update Student</button>

                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            <th>University</th>
                            <th>Institute</th>
                            <th>Website</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((std,i)=>{
                            return <tr key={i}>
                                <td>{std.university}</td>
                                <td>{std.institute}</td>
                                <td>{std.website}</td>
                                <td><button type="button" className="btn btn-warning" onClick={()=>{editStudent(std)}}>Edit student</button></td>
                                <td><button type="button" className="btn btn-danger" onClick={()=>{deleteStudent(std)}}>Delete Student</button></td>

                            </tr>
                        })}

                    </tbody>

                </table>
            </form>

        </div>)
}
