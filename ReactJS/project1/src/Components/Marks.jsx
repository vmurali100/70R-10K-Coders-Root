import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

export const Marks = () => {
  let url="http://localhost:3203/marks";
  const [mark, setmark] = useState({
    id:"",
    name:"",
    email:"",
    marks1:"",
  });
  const [marks, setmarks] = useState([]);

  useEffect(()=>{getDataFromServer() },[]);
  const handleform =(e)=>{
    let newmark={...mark};
    newmark[e.target.name] = e.target.value;
    setmark(newmark);
  }
  const getForm=()=>{
    document.querySelector(".formContainer").style.display= "block";
  }
  const addEntries =()=>{
    axios.post(url,mark).then(()=>{
      console.log("added new entry");
      getDataFromServer();
      clearform();

    })
  }
  const clearform=()=>{
    setmark({
      id:"",
      name:"",
      email:"",
      marks1:"",
    })

  }
  const getDataFromServer=()=>
        axios.get(url).then((response)=>{
            setmarks(response.data)
        })
  return (
    <div className='container'>
      <button type="button" onClick={getForm}>Add New Entries</button>
       <div className='formContainer'>
        <h6>Please add your new Entries</h6>
        <form action="">
          <label htmlFor="">ID:</label>
          <input type="text" id="id" value={mark.id} name="id"  onChange={(e)=>{handleform(e)}} /> <br/>
          <label htmlFor="">Name:</label>
          <input type="text" id="name" value={mark.name} name="name" onChange={(e)=>{handleform(e)}} /> <br/>
          <label htmlFor="">Email:</label>
          <input type="text" id="email" value={mark.email} name="email" onChange={(e)=>{handleform(e)}} /> <br/>
          <label htmlFor="">Marks:</label>
          <input type="text" id="marks1" value={mark.marks1} name="marks1" onChange={(e)=>{handleform(e)}} /> <br/>
          <button type="button" onClick={addEntries}>Add</button>
        </form>
       </div>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mark1</th>
              <th>Details</th>
            </tr>
            </thead>
            <tbody>
              {marks.map((m,i)=>{
                  return <tr key={i}>
                    <td>{m.id}</td>
                    <td>{m.name}</td>
                    <td>{m.email}</td>
                    <td>{m.marks}</td>
                    <td><Link to={`/marks/${m.id}`} className="btn btn-primary"> Details</Link></td>
                  </tr>
              })}
            </tbody>          
        </table>
      </div>
    </div>
  )
}
