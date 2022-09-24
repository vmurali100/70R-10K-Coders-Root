import React from 'react'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getcartsData } from '../CartsSlice';
import {Link,useNavigate,useParams} from 'react-router-dom';

export const Crts = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const objurl = useParams();
  const getcartsdata = useSelector((state)=>state.carts)
  console.log(getcartsdata.carts)
  localStorage.setItem('ReduxCarts',JSON.stringify(getcartsdata.carts))

  

  useEffect(()=>{
    dispatch(getcartsData())
  },[])
  return (
    <div className='container'>
      <Link to={`/create`} type="button" className='btn btn-primary blink'>CreateNew</Link>
      <div className="allCrts">
      {getcartsdata.carts.map((crt,i)=> <div key={i} className="alldetails">
        <p>{crt.id}</p>
        <p>{crt.userId}</p>
        <p>{crt.date}</p>
       <p>{crt.products.quantity}</p>
       <p> <Link to={`/edit/${crt.id}`}> <button type="button" >Edit</button></Link> </p>
       <p> <Link to={`/delete/${crt.id}`}> <button type="button" >Delete</button></Link> </p>
      </div>)}
      </div>
    </div>
  )
}
