import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
export const CreateStudent = () => {
    const [student, setstudent] = useState({
        "id": "",
        "fname": "",
        "lname": "",
        "tel": "",
        "address": "",
        "city": "",
        "state": "",
        "zip": ""
   
    })
    const navigate = useNavigate()
    const [students, setstudents] = useState([])

    const handleChange = (e) => {
        let newStudent = { ...student };
        newStudent[e.target.name] = e.target.value;
        setstudent(newStudent)
    }
    const submitStudent = () => {
        axios.post("http://localhost:3001/students/", student).then(() => {
            navigate("/")
        })
    }
    const { id, fname, lname, address,tel,city,state,zip} = student
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Id</label>
                    <input type="text" className="form-control" name="id"  value={id} onChange={(e) => { handleChange(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">FName</label>
                    <input type="text" className="form-control" name="fname"  value={fname} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">LName</label>
                    <input type="text" className="form-control" name="lname"  value={lname} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address"  value={address} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Tel</label>
                    <input type="text" className="form-control" name="tel"  value={tel} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                    <input type="text" className="form-control" name="city"  value={city} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">State</label>
                    <input type="text" className="form-control" name="state"  value={state} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Zip</label>
                    <input type="text" className="form-control" name="zip"  value={zip} onChange={(e) => { handleChange(e) }} />
                </div>
                <button type="button" className="btn btn-primary" onClick={submitStudent}>Submit</button>
            </form>
           
        </div>
    )
}
