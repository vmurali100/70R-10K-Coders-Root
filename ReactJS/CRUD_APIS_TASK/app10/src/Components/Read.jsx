import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


export const Read = () => {
    let url="http://localhost:4011/products/"
  const [product, setproduct] = useState([])
  useEffect(()=>{
    axios.get(url).then((res)=>{
        localStorage.setItem("Products", JSON.stringify(res.data))
        setproduct(res.data)
    })
})
  return (
    <div className='container'>

        <table class="table table-success table-striped">

            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {product.map((YY,i)=>{
                    return <tr key = {i}>
                        
                <td>{YY.id}</td>
                <td>{YY.title}</td>
                <td>{YY.price}</td>
                <td>{YY.description}</td>
                <td>{YY.category}</td>
            


                        <td>
                        <Link to={`/details/${YY.id}`} className="btn btn-info">Details</Link>

                        </td>

                        <td>
                        <Link to={`/edit/${YY.id}`} className="btn btn-warning">Edit</Link>
                        </td>

                        <td>

                        <Link to={`/delete/${YY.id}`} className="btn btn-danger">Delete</Link>

                        </td>
                    
                    </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}




