import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Edit = () => {

  const objUrl = useParams()

  let url = "http://localhost:3000/filltext/"

  const info = JSON.parse(localStorage.getItem("filltext"));

  const result = info.find((inf) => inf.id == objUrl.id)

  const [filltext, setfilltext] = useState(result)

  const navigate = useNavigate()

  const handleChange = e => {
    let newFilltext = { ...filltext };
    newFilltext[e.target.name] = e.target.value;
    setfilltext(newFilltext)
  }

  const updateData = () => {

    axios.put(url + objUrl.id, filltext).then(() => {
      navigate("/")
    })

  }

  return (
    <div>
      <form>

      <div className="mb-3">
                    <label for="id" className="form-label">ID : </label>
                    <input type="text" className="form-control" name="id" value={filltext.id} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="fname" className="form-label">First Name : </label>
                    <input type="text" className="form-control" name="fname" value={filltext.fname} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="lname" className="form-label">Last Name : </label>
                    <input type="text" className="form-control" name="lname" value={filltext.lname} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="tel" className="form-label">Telephone : </label>
                    <input type="text" className="form-control" name="tel" value={filltext.tel} onChange={(e) => { handleChange(e) }} />
                </div>

                

                <div className="mb-3">
                    <label for="address" className="form-label">Address : </label>
                    <input type="text" className="form-control" name="address" value={filltext.address} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="city" className="form-label">City : </label>
                    <input type="text" className="form-control" name="city" value={filltext.city} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="state" className="form-label">State : </label>
                    <input type="text" className="form-control" name="state" value={filltext.state} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="zip" className="form-label">ZIP code : </label>
                    <input type="text" className="form-control" name="zip" value={filltext.zip} onChange={(e) => { handleChange(e) }} />
                </div>

                

        <button type="button" className='btn btn-primary' onClick={updateData} >Update Data</button>

      </form>
    </div>
  )
}
