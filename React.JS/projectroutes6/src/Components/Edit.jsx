import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Edit = () => {

  const objUrl = useParams()

  let url = " http://localhost:3201/albums/"

  const info = JSON.parse(localStorage.getItem("albums"));

  const result = info.find((inf) => inf.id == objUrl.id)

  const [album, setAlbum] = useState(result)

  const navigate = useNavigate()

  const handleChange = e => {
    let newAlbum = { ...album };
    newAlbum[e.target.name] = e.target.value;
    setAlbum(newAlbum)
  }

  const updateData = () => {

    axios.put(url + objUrl.id, album).then(() => {
      navigate("/")
    })

  }

  return (
    <div>
      <form>

        <div className="mb-3">
          <label for="userId" className="form-label">User ID : </label>
          <input type="text" className="form-control" name="userId" value={album.userId} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="id" className="form-label">ID : </label>
          <input type="text" className="form-control" name="id" value={album.id} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="title" className="form-label">Title : </label>
          <input type="text" className="form-control" name="title" value={album.title} onChange={(e) => { handleChange(e) }} />
        </div>

        <button type="button" className='btn btn-primary' onClick={updateData} >Update Data</button>

      </form>
    </div>
  )
}
