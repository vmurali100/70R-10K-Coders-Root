import React,{useEffect,useState} from 'react'
import axios from "axios";
export const Students = () => {
    const [student, setstudent] = useState({
        "id": "",
        "name": "",
        "username": "",
        "email": ""

    })
    const [students, setstudents] = useState([])
    const handleChange = (e) => {
        let newStudent = { ...student };
        newStudent[e.target.name] = e.target.value;
        setstudent(newStudent)
    }
    const handleSubmit = () => {
        console.log(student)
        let newStudents = [...students]
        newStudents.push(student)
        setstudents(newStudents)
        clearForm()
    }
    const { id, name, username, email } = student
    const clearForm = () => {
        setstudent({
            "id": "",
            "name": "",
            "username": "",
            "email": ""
        })
    }
    useEffect(() => {
      let url= "http://localhost:3000/students"
      axios.get(url).then(res=>{
        console.log(res.data)
        setstudents(res.data)
      })
    }, [])
    
  return (
    <div className='container'>
         <button type="button" onClick={handleSubmit} className='btn btn-primary'>Add Student</button>
        <form>
            <label htmlFor="">ID</label>
            <input type="text" name="id" value={id} onChange={(e) => { handleChange(e) }} /> <br />
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={name} onChange={(e) => { handleChange(e) }} /> <br />
            <label htmlFor="">UserName</label>
            <input type="text" name="username" value={username} onChange={(e) => { handleChange(e) }} /> <br />
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={email} onChange={(e) => { handleChange(e) }} /> <br />
           <button type='button' onClick={handleSubmit}>Add User</button>
           
        </form>
      
        <table className="table">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>UserName</th>
      <th>Email</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student,i)=><tr key={i}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.username}</td>
        <td>{student.email}</td>
        <td><button type="button" className='btn btn-primary'>Details</button></td>
    </tr>
    )}
    <th></th>
  </tbody>
 
</table>
    </div>
  )
}
