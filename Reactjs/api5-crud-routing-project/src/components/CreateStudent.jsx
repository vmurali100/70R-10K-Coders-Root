import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
export const CreateStudent = () => {
    const [student, setstudent] = useState({
        "postIid": "",
        "id": "",
        "name": "",
        "email": "",
        "body":""
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
    const { postId, id, name, email,body} = student
    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">PostId</label>
                    <input type="number" className="form-control" name="postId"  value={postId} onChange={(e) => { handleChange(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Id</label>
                    <input type="number" className="form-control" name="id"  value={id} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name"  value={name} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">email</label>
                    <input type="text" className="form-control" name="email"  value={email} onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">body</label>
                    <input type="text" className="form-control" name="body"  value={body} onChange={(e) => { handleChange(e) }} />
                </div>
                <button type="button" className="btn btn-primary" onClick={submitStudent}>Submit</button>
            </form>
           
        </div>
    )
}
