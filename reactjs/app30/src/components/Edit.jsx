import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const Edit = () => {

  const objurl = useParams()
  let url = "http://localhost:4000/one/"

  const information = JSON.parse(localStorage.getItem("one"))
  const result = information.find((a) => a.id == objurl.id)

  const [das, setdas] = useState(result)

  const navigate = useNavigate()

  const handlechange = (e) => {
    let newdass = { ...das }
    newdass[e.target.name] = e.target.value
    setdas(newdass)

  }

  const handleupdate = () => {
    axios.put(url + objurl.id, das).then(() => {
      navigate("/")
    })
  }


  return (
    <div>
      <form >


        <input type="text" name='id' value={das.id} onChange={(e) => { handlechange(e) }} /> <br />
        <label htmlFor="id">ID</label>

        <label htmlFor="fnmae">FNAME</label>
        <input type="text" name='fname' value={das.fname} onChange={(e) => { handlechange(e) }} /> <br />
        <label htmlFor="lnmae">LNAME</label>
        <input type="text" name='lname' value={das.lname} onChange={(e) => { handlechange(e) }} /> <br />

        <button type='button' className='btn btn-primary' onClick={handleupdate} >UPDATE</button>


      </form>
    </div>
  )
}
