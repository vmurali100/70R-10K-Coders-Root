import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

export const Teachers = () => {
   

    let url = "http://localhost:3000/lists/";

    const [teacher, setteacher] = useState({
        tfname:"",
        tlname:""
              
    });

    const [teachers, setteachers] = useState([])

    useEffect(() => {getDataFromServer()},[]);

  const handleChange=(e)=>{
    let newTeacher = {...teacher}
    newTeacher[e.target.name] = e.target.value
    setteacher(newTeacher)
  };

  const addStudent=()=>{
    axios.post(url,teacher).then(()=>{
        console.log("user added successfully")
        clearform();
        getDataFromServer();
       
    })
  };

  const getDataFromServer=()=>{
    axios.get(url).then((response)=>{
        setteachers(response.data)
    })
  }

  const clearform=()=>{
    setteacher({
        tfname:"",
        tlname:""
    })
  }

  return (
    <div className="container">

        
        <form>

            <label htmlFor="tfname">Tfname :</label>
            <input type="text" name="tfname" value={teacher.tfname} onChange={(e)=>{handleChange(e)}} /> <br/>
            
            <label htmlFor="tlname">Tlname :</label>
            <input type="text" name="tlname" value={teacher.tlname} onChange={(e)=>{handleChange(e)}} /> <br/>

            

            <button type="button" onClick={addStudent} className="btn btn-primary">Add Data</button>
        </form>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>Tfname</th>
            <th>Tlname</th>
            
      
          </tr>
        </thead>
        <tbody>
            {teachers.map((tec,i)=> {

            return <tr key={i}>
                <td>{tec.tfname}</td>
                <td>{tec.tlname}</td>
                
                
            </tr> }
            )}
            
        </tbody>
      </table>
    </div>
  );
};