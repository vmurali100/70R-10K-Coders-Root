import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link  } from "react-router-dom";

export const Students = () => {
   

    let url = "http://localhost:3002/carts/";

    const [student, setstudent] = useState({
        id : "",
        email : "",
        username : "",
        password: ""
              
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
    axios.get(url).then((res)=>{
        localStorage.setItem("Students",JSON.stringify(res.data))
        setstudents(res.data)
        
    })
  }

  const clearform=()=>{
    setstudent({
      id : "",
      email : "",
      username : "",
      password: ""
    })
  }

  return (
    <div className="container">

        <hr />
        <hr />
        <hr />
        <form>

            {/* <label htmlFor="id">ID :</label>
            <input type="text" name="id" value={student.id} onChange={(e)=>{handleChange(e)}} /> <br/>
            
            <label htmlFor="email">Email :</label>
            <input type="text" name="email" value={student.email} onChange={(e)=>{handleChange(e)}} /> <br/>

            <label htmlFor="username">Username :</label>
            <input type="text" name="username" value={student.username} onChange={(e)=>{handleChange(e)}} /> <br/>

            <label htmlFor="password">Password :</label>
            <input type="text" name="password" value={student.password} onChange={(e)=>{handleChange(e)}} /> <br/> */}

            <button type="button" onClick={addStudent} className="btn btn-primary">Add Data</button>
        </form>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Details</th>
      
          </tr>
        </thead>
        <tbody>
            {students.map((chn,i)=> {

            return <tr key={i}>
                <td>{chn.id}</td>
                <td>{chn.email}</td>
                <td>{chn.username}</td>
                <td>{chn.password}</td>
                {/* <td><button type="button" className="btn btn-primary">Details</button></td> */}
                <td>
                  <Link to={`/${chn.id}`} className="btn btn-primary">Details</Link>
                </td>
            </tr> }
            )}
            
        </tbody>
      </table>
    </div>
  );
};