import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

export const Create = () => {

  const [album, setAlbum] = useState({
    id : "",
    userId : "",
    title : ""
  });

  const navigate = useNavigate()

  let url = "http://localhost:3201/albums"

  const handleChange = e => {
    let newAlbum = {...album}
    newAlbum[e.target.name] = e.target.value;
    setAlbum(newAlbum);
  };

  const addAlbum=()=>{
    axios.post(url,album).then(()=>{
           navigate("/")
           
    })
  }


  return (
    <div>
      <form>

        <div className="mb-3">
          <label for="userId" className="form-label">User ID : </label>
          <input type="text" className="form-control" name="userId" value={album.userId} onChange={(e)=>{handleChange(e)}} />
        </div>

        <div className="mb-3">
          <label for="id" className="form-label">ID : </label>
          <input type="text" className="form-control" name="id" value={album.id} onChange={(e)=>{handleChange(e)}} />
        </div>

        <div className="mb-3">
          <label for="title" className="form-label">Title : </label>
          <input type="text" className="form-control" name="title" value={album.title} onChange={(e)=>{handleChange(e)}} />
        </div>

        <button type="button" className='btn btn-primary' onClick={addAlbum} >Add Data</button>

      </form>
    </div>
  )
}
