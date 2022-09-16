import React,{useEffect,useState} from 'react'
import axios from "axios";
import {Link,useNavigate} from "react-router-dom"
export const Students = () => {
    const [students, setstudents] = useState([])
const navigate=useNavigate()
   useEffect(() => {
      let url= "http://localhost:3001/students"
      axios.get(url).then(res=>{
        console.log(res.data)
        localStorage.setItem("students",JSON.stringify(res.data))
        setstudents(res.data)
      })
    }, [])
    const addStudent = ()=>{
      navigate("/createStudent")
    }
  return (
    <div className="container">
        <button className="btn btn-primary" type="button" onClick={addStudent} > Add Student</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {students.map((student,i)=> <tr key={i}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.username}</td>
                <td>{student.email}</td>
                {/* <td><button type="button" className="btn btn-primary">Details</button></td> */}
                <td>
                  <Link to={`/${student.id}`} className="btn btn-primary">Details</Link>
                </td>

                <td>
                  <Link to={`editStudent/${student.id}`} className="btn btn-warning">Edit</Link>
                </td>
                <td>
                  <Link to={`deleteStudent/${student.id}`} className="btn btn-danger">Delete</Link>
                </td>
            </tr> )}
        </tbody>
      </table>
    </div>
  )
}
