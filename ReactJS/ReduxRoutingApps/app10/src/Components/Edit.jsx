import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { DataForm } from './DataForm';

export const Edit = () => {
  let url="http://localhost:3201/filltext1/"
  let btnTxt="Update";
  const navigate=useNavigate();
  const param=useParams();
  const data = JSON.parse(localStorage.getItem("Filltext1"));
  let info = data.find((mymem)=> mymem.id == param.id)
  const [mem, setmem] = useState(info)

  const handlechange=(e)=>{
    let newmem = {...mem};
    newmem[e.target.name] = e.target.value;
    setmem(newmem)
  }

  const handleAddressChange=(e)=>{
    let address = {...mem.address}
    address[e.target.name] = e.target.value;
    let newMem= {...mem}
    newMem.address = address;
    setmem(newMem)
  }

  const handleEvent =()=>{
    axios.put(url+param.id,mem).then(()=>{
      navigate('/Filltext1')
    })
  }
  return (
    <div>
      <DataForm btnTxt={btnTxt} mem={mem} handlechange={handlechange} handleEvent={handleEvent} handleAddressChange={handleAddressChange} />
    </div>
  )
}
