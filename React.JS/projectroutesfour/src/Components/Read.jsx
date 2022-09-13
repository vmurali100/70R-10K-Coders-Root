import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export const ReadCart = () => {
    const [carts, setcarts] = useState([])

    let url = " http://localhost:3201/items"

    useEffect(()=>{ 
        axios.get(url).then((response)=>{
            localStorage.setItem("Items",JSON.stringify(response.data))
            setcarts(response.data)
        })
    },[])
  return (
    <div className='container'>
        <table className='table'>
             <thead>
                <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Details</th>
                </tr>
             </thead>
             <tbody>
                {carts.map((car,i)=>{
                    return <tr key={i}>
                         <td>{car.id}</td>
                         <td>{car.userId}</td>
                         <td>
                            <Link className='btn btn-warning' to={`/EditCart/${car.id}`}>Edit</Link>
                         </td>
                         <td>
                            <Link className='btn btn-danger' to={`/DeleteCart/${car.id}`}>Delete</Link>
                         </td>
                         <td>
                            <Link className='btn btn-primary' to={`/CartDetail/${car.id}`}>Details</Link>
                         </td>
                    </tr>
                })}
             </tbody>
        </table>
    </div>
  )
}
