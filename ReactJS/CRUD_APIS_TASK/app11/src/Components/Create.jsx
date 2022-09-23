import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


export const Create = () => {
    const [cart, setcart] = useState({"id": "",
    "name": "",
    "cartname": "",
    "email": "",
    "password": "",
    "message": "",
    "confirmpassword": ""
   })
    let url ="http://localhost:4012/cart/"
    const navigate =useNavigate();



   const handleChange =(e)=>{
   let newCarts={...cart}
   newCarts[e.target.name]=e.target.value
   setcart(newCarts)
   
}

    const  AddCart=()=>{
        axios.post(url, cart).then((res) => {
        console.log(res.data);
        setcart(res.data);
        navigate('/')
    })
}
    
  return (
    <div className='container'>
    <form>
    <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={cart.id}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="name" className="form-control"  name="name" value={cart.name}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
          <input type="username" className="form-control"  name="username" value={cart.username}  onChange={(e)=>{handleChange(e)}}/>

            </div>
           
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email </label>
                <input type="email" className="form-control"  name="email" value={cart.email}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password </label>
                <input type="password" className="form-control"  name="password" value={cart.password}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message </label>
                <input type="message" className="form-control"  name="message" value={cart.message}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="confirmpassword" className="form-label">Confirm password </label>
                <input type="confirmpassword" className="form-control"  name="confirmpassword" value={cart.confirmpassword}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <button type="button" className='btn btn-primary' onClick={AddCart}>Add</button>



</form>
</div>
  )}