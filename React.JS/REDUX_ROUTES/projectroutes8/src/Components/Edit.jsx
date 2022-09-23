import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Edit = () => {

  const objUrl = useParams()

  let url = " http://localhost:3000/one/"

  const info = JSON.parse(localStorage.getItem("users"));

  const result = info.find((inf) => inf.id == objUrl.id)

  const [users, setusers] = useState(result)

  const navigate = useNavigate()

  const handleChange = e => {
    let newusers = { ...users };
    newusers[e.target.name] = e.target.value;
    setusers(newusers)
  }

  const updateData = () => {

    axios.put(url + objUrl.id, users).then(() => {
      navigate("/")
    })

  }

  return (
    <div>
      <form>

        <div className="mb-3">
          <label for="id" className="form-label">ID : </label>
          <input type="text" className="form-control" name="id" value={users.id} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="fname" className="form-label">First Name : </label>
          <input type="text" className="form-control" name="fname" value={users.fname} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="lname" className="form-label">Last Name : </label>
          <input type="text" className="form-control" name="lname" value={users.lname} onChange={(e) => { handleChange(e) }} />
        </div>

        <button type="button" className='btn btn-primary' onClick={updateData} >Update Data</button>

      </form>
    </div>
  )
}
