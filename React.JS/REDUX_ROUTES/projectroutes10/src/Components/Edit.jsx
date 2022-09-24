import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Edit = () => {

  const objUrl = useParams()

  let url = "http://localhost:3000/filltextthree/"

  const info = JSON.parse(localStorage.getItem("filltextthree"));

  const result = info.find((inf) => inf.id == objUrl.id)

  const [filltextthree, setfilltextthree] = useState(result)

  const navigate = useNavigate()

  const handleChange = e => {
    let newfillTextThree = { ...filltextthree };
    newfillTextThree[e.target.name] = e.target.value;
    setfilltextthree(newfillTextThree)
  }

  const updateData = () => {

    axios.put(url + objUrl.id, filltextthree).then(() => {
      navigate("/")
    })

  }

  return (
    <div>
      <form>

        <div className="mb-3">
          <label for="id" className="form-label">ID : </label>
          <input type="text" className="form-control" name="id" value={filltextthree.id} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="email" className="form-label">Email : </label>
          <input type="email" className="form-control" name="email" value={filltextthree.email} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="username" className="form-label">User Name : </label>
          <input type="text" className="form-control" name="username" value={filltextthree.username} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="password" className="form-label">Password: </label>
          <input type="password" className="form-control" name="password" value={filltextthree.password} onChange={(e) => { handleChange(e) }} />
        </div>


        <button type="button" className='btn btn-primary' onClick={updateData} >Update Data</button>

      </form>
    </div>
  )
}
