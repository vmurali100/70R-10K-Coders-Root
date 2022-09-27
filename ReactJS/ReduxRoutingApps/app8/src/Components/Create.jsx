import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartsForm } from './CartsForm';


export const Create = () => {
  const btnTxt = "Add";
  let url='http://localhost:3305/FakeCarts';
  const navigate = useNavigate();
  const [cart, setcart] = useState({
    id:"",
    userId:"",
    date:""
    })

    const handlechange=(e)=>{
      let newcart= {...cart};
      newcart[e.target.name] = e.target.value;
      setcart(newcart);
    }

    const handleEvent=()=>{
      axios.post(url,cart).then(()=>{
        navigate('/')
    })
  }
  

  return (
    <div>
      <CartsForm  btnTxt={btnTxt} handlechange={handlechange} handleEvent={handleEvent} cart={cart}  />
      
    </div>
  )
}
