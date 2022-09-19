import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

export const DeleteAlbums = () => {
  let url= "http://localhost:3300/Albums/";
  const objurl = useParams();
  const navigate  = useNavigate();
  
  const deleteAlbum=()=>{
    axios.delete(url+objurl.id).then(()=>{
      navigate("/albums")
    })
  }

  return (
    <div>
      <><p>Are you sure you want to delete the album ??</p>
      <button type="button" className='btn btn-danger' onClick={deleteAlbum}>Delete</button></>
    </div>
  )
}
