import { React, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const Create = () => {
    const [products, setproducts] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category:"",
        image:""
    });

    let url = "http://localhost:3000/products"

    const navigate = useNavigate()

    const handleChange = e => {
        let newproducts = { ...products };
        newproducts[e.target.name] = e.target.value;
        setproducts(newproducts)
    }

    const addItem = () => {
        axios.post(url, products).then(() => {
            console.log("Data added successfully")
            navigate('/')
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





                <button type="button" className='btn btn-primary' onClick={addItem} >Add Item</button>

            </form>
        </div>
    )
}
