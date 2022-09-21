import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllPhotos } from '../store/photosSlice'
import { useNavigate } from "react-router-dom";



export const Photos = () => {
     const photosDetails=useSelector((state)=>state.photos);//for accessing state
     
   console.log(photosDetails.photos)
   localStorage.setItem('photos',JSON.stringify(photosDetails.photos))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getphotos=()=>{
    dispatch(getAllPhotos());
   }
   
   useEffect(()=>{
        getphotos()
   },[])
   const handleDelete=(photo)=>{
    navigate(`delete/${photo.id}`)
  }
  const handleEdit=(photo)=>{
    navigate(`edit/${photo.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>AlbumId</th>
                <th>Title</th>
                <th>url</th>
                <th>ThumbnailUrl</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {photosDetails.photos.map((photo,i)=>(
              <tr key={i}>
    
                <td>{photo.id}</td>
                <td>{photo.albumId}</td>
                <td>{photo.title}</td>
                <td>{photo.url}</td>
                <td>{photo.thumbnailUrl}</td>



                
                <td><button className='btn btn-warning' onClick={()=>{handleEdit(photo)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(photo)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
      
        </div>
      )
    
      
    }
    