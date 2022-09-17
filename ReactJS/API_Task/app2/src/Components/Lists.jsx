import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Lists = () => {
  const [lists, setlists] = useState([])
  let url = "http://localhost:3003/lists/"

   useEffect(()=>{
    axios.get(url).then((res)=>{
      localStorage.setItem("lists",JSON.stringify(res.data))
      console.log(res.data)
      setlists(res.data)
    })
   },[])

  return (
    <div className='container'>
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>

          </tr>
        </thead>
        <tbody>
          {lists.map((Lst,i)=>{
            return <tr key={i}>
              <td>{Lst.id}</td>
              <td>{Lst.fname}</td>
              <td>{Lst.lname}</td>
              <td>
                <Link to={`/EditList/${Lst.id}`} className="btn btn-warning" >Edit</Link>
              </td>
              <td>
                <Link to={`/DeleteList/${Lst.id}`} className="btn btn-danger" >Delete</Link>
              </td>
              <td>
                <Link to={`/ListData/${Lst.id}`} className="btn btn-primary" >Details</Link>
              </td>
            </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}
