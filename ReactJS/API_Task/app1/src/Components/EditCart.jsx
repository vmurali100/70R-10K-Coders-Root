import axios from 'axios'
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export const EditCart = () => {
    const urlobj = useParams()

    let url = "http://localhost:3004/carts/"

    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [student, setstudent] = useState(result)
    const navigate = useNavigate()

    const handleChange = (e) => {
        let newStudent = { ...student }
        newStudent[e.target.name] = e.target.value
        setstudent(newStudent)
    }
    const updateStudent=()=>{
        axios.put(url+urlobj.id,student).then(()=>{
            navigate("/")
        })
    }
    return (
        <div>
            
            <form>
                <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="id" name='id' value={student.id} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="userId" className="form-label">UserID</label>
                    <input type="email" name='userId' value={student.userId} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="date" className="form-label">Date</label>
                    <input type="date" name='date' value={student.date} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <button type="submit" onClick={updateStudent} className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}