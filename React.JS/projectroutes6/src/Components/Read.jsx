import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Read = () => {

  const [albums, setAlbums] = useState([])

  let url = "http://localhost:3201/albums"

  useEffect(()=>{
    axios.get(url).then((response)=>{
      localStorage.setItem("albums",JSON.stringify(response.data));
      setAlbums(response.data);
    })
  },[])



  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>USER ID</th>
            <th>ID</th>
            <th>TITLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
             {albums.map((alb,i)=>{
              return <tr key={i} >
                           <td>{alb.userId}</td>
                           <td>{alb.id}</td>
                           <td>{alb.title}</td>
                           <td>
                            <Link className="btn btn-warning" to={`/Edit/${alb.id}`}>Edit</Link>
                           </td>
                           <td>
                            <Link className="btn btn-danger" to={`/Delete/${alb.id}`}>Delete</Link>
                           </td>
                           <td>
                            <Link className="btn btn-primary" to={`/Details/${alb.id}`}>Details</Link>
                           </td>
              </tr>
             })}
        </tbody>

      </table>
      

    </div>
  )
}
