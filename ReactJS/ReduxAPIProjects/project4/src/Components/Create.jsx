
  import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createAlbumAction } from '../store/albumsSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add Album";
      const [album, setalbum] = useState({id:"",userId:"",title:""})
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const handleCreate=()=>{
          dispatch(createAlbumAction(album))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newAlbums={...album}
          newAlbums[e.target.name]=e.target.value
          setalbum(newAlbums)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} album={album} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}
  
  