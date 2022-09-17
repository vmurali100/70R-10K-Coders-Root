import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const CreateCart = () => {

    const [student, setstudent] = useState({
        id: "",
        userId: "",
        date: ""
    })
    let url = "http://localhost:3004/carts/"

    const navigate = useNavigate()

    const handleChange = (e) => {
        let newStudent = { ...student }
        newStudent[e.target.name] = e.target.value
        setstudent(newStudent)
    }
    const addStudent = () =>{
        axios.post(url,student).then(()=>{
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
                    <label for="userId" className="form-label">UserId</label>
                    <input type="email" name='userId' value={student.userId} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="date" className="form-label">Date</label>
                    <input type="username" name='date' value={student.date} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <button type="submit" onClick={addStudent} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
