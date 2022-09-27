import React,{useState,useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
export const EditStudent = () => {
    const urlObj = useParams()

    let url="http://localhost:3001/students/"
    const info =JSON.parse(localStorage.getItem("Students"))
    const result=info.find((std)=>std.id == urlObj.id)

    
    const [students, setstudents] = useState(result)
    const navigate = useNavigate()
    const handleChange = (e) => {
        let newStudents = { ...students };
        newStudents[e.target.name] = e.target.value;
        setstudents(newStudents)
    }
    const updateStudent=()=>{
        axios.put(url + urlObj.id,students).then(() => {
            navigate("/")
    })
 }
 const { id, name, username, email} = students
  return (
    <div className='container'>
        <form>
            <label htmlFor="">ID</label>
            <input type="text" name="id" value={id} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={name} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">UserName</label>
            <input type="text" name="username" value={username} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">email</label>
            <input type="text" name="email" value={email} onChange={(e) => {handleChange(e)}} /> <br />
            
            <button type="button" onClick={updateStudent}>Update Student</button>
        </form>
    </div>
  )
  }
