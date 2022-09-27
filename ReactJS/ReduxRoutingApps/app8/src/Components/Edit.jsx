import React,{useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {CartsForm} from './CartsForm'
import axios from 'axios'

export const Edit = () => {
  const btnTxt="Update"
  let url="http://localhost:3305/FakeCarts/";
  let objurl=useParams();
  const navigate=useNavigate();

  let carts = JSON.parse(localStorage.getItem("FakeCarts"));
  let newcrt = carts.find((crt)=>crt.id == objurl.id);
  const [cart, setcart] = useState(newcrt)
  

  const handlechange=(e)=>{
    let newcart={...cart};
    newcart[e.target.name]= e.target.value;
    setcart(newcart);
  }
  const handleEvent=()=>{
    axios.put(url+objurl.id,cart).then(()=>{
      navigate('/')
    })
  }
  return (
    <div>
      <CartsForm  btnTxt={btnTxt} cart={cart} handlechange={handlechange} handleEvent={handleEvent}/>
    </div>
  )
}
