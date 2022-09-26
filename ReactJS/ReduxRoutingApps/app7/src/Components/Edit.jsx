import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {ProdForm} from './ProdForm'

export const Edit = () => {
  let url='http://localhost:3301/FakeProd/';
  let objurl=useParams();
  const btnTxt="Update";
  const navigate = useNavigate()
  const info = JSON.parse(localStorage.getItem('FakeProducts'))
  let newselcted = info.find((myprod)=>myprod.id == objurl.id)
  const [prod, setprod] = useState(newselcted)
  const handlechange=(e)=>{
    let newprod = {...prod};
    newprod[e.target.name]= e.target.value;
    setprod(newprod)
  }

  const handleEvent=()=>{
    axios.put(url+objurl.id,prod).then(()=>{
      navigate('/products')
    })
  }



  return (
    <div>
      <ProdForm btnTxt={btnTxt} handlechange={handlechange} prod={prod} handleEvent={handleEvent}/>
    </div>
  )
}
