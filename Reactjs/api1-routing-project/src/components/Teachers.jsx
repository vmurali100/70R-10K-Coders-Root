import React,{useEffect,useState} from 'react'
import axios from "axios";
export const Teachers = () => {
    const [teachers, setteachers] = useState([])
    useEffect(() => {
      let url="http://localhost:3202/teachers"
      axios.get(url).then(res=>{
        console.log(res.data)
        setteachers(res.data)
      })
    }, [])
  return (
    <div className='container'>
         <button className='btn btn-primary'>Add Teacher</button>
        <table className="table">
  <thead>
    <tr>
    <th>Id</th>
      <th>Name</th>
      <th>UserName</th>
      <th>Email</th>
      
    </tr>
  </thead>
  <tbody>
    {teachers.map((teacher,i)=><tr key={i}>
    <td>{teacher.id}</td>
    <td>{teacher.name}</td>
        <td>{teacher.username}</td>
        <td>{teacher.email}</td>
        
    </tr>
    )}
    <th></th>
  </tbody>
 
</table>
</div>
  )
  }

