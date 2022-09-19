import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

export const Teachers = () => {
    let url="http://localhost:3202/teachers";
    const [teacher, setteacher] = useState({
      id:"",
      email:"",
      username:"",
      password:"",

    })
    const [teachers, setteachers] = useState([]);

    const getDataFromServer =()=>{
        axios.get(url).then((res)=>{
            // console.log(res.data);
            setteachers(res.data);
            localStorage.setItem("Teachers",JSON.stringify(res.data));
        })
    }

   
    // const {id, email,username,password} = {teacher};

    const handlechange =(e)=>{
      let newteacher ={...teacher};
      newteacher[e.target.name]=e.target.value;
      setteacher(newteacher);
    }

    const addTeacher =() =>{
      axios.post(url,teacher).then(()=>{
        console.log("user added successfully");
        clearform1();
        getDataFromServer();
       
    });

    };
    const clearform1 = () => {
      setteacher({
        id:"",
        email:"",
        username:"",
        password:"",
  
      })
       
    } 
        useEffect(() => {getDataFromServer()}, []);

    const handleForm =()=>{
      document.querySelector(".formContainer").style.display ="block";
    }
  return (
    <div className='container'>
        <button type="button" id="teachersdata" onClick={handleForm}>Add Teacher</button>
        <div>
        <table className="table">
  <thead>
    <tr>
      <th >ID</th>
      <th >Email</th>
      <th >Username</th>
      <th >Password</th>
      <th>Details</th>
      
    </tr>
  </thead>
  <tbody>
   {teachers.map((tch,i)=> {
    return <tr key={i}>
        <td>{tch.id}</td>
        <td>{tch.email}</td>
        <td>{tch.username}</td>
        <td>{tch.password}</td>
        {/* <td><button type="button" className='btn btn-primary'>Details</button></td> */}
        
        <td><Link to={`/teachers/${tch.id}`} className="btn btn-primary">Details</Link></td>
        
     </tr>

})}
  </tbody>
</table>
</div>

    
       <div className='formContainer'>
       <h2>HTML Form</h2><hr />
       <form>
           <label >ID:</label>
           <input type="text" name="id" value={teacher.id} onChange={(e) => { handlechange(e) }} /> <br />
           <label >Email:</label>
           <input type="text" name="email" value={teacher.email} onChange={(e) => { handlechange(e) }} /> <br />
           <label >Username:</label>
           <input type="text" name="username" value={teacher.username} onChange={(e) => { handlechange(e) }} /> <br />
           <label >Password:</label>
           <input type="text" name="password" value={teacher.password} onChange={(e) => { handlechange(e) }} /> <br />
           
           <button type="button" onClick={addTeacher}>SUBMIT</button>
           
       </form>
   </div>
 </div>       
   
  )
}
