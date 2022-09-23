
  import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createProductAction } from '../store/productsSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add Product";
      const [product, setproduct] = useState({"id":"" ,
      "title": "",
      "price": "",
      "description": "",
      "category": ""
     })
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const handleCreate=()=>{
          dispatch(createProductAction(product))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newProducts={...product}
          newProducts[e.target.name]=e.target.value
          setproduct(newProducts)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} product={product} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}
  
  
    