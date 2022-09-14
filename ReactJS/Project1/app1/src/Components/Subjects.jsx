import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link  } from "react-router-dom";

export const Subjects = () => {
   

    let url = "http://localhost:3000/details/";

    const [subject, setsubject] = useState({
      id:"",
      fname: "",
      lname: "",
      tel: "",
      address: "",
      city: "",
      state: "",
      zip: ""
   
    });

    const [subjects, setsubjects] = useState([])

    useEffect(() => {getDataFromServer()},[]);

  // const handleChange=(e)=>{
  //   let newStudent = {...subject}
  //   newStudent[e.target.name] = e.target.value
  //   setsubject(newStudent)
  // };

  const addSubject=()=>{
    axios.post(url,subject).then(()=>{
        console.log("user added successfully")
        clearform();
        getDataFromServer();
       
    })
  };

  const getDataFromServer=()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("Subjects",JSON.stringify(res.data))
        setsubjects(res.data)
        
    })
  }

  const clearform=()=>{
    setsubject({
      id:"",
      fname: "",
      lname: "",
      tel: "",
      address: "",
      city: "",
      state: "",
      zip: ""

    })
  }

  return (
    <div className="container">

        <hr />
        <hr />
        <hr />
        <form>
            <button type="button" onClick={addSubject} className="btn btn-primary">Add Data</button>
        </form>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>fname</th>
            <th>lname</th>
            <th>tel</th>
            <th>address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Details</th>

      
          </tr>
        </thead>
        <tbody>
            {subjects.map((sub,i)=> {

            return <tr key={i}>
                <td>{sub.id}</td>

                <td>{sub.fname}</td>
                <td>{sub.lname}</td>
                <td>{sub.tel}</td>
                <td>{sub.address}</td>
                <td>{sub.city}</td>
                <td>{sub.state}</td>
                <td>{sub.zip}</td>

                {/* <td><button type="button" className="btn btn-primary">Details</button></td> */}
                <td>
                  <Link to={`/${sub.id}`} className="btn btn-primary">Details</Link>
                </td>
            </tr> }
            )}
            
        </tbody>
      </table>
    </div>
  );
};