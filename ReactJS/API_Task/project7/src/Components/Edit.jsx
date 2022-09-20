import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Edit = () => {
  const urlobj = useParams()

  let url = "http://localhost:3007/scores/"

  const Info = JSON.parse(localStorage.getItem("users"))
  const result = Info.find((MM) => MM.id == urlobj.id)
  const [personal, setpersonal] = useState(result)
  const navigate = useNavigate()

  const handleChange = (e) => {
    let newPersonal = { ...personal }
    newPersonal[e.target.name] = e.target.value
    setpersonal(newPersonal)
  }
  const clearForm = () => {
    setpersonal({
      id: 1,
      university: "",
      institute: "",
      branch: "",
      degree: "",
      average: "",
      experience: "",
      website: ""

    })
  }
  const updateData = () => {
    axios.put(url + urlobj.id, personal).then(() => {
      navigate("/")
      clearForm();
    })
  }
  return (
    <div>

      <form>
        <div className="mb-3">
          <label for="id" className="form-label">ID</label>
          <input type="id" name='id' value={personal.id} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>
        <div className="mb-3">
          <label for="university" className="form-label">university</label>
          <input type="university" name='university' value={personal.university} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>

        <div className="mb-3">
          <label for="institute" className="form-label">Institute</label>
          <input type="institute" name='institute' value={personal.institute} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>

        <div className="mb-3">
          <label for="branch" className="form-label">branch</label>
          <input type="branch" name='branch' value={personal.branch} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>
        <div className="mb-3">
          <label for="degree" className="form-label">degree</label>
          <input type="degree" name='degree' value={personal.degree} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>

        <div className="mb-3">
          <label for="average" className="form-label">personal Name</label>
          <input type="average" name='average' value={personal.average} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>

        <div className="mb-3">
          <label for="experience" className="form-label">experience</label>
          <input type="experience" name='experience' value={personal.experience} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>
        <div className="mb-3">
          <label for="website" className="form-label">personal Name</label>
          <input type="website" name='website' value={personal.website} onChange={((e) => { handleChange(e) })} className="form-control" />
        </div>

        <button type="submit" onClick={updateData} className="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}
