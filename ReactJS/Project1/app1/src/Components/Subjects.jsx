
import React from 'react'
import { useEffect,useState } from 'react'
import { Link, useParams } from "react-router-dom";


import axios from 'axios'

export const Subjects = () => {
  const [subjects, setsubjects] = useState([])
  useEffect(()=>{
    let url ="http://filltext.com/?rows=10&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
    axios.get(url).then(res=>{
      console.log(res.data)
      localStorage.setItem("Subjects",JSON.stringify(res.data))
      setsubjects(res.data)
    })

  },[])
  return (
    <div className='container'>
      <table class="table table-striped-columns">
        <thead>
          <tr>
            <th >First Name</th>
            <th >Last Name</th>
            <th>Telephone</th>
            <th >Address</th>
            <th >City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Details</th>

          </tr>
        </thead>
        <tbody>
          {subjects.map((subject,i)=>
          <tr key={i}>
          <td >{subject.fname}</td>
          <td >{subject.lname}</td>
          <td>{subject.tel}</td>
          <td >{subject.address}</td>
          <td >{subject.city}</td>
          <td >{subject.state}</td>
          <td>{subject.zip}</td>
          <td>
              <Link to={`/${subject.id}`} className=" btn btn-primary">Details</Link>
            </td>

         </tr>)}
        </tbody>
  
     </table>
    </div>
  )
}




            
          

