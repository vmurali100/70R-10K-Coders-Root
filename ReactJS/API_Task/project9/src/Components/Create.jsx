import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

    const [product, setproduct] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category:""
    })
    let url = "http://localhost:3009/products/"

    const navigate = useNavigate()

    const handleChange = (e) => {
        let newProduct = { ...product }
        newProduct[e.target.name] = e.target.value
        setproduct(newProduct)
    }
    const addUser = () =>{
        axios.post(url,product).then(()=>{
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
                <button type="submit" onClick={addUser} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
