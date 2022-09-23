import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export const ProductDetails = () => {

    const urlobj = useParams()
    
    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((PS) => PS.id == urlobj.id)
    const [product, setproduct] = useState(result)

  return (
    <div>
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">{product.id}</p>
    <p class="card-text">{product.price}</p>
    <p class="card-text">{product.description}</p>
    <p class="card-text">{product.category}</p>
    <Link to="/" className='btn btn-success'>Go to homepage</Link>
  </div>
</div>
    </div>
  )
}
