import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios"
export const Create = () => {

    const [album, setalbum] = useState({
        "id":"" ,
        "userId":"",
        "title": ""
   })
    const navigate= useNavigate()
    let url="http://localhost:3011/albums/"



    const handleChange=(e)=>{
        let newAlbums={...album}
        newAlbums[e.target.name]=e.target.value
        setalbum(newAlbums)
    }
    const AddAlbum=()=>{
        axios.post(url,album).then(()=>{
            navigate('/')
        })

    }
    return (
        <div className='container'>
        <form>
        <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={album.id}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="userId" className="form-label">userId</label>
          <input type="userId" className="form-control"  name="userId" value={album.userId}  onChange={(e)=>{handleChange(e)}}/>

            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="title" className="form-control"  name="title" value={album.title}  onChange={(e)=>{handleChange(e)}}/>

            </div>

    
           <button type="button" className='btn btn-primary' onClick={AddAlbum}>Add</button>
    
    
    </form>
    </div>
      )}
