
  import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createObjectAction } from '../store/objectsSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add Object";
      const [object, setobject] = useState({id:"",albumId:"",title:"",url:"",thumbnailUrl:""})
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const handleCreate=()=>{
          dispatch(createObjectAction(object))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newObjects={...object}
          newObjects[e.target.name]=e.target.value
          setobject(newObjects)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} object={object} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}
  
  
    