import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Edit = () => {

  const objUrl = useParams()

  let url = "http://localhost:3000/products/"

  const info = JSON.parse(localStorage.getItem("products"));

  const result = info.find((inf) => inf.id == objUrl.id)

  const [products, setproducts] = useState(result)

  const navigate = useNavigate()

  const handleChange = e => {
    let newproducts = { ...products };
    newproducts[e.target.name] = e.target.value;
    setproducts(newproducts)
  }

  const updateData = () => {

    axios.put(url + objUrl.id, products).then(() => {
      navigate("/")
    })

  }

  return (
    <div>

      <form>

        <div className="mb-3">
          <label for="id" className="form-label">ID : </label>
          <input type="text" className="form-control" name="id" value={products.id} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="title" className="form-label">Title : </label>
          <input type="text" className="form-control" name="title" value={products.title} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="price" className="form-label">Price : </label>
          <input type="text" className="form-control" name="price" value={products.price} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="decription" className="form-label">Description: </label>
          <input type="text" className="form-control" name="description" value={products.description} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="category" className="form-label">Category: </label>
          <input type="text" className="form-control" name="category" value={products.category} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="image" className="form-label">Image: </label>
          <input type="text" className="form-control" name="image" value={products.image} onChange={(e) => { handleChange(e) }} />
        </div>


        <button type="button" className='btn btn-primary' onClick={updateData} >Update Data</button>

      </form>
    </div>
  )
}
