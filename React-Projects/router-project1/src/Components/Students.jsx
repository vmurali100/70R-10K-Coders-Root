import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Addstudent } from "./Addstudent";
export const Students = () => {
    const [studets, setstudets] = useState([])
  useEffect(() => {
    let url = "http://localhost:3201/user";
    axios.get(url).then((res) => {
      console.log(res.data);
      setstudets(res.data)
    });
  }, []);

  return (
    <div className="container">


<div className="container" >
<li className="btn btn-primary">
<Link to="/Addstudent" className="nav-link " >
                    Add student
                  </Link>
                  </li>
</div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
            {studets.map((student,i)=> <tr key={i}>
                <td>{student.id}</td>
                <td>{student.studentname}</td>
                <td>{student.username}</td>
                <td>{student.email}</td>
                {/* <td><button className="btn btn-primary" type="button">Details</button></td> */}
            <td><Link to="/Userdetails" className="btn btn-primary" >
                  Details
                  </Link></td>
            
            </tr> )}
        </tbody>
      </table>
    </div>
  );
};
