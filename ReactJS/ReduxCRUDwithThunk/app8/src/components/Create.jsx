import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { createCrt } from '../CartsSlice'
import {CrtsForm} from "./CrtsForm"

export const Create = () => {
  const [crt, setcrt] = useState({
    id:"",
    userId:"",
    date:"",
    products:{
      productId:"",
      quantity:""
    }
  })
  const dispatch =useDispatch()
  const btnTxt= "Add"

  const handlechangeEvent=(e)=>{
 let nwcrt = {...crt};
 nwcrt[e.target.name] = e.target.value;
 setcrt(nwcrt)
 }

 const handleEvent=()=>{
  dispatch(createCrt(crt))
 }

  return (
    <div>
      <CrtsForm crt={crt} btnTxt={btnTxt} handlechangeEvent={handlechangeEvent} handleEvent={handleEvent}/>
    </div>
  )
}
