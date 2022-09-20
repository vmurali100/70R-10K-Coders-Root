import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Display = () => {
  const [shiva, setshiva] = useState([])

  let url = "http://localhost:4002/two/"

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data)
      localStorage.setItem("two", JSON.stringify(res.data))
      setshiva(res.data)
    })

  }, [])
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th >fname</th>
            <th >lname</th>
            <th>tel</th>
            <th>address</th>
            <th>city</th>
            <th>state</th>
            <th>zip</th>
            <th>edit</th>
            <th>delete</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          {shiva.map((ak, i) => {
            return <tr key={i} >
              <td>{ak.id}</td>
              <td>{ak.fname}</td>
              <td>{ak.lname}</td>
              <td>{ak.tel}</td>
              <td>{ak.address}</td>
              <td>{ak.city}</td>
              <td>{ak.state}</td>
              <td>{ak.zip}</td>

              <td>  <Link className="btn btn-warning" to={`/edit/${ak.id}`}>EDIT</Link> </td>

              <td> <Link className='btn btn-danger' to={`/delete/${ak.id}`} >DELETE</Link> </td>

              <td> <Link className='btn btn-primary' to={`/details/${ak.id}`}>DETAILS</Link> </td>

            </tr>

          })}

        </tbody>
      </table>

    </div>
  )
}
