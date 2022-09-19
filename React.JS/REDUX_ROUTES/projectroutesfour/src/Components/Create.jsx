import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CreateCart = () => {
    const [cart, setcart] = useState({
    id : "",
    userId : ""
    })

    let url = " http://localhost:3201/items"

    const navigate = useNavigate()

    const handleChange=(e)=>{
        let newCart = {...cart}
        newCart[e.target.name] = e.target.value
        setcart(newCart)
    }

    

    const addCart=()=>{
        axios.post(url,cart).then(()=>{
           navigate("/")
        })
    }
  return (
    <div>
        <form>
            <label htmlFor="id">ID:</label>
            <input type="text" name="id" value={cart.id} onChange={handleChange} /> <br/>

            <label htmlFor="userId">UserID:</label>
            <input type="text" name="userId" value={cart.userId} onChange={handleChange} /> <br />

            <button type="button" className='btn btn-primary' onClick={addCart}>Add Cart</button>
        </form>
    </div>
  )
 
  }