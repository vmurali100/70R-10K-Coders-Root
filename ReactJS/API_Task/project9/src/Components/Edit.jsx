import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Edit = () => {
    const urlobj = useParams()

    let url = "http://localhost:3009/products/"

    const Info = JSON.parse(localStorage.getItem("users"))
    const result = Info.find((PS) => PS.id == urlobj.id)
    const [product, setproduct] = useState(result)
    const navigate = useNavigate()

    const handleChange = (e) => {
        let newProduct = { ...product }
        newProduct[e.target.name] = e.target.value
        setproduct(newProduct)
    }
    const updateProduct=()=>{
        axios.put(url+urlobj.id,product).then(()=>{
            navigate('/')
        })
    }
    return (
        <div>

            <form>
            <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="id" name='id' value={product.id} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="title" className="form-label">title</label>
                    <input type="title" name='title' value={product.title} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="price" className="form-label">price</label>
                    <input type="price" name='price' value={product.price} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="description" className="form-label">description</label>
                    <input type="description" name='description' value={product.description} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="category" className="form-label">category</label>
                    <input type="category" name='category' value={product.category} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <button type="submit" onClick={updateProduct} className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}
