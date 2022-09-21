import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllAlbums } from '../store/albumsSlice'
import { useNavigate } from "react-router-dom";



export const Albums = () => {
     const albumsDetails=useSelector((state)=>state.albums);//for accessing state
     
   console.log(albumsDetails.albums)
   localStorage.setItem('albums',JSON.stringify(albumsDetails.albums))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getalbums=()=>{
    dispatch(getAllAlbums());
   }
   
   useEffect(()=>{
        getalbums()
   },[])
   const handleDelete=(album)=>{
    navigate(`delete/${album.id}`)
  }
  const handleEdit=(album)=>{
    navigate(`edit/${album.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {albumsDetails.albums.map((album,i)=>(
              <tr key={i}>
    
                <td>{album.id}</td>
                <td>{album.userId}</td>
                <td>{album.title}</td>
                
                <td><button className='btn btn-warning' onClick={()=>{handleEdit(album)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(album)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
      
        </div>
      )
    
      
    }
    