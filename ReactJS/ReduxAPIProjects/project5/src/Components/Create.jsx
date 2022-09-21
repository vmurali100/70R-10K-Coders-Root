
  import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createPhotoAction } from '../store/photosSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add Photo";
      const [photo, setphoto] = useState({id:"",albumId:"",title:"",url:"",thumbnailUrl:""})
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const handleCreate=()=>{
          dispatch(createPhotoAction(photo))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newPhotos={...photo}
          newPhotos[e.target.name]=e.target.value
          setphoto(newPhotos)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} photo={photo} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}
  
  
    