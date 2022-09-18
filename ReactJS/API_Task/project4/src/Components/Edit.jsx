import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Edit = () => {
  const urlobj = useParams()

  let url = "http://localhost:3005/comments/"

  const Info = JSON.parse(localStorage.getItem("users"))
  const result = Info.find((MM) => MM.id == urlobj.id)
  const [data, setdata] = useState(result)
  const navigate = useNavigate()

  const handleChange = (e) => {
    let newData = { ...data }
    newData[e.target.name] = e.target.value
    setdata(newData)
  }
  const updateData = () => {
    axios.put(url + urlobj.id, data).then(() => {
      navigate("/")
    })
    
  }
  return (
    <div>

      <form>
        <div className="mb-3">
          <label for="id" className="form-label">ID</label>
          <input type="id" name='id' value={data.id} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="name" name='name' value={data.name} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>

        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" name='email' value={data.email} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>

        <div className="mb-3">
          <label for="body" className="form-label">Body</label>
          <input type="body" name='body' value={data.body} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>
        <button type="submit" onClick={updateData} className="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}
