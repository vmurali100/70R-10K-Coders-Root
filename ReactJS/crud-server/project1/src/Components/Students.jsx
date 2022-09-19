import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export const Students = () => {
    let url="http://localhost:3201/students";
    const [student, setstudent] = useState({
        id: "",
        sname: "",
        username: "",
        email: "",
    })
    const [students, setstudents] = useState([]);
    useEffect(() => {getDataFromServer()
    },[]);
    
    const handlechange = (e) => {
        var input = e.target.name;
        var newPerson = { ...student };
        newPerson[input] = e.target.value;
        setstudent(newPerson);
    }
    // const handleSubmit = () => {
    //     // console.log(user);
    //     let newusers = [...students];
    //     newusers.push(student);
    //     console.log(students);
    //     setstudents(newusers);
    //     clearform();
    // }
    
    const addStudent=()=>{
        axios.post(url,student).then(()=>{
            console.log("user added successfully")
            clearform();
            getDataFromServer();
           
        })
      }
      const clearform = () => {
        setstudent({
            id: "",
            sname: "",
            username: "",
            email: "",
        })
    }
    // const {id, sname, username, email} = {student};
   
    const getDataFromServer=()=>
        axios.get(url).then((response)=>{
            setstudents(response.data);
            localStorage.setItem("Students", JSON.stringify(response.data))
        })
      
    

    const handleForm =()=>{
        document.querySelector(".formContainer").style.display ="block";
      }

return (
    
    <div className='container'>
        
        <button className='btn btn-primary' onClick={()=>{handleForm(true)}} >Add Student</button>
        <table className="table">
  <thead>
    <tr>
      <th >ID</th>
      <th >Name</th>
      <th >Username</th>
      <th >Email</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
   {students.map((std,i)=> {
    return <tr key={i}>
        <td>{std.id}</td>
        <td>{std.sname}</td>
        <td>{std.username}</td>
        <td>{std.email}</td>
        {/* <td><button type="button" className='btn btn-primary'>Details</button></td> */}
        <td><Link to={`/students/${std.id}`} className ='btn btn-primary'> Details</Link>
        </td>
     </tr>

})}
  </tbody>
</table>


            
            <form className='formContainer'>
            <h2>HTML Form</h2><hr />
                <label >ID:</label>
                <input type="text" name="id" value={student.id} onChange={(e) => { handlechange(e) }} /> <br />
                <label >Name:</label>
                <input type="text" name="sname" value={student.sname} onChange={(e) => { handlechange(e) }} /> <br />
                <label >Username:</label>
                <input type="text" name="username" value={student.username} onChange={(e) => { handlechange(e) }} /> <br />
                <label >Email:</label>
                <input type="text" name="email" value={student.email} onChange={(e) => { handlechange(e) }} /> <br />
                
                <button type="button" onClick={addStudent}>SUBMIT</button>
                
            </form>
        </div>
   
);
};



// import React, { useEffect,useState } from "react";
// import axios, { Axios } from "axios";

// export const Students = () => {
   

//     let url="http://localhost:3201/students";

//     const [student, setstudent] = useState({
//         id : "",
//         sname : "",
//         username : "",
//         email : "",
//         // phone : "",
//         // website : ""
//     });

//     const [students, setstudents] = useState([])

//     useEffect(() => {getDataFromServer()},[]);

//   const handleChange=(e)=>{
//     let newStudent = {...student}
//     newStudent[e.target.name] = e.target.value
//     setstudent(newStudent)
//   };

//   const addStudent=()=>{
//     axios.post(url,student).then(()=>{
//         console.log("user added successfully")
//         clearform();
//         getDataFromServer();
       
//     })
//   };

//   const getDataFromServer=()=>{
//     axios.get(url).then((response)=>{
//         setstudents(response.data)
//     })
//   }

//   const clearform=()=>{
//     setstudent({
//         id : "",
//         sname : "",
//         username : "",
//         email : "",
//         // phone : "",
//         // website : ""
//     })
//   }

//   return (
//     <div className="container">

//         <button type="button" onClick={addStudent} className="btn btn-primary">Add Student</button>
//         <form>

//             <label htmlFor="id">ID :</label>
//             <input type="text" name="id" value={student.id} onChange={(e)=>{handleChange(e)}} /> <br/>
            
//             <label htmlFor="name">Name :</label>
//             <input type="text" name="sname" value={student.sname} onChange={(e)=>{handleChange(e)}} /> <br/>

//             <label htmlFor="username">Username :</label>
//             <input type="text" name="username" value={student.username} onChange={(e)=>{handleChange(e)}} /> <br/>

//             <label htmlFor="email">Email :</label>
//             <input type="text" name="email" value={student.email} onChange={(e)=>{handleChange(e)}} /> <br/>

//             {/* <label htmlFor="phone">Phone :</label>
//             <input type="text" name="phone" value={student.phone} onChange={(e)=>{handleChange(e)}} /> <br/>

//             <label htmlFor="website">Website :</label>
//             <input type="text" name="website" value={student.website} onChange={(e)=>{handleChange(e)}} /> <br/> */}

//         </form>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Username</th>
//             <th>Email</th>
//             {/* <th>Phone</th>
//             <th>Website</th> */}
//           </tr>
//         </thead>
//         <tbody>
//             {students.map((std,i)=> {

//             return <tr key={i}>
//                 <td>{std.id}</td>
//                 <td>{std.name}</td>
//                 <td>{std.username}</td>
//                 <td>{std.email}</td>
//                 <td>{std.phone}</td>
//                 <td>{std.website}</td>
//             </tr> }
//             )}
            
//         </tbody>
//       </table>
//     </div>
//   );
// };
