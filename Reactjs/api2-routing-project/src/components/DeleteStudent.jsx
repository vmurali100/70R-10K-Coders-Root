import React from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const DeleteStudent = () => {
    const urlObj = useParams()
    const navigate = useNavigate()

    let url = "http://localhost:3001/students/"

    const handleDelete = () => {
        axios.delete(url + urlObj.id).then(() => {
            navigate("/")
        })
    }
    return (
        <div className='container'>
            <p>Are u sure... U want to Delete</p>
            <button onClick={handleDelete}>Delete Student</button>
        </div>
    )
}
