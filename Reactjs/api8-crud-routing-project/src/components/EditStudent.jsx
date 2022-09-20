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
 const { id, fname,lname,tel,address,city,state,zip} = students
  return (
    <div className='container'>
        <form>
            <label htmlFor="">ID</label>
            <input type="text" name="id" value={id} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">FName</label>
            <input type="text" name="fname" value={fname} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">LName</label>
            <input type="text" name="lname" value={lname} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">Tel</label>
            <input type="text" name="tel" value={tel} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">Address</label>
            <input type="text" name="address" value={address} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">City</label>
            <input type="text" name="city" value={city} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">State</label>
            <input type="text" name="state" value={state} onChange={(e) => {handleChange(e)}} /> <br />
            <label htmlFor="">Zip</label>
            <input type="text" name="zip" value={zip} onChange={(e) => {handleChange(e)}} /> <br />
            <button type="button" onClick={updateStudent}>Update Student</button>
        </form>
    </div>
  )
  }
