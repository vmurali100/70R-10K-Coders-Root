import React,{useState} from 'react'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { createCrt, updateCrt } from '../CartsSlice'
import {CrtsForm} from "./CrtsForm"

export const Edit = () => {
  const objurl= useParams();
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
  const btnTxt= "Update"

  const handlechangeEvent=(e)=>{
 let nwcrt = {...crt};
 nwcrt[e.target.name] = e.target.value;
 setcrt(nwcrt)
 }

 const handleEvent=()=>{
  dispatch(updateCrt(crt))
 }

 useEffect(()=>{
  let newcrt = JSON.parse(localStorage.getItem('ReduxCarts'))
  let mynewcrt = newcrt.find((mynew)=> mynew.id == objurl.id)
  setcrt(mynewcrt)
 },[])

  return (
    <div>
      <CrtsForm crt={crt} btnTxt={btnTxt} handlechangeEvent={handlechangeEvent} handleEvent={handleEvent}/>
    </div>
  )
}