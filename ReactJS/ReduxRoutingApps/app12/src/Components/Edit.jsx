import axios from 'axios'
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Edit = () => {

  const objUrl = useParams()

  let url = "http://localhost:3208/FakeCarts/"

  const info = JSON.parse(localStorage.getItem("carts"));

  const result = info.find((inf) => inf.id == objUrl.id)

  const [carts, setcarts] = useState(result)

  const navigate = useNavigate()

  const handleChange = e => {
    let newcarts = { ...carts };
    newcarts[e.target.name] = e.target.value;
    setcarts(newcarts)
  }

  const updateData = () => {

    axios.put(url + objUrl.id, carts).then(() => {
      navigate("/")
    })

  }

  return (
    <div>

      <form>

        <div className="mb-3">
          <label for="id" className="form-label">ID : </label>
          <input type="text" className="form-control" name="id" value={carts.id} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="userId" className="form-label">User ID : </label>
          <input type="text" className="form-control" name="userId" value={carts.userId} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="date" className="form-label">Date : </label>
          <input type="text" className="form-control" name="date" value={carts.date} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="productId" className="form-label">Product ID: </label>
          <input type="text" className="form-control" name="products.productId" value={carts.products.productId} onChange={(e) => { handleChange(e) }} />
        </div>

        <div className="mb-3">
          <label for="quantity" className="form-label">Quantity: </label>
          <input type="text" className="form-control" name="products.quantity" value={carts.products.quantity} onChange={(e) => { handleChange(e) }} />
        </div>

        <button type="button" className='btn btn-primary' onClick={updateData} >Update Data</button>

      </form>
    </div>
  )
}