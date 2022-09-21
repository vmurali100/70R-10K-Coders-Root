import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Addteacher } from "./Addteacher";
export const Teachers = () => {
    const [teachers, setteachers] = useState([])
  useEffect(() => {
    let url = "http://localhost:3201/user";
    axios.get(url).then((res) => {
      console.log(res.data);
      setteachers(res.data)
    });
  }, []);

  return (
    <div className="container">


<div className="container" >
<li className="btn btn-primary">
<Link to="/Addteacher" className="nav-link " >
                    Add Teacher
                  </Link>
                  </li>
</div>
      <table className="table">
        <thead>
          <tr>
           
            <th> Teacher Name</th>
            <th>Department</th>
            <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
            {teachers.map((teacher,i)=> <tr key={i}>
               
                <td>{teacher.teachername}</td>
                <td>{teacher.department}</td>
                <td>{teacher.mobileno}</td>
            </tr> )}
        </tbody>
      </table>
    </div>
  );
};
