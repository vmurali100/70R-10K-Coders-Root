import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllCarts } from '../store/cartsSlice'
import { useNavigate } from "react-router-dom";



export const Carts = () => {
     const cartDetails=useSelector((state)=>state.carts);//for accessing state
     
   console.log(cartDetails.carts)
   localStorage.setItem('carts',JSON.stringify(cartDetails.carts))


   const dispatch = useDispatch();
   const navigate= useNavigate()


   const getcarts=()=>{
    dispatch(getAllCarts());
   }
   
   useEffect(()=>{
        getcarts()
   },[])
   const handleDelete=(cart)=>{
    navigate(`delete/${cart.id}`)
  }
  const handleEdit=(cart)=>{
    navigate(`edit/${cart.id}`)
  }
  return (
      <div className='container'>
          <table class="table table-dark table-striped">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Message</th>
                <th>Confirm password</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartDetails.carts.map((cart,i)=>(
              <tr key={i}>
    
                <td>{cart.id}</td>
                <td>{cart.name}</td>
                <td>{cart.username}</td>
                <td>{cart.email}</td>
                <td>{cart.password}</td>
                <td>{cart.message}</td>
                <td>{cart.confirmpassword}</td>

                <td><button className='btn btn-warning' onClick={()=>{handleEdit(cart)}}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={()=>{handleDelete(cart)}}>Delete</button></td>
             </tr>))}
            </tbody>
            </table>
      
        </div>
      )
    
      
    }
    