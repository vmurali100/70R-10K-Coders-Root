import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
export const CreateStudent = () => {
    const [student, setstudent] = useState({
        "id":"",       
        "fname": "",
        "lname": "",
        
    })
    const navigate = useNavigate()
    const [students, setstudents] = useState([])

    const handleChange = (e) => {
        let newStudent = { ...student };
        newStudent[e.target.name] = e.target.value;
        setstudent(newStudent)
    }
    const submitStudent = () => {
        axios.post("http://localhost:3000/students/", student).then(() => {
            navigate("/")
        })
    }
    const {id,fname,lname} = student
    return (
        <div className='container'>
            <form>
            <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">ID</label>
                    <input type="number" className="form-control" name="id"  value={id} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Fname</label>
                    <input type="text" className="form-control" name="fname"  value={fname} onChange={(e) => { handleChange(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Lname</label>
                    <input type="text" className="form-control" name="lname"  value={lname} onChange={(e) => { handleChange(e) }} />
                </div>
                
                <button type="button" className="btn btn-primary" onClick={submitStudent}>Submit</button>
            </form>
           
        </div>
    )
}
