import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";


export const CreateStudents = () => {
    const [students] = useState({
        id:"11",
        name:"Chokkalla Srikanth",
        username:"srikanthchokkalla",
        email:"srikanthchokkalla@gmail.com"
    })
    const navigate = useNavigate()
    const submittStudents=()=>{
        axios.post("http://localhost:3000/Students",students).then(()=>{
            navigate("/")
        })
    }
  return (
    <div    className='container'>
        <form>
  <div className="mb-3">
    <label  className="form-label">ID</label>
    <input type="id" className="form-control" id="id" aria-describedby="id" />
  </div>
  <div className="mb-3">
    <label  className="form-label">NAME</label>
    <input type="name" className="form-control" id="name" />
  </div>
  <div className="mb-3">
    <label  className="form-label">USERNAME</label>
    <input type="username" className="form-control" id="username" />
  </div>
  <div className="mb-3">
    <label  className="form-label">EMAIL</label>
    <input type="email" className="form-control" id="email" />
  </div>
  <button type="button" className="btn btn-primary" onClick={submittStudents}>Submit</button>
</form>
    </div>
  )
}
