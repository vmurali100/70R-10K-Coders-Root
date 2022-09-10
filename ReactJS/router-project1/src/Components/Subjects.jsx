import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
export const Subjects = () => {
  const [subjects, setsubjects] = useState([]);
  useEffect(() => {
    let url = "http://localhost:3000/student";
    axios.get(url).then((res) => {
      console.log(res.data);
      setsubjects(res.data)
    });
  }, []);
  return (
    <div className="container">
<div className="container" >
<li className="btn btn-primary">
<Link to="/Addsubject" className="nav-link " >
                    Add Subject
                  </Link>
                  </li>
</div>
      <table className="table">
        <thead>
          <tr>
           
            <th>Subject Name</th>
            <th>Description</th>
           
          </tr>
        </thead>
        <tbody>
            {subjects.map((subject,i)=> <tr key={i}>
              
                <td>{subject.subjectname}</td>
                <td>{subject.description}</td>
                
            </tr> )}
        </tbody>
      </table>
    </div>

    
  )
}
