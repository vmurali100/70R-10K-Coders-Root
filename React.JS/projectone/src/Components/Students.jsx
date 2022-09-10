import React, { useEffect,useState } from "react";
import axios, { Axios } from "axios";

export const Students = () => {
   

    let url = "http://localhost:3000/students/";

    const [student, setstudent] = useState({
        id : "",
        name : "",
        username : "",
        email : "",
        phone : "",
        website : ""
    });

    const [students, setstudents] = useState([])

    useEffect(() => {getDataFromServer()},[]);

  const handleChange=(e)=>{
    let newStudent = {...student}
    newStudent[e.target.name] = e.target.value
    setstudent(newStudent)
  };

  const addStudent=()=>{
    axios.post(url,student).then(()=>{
        console.log("user added successfully")
        clearform();
        getDataFromServer();
       
    })
  };

  const getDataFromServer=()=>{
    axios.get(url).then((response)=>{
        setstudents(response.data)
    })
  }

  const clearform=()=>{
    setstudent({
        id : "",
        name : "",
        username : "",
        email : "",
        phone : "",
        website : ""
    })
  }

  return (
    <div className="container">

        <button type="button" onClick={addStudent} className="btn btn-primary">Add Student</button>
        <form>

            <label htmlFor="id">ID :</label>
            <input type="text" name="id" value={student.id} onChange={(e)=>{handleChange(e)}} /> <br/>
            
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" value={student.name} onChange={(e)=>{handleChange(e)}} /> <br/>

            <label htmlFor="username">Username :</label>
            <input type="text" name="username" value={student.username} onChange={(e)=>{handleChange(e)}} /> <br/>

            <label htmlFor="email">Email :</label>
            <input type="text" name="email" value={student.email} onChange={(e)=>{handleChange(e)}} /> <br/>

            <label htmlFor="phone">Phone :</label>
            <input type="text" name="phone" value={student.phone} onChange={(e)=>{handleChange(e)}} /> <br/>

            <label htmlFor="website">Website :</label>
            <input type="text" name="website" value={student.website} onChange={(e)=>{handleChange(e)}} /> <br/>

        </form>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
            {students.map((std,i)=> {

            return <tr key={i}>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.username}</td>
                <td>{std.email}</td>
                <td>{std.phone}</td>
                <td>{std.website}</td>
            </tr> }
            )}
            
        </tbody>
      </table>
    </div>
  );
};
