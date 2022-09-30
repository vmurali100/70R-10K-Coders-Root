import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

export const Subjects = () => {
    const [subjects, setsubjects] = useState([])
    const navigate = useNavigate();

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((res) => {
      console.log(res.data);
      localStorage.setItem("Subjects",JSON.stringify(res.data))
      setsubjects(res.data)
    });
  }, []);

  const addSubject = ()=>{
    navigate("/createsubject")
  }
  return (
    <div className="container">
        <button className="btn btn-primary" type="button" onClick={addSubject} > Add subject</button>
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
            {subjects.map((subject,i)=> <tr key={i}>
                <td>{subject.id}</td>
                <td>{subject.name}</td>
                <td>{subject.username}</td>
                <td>{subject.email}</td>
                {/* <td><button type="button" className="btn btn-primary">Details</button></td> */}
                <td>
                  <Link to={`/${subject.id}`} className="btn btn-primary">view</Link>
                </td>

                <td>
                  <Link to={`editsubject/${subject.id}`} className="btn btn-warning">Edit</Link>
                </td>
                <td>
                  <Link to={`deletesubject/${subject.id}`} className="btn btn-danger">Delete</Link>
                </td>
            </tr> )}
        </tbody>
      </table>
    </div>
  );
};
