import React,{useState} from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const Details = () => {
    let url = 'http://localhost:3305/FakeCarts';
    let objurl=useParams();
    const [cart, setcart] = useState({})

    useEffect(()=>{
        let carts = JSON.parse(localStorage.getItem('FakeCarts'));
        let result = carts.find((crt)=>crt.id == objurl.id)
        setcart(result)
        console.log(result)

    },[])
  return (
    <div className='container'>
      <><Link to={'/'} className="btn btn-primary">Go Back</Link></>
        {Object.keys(cart).length>1 && <div  className='card'> 
            <div className="cardbody">
                <h5 className='card-title'>{cart.id}</h5>
                <p>{cart.userId}</p>
                <p>{cart.date}</p>
                <p>{cart.products.productId}</p>  
                <p>{cart.products.quantity}</p>
                {/* <p>{cart.products.map((prd,i)=> <li key={i}>productId:{prd.productId} Quantity:{prd.quantity}</li >) }</p> */}
              
                
            </div>
             </div>}
           
            
    </div>
  )
}
