
  import React,{useState} from 'react'
  import { useDispatch } from 'react-redux';
  import { createCartAction } from '../store/cartsSlice';
  import { useNavigate } from "react-router-dom";
  import { UserForm } from './UserForm'

  
  
  export const Create = () => {
      const btnText ="Add Cart";
      const [cart, setcart] = useState({"id": "",
      "name": "",
      "username": "",
      "email": "",
      "password": "",
      "message": "",
      "confirmpassword": ""
     })
      const dispatch=useDispatch();
      const navigate=useNavigate()
      const handleCreate=()=>{
          dispatch(createCartAction(cart))
          navigate("/")
  
          
      }
      const handleChange=(e)=>{//for giving inputs
          let newCarts={...cart}
          newCarts[e.target.name]=e.target.value
          setcart(newCarts)
  
      }
  
    return (    
      <div className="container">
          <UserForm btnText={btnText} cart={cart} handleEvent={handleCreate} handleChangeEvent={handleChange}/>
          
  </div>
  
    )}
  
  
    