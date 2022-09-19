import { React, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export const Create = () => {
    const [items, setitems] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: ""
    });

    let url = "http://localhost:3201/items"

    const navigate = useNavigate()

    const handleChange = e => {
        let newItems = { ...items };
        newItems[e.target.name] = e.target.value;
        setitems(newItems)
    }

    const addItem = () => {
        axios.post(url,items).then(()=>{
           console.log("item added successfully")
           navigate('/')
        })

    }
    return (
        <div>
            <form>

                <div className="mb-3">
                    <label for="id" className="form-label">ID : </label>
                    <input type="text" className="form-control" name="id" value={items.id} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="title" className="form-label">Title : </label>
                    <input type="text" className="form-control" name="title" value={items.title} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="price" className="form-label">Price : </label>
                    <input type="text" className="form-control" name="price" value={items.price} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="description" className="form-label">Description : </label>
                    <input type="text" className="form-control" name="description" value={items.description} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="category" className="form-label">Category : </label>
                    <input type="text" className="form-control" name="category" value={items.category} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="image" className="form-label">Image : </label>
                    <input type="text" className="form-control" name="image" value={items.image} onChange={(e) => { handleChange(e) }} />
                </div>

                <button type="button" className='btn btn-primary' onClick={addItem} >Add Item</button>

            </form>
        </div>
    )
}
