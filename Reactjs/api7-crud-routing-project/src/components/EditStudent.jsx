import React,{useState,useEffect} from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
export const EditStudent = () => {
    const urlObj = useParams()

    let url="http://localhost:3000/students/"
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

  return (
    <div className='container'>
        <form>
        <label htmlFor="">ID</label>
            <input type="number" name="id" value={students.id} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">Fname</label>
            <input type="text" name="fname" value={students.fname} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">Lname</label>
            <input type="text" name="lname" value={students.lname} onChange={(e) => {handleChange(e)}} /> <br />
           
            
            <button type="button" onClick={updateStudent}>Update Student</button>
        </form>
    </div>
  )
  }
