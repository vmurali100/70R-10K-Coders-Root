import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Edit = () => {
  const urlobj = useParams()

  let url = "/"

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
          <label for="userid" className="form-label">userid</label>
          <input type="userid" name='userid' value={data.userid} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>

        <div className="mb-3">
          <label for="Title" className="form-label">Title</label>
          <input type="Title" name='Title' value={data.Title} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>

        <div className="mb-3">
          <label for="Complete" className="form-label">Complete</label>
          <input type="Complete" name='Complete' value={data.Complete} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>
        <button type="submit" onClick={updateData} className="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}