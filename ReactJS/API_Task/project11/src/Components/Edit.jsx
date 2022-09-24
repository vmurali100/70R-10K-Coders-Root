import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
   let url="http://localhost:3011/albums/"



  const info = JSON.parse(localStorage.getItem("users"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [album, setalbum] = useState(result)
  const navigate= useNavigate()



  const UpdateAlbum=()=>{
    axios.put(url+urlObj.id,album).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newPhotos={...album}
   newPhotos[e.target.name]=e.target.value
   setalbum(newPhotos)

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
                                   

       <button type="button" className='btn btn-primary' onClick={UpdateAlbum}>Update</button>


</form>
</div>
  )}
