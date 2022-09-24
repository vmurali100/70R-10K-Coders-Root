import { React, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export const Create = () => {
    const [items, setitems] = useState({
        id: "",
        fname:"",
        lname:"",
        tel:"",
        address:"",
        city:"",
        state:"",
        zip:""
    });

    let url = " http://localhost:3000/filltext"

    const navigate = useNavigate()

    const handleChange = e => {
        let newItems = { ...items };
        newItems[e.target.name] = e.target.value;
        setitems(newItems)
    }

    const addItem = () => {
        axios.post(url,items).then(()=>{
           console.log("Data added successfully")
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
                    <label for="fname" className="form-label">First Name : </label>
                    <input type="text" className="form-control" name="fname" value={items.fname} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="lname" className="form-label">Last Name : </label>
                    <input type="text" className="form-control" name="lname" value={items.lname} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="tel" className="form-label">Telephone : </label>
                    <input type="text" className="form-control" name="tel" value={items.tel} onChange={(e) => { handleChange(e) }} />
                </div>

                

                <div className="mb-3">
                    <label for="address" className="form-label">Address : </label>
                    <input type="text" className="form-control" name="address" value={items.address} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="city" className="form-label">City : </label>
                    <input type="text" className="form-control" name="city" value={items.city} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="state" className="form-label">State : </label>
                    <input type="text" className="form-control" name="state" value={items.state} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="zip" className="form-label">ZIP code : </label>
                    <input type="text" className="form-control" name="zip" value={items.zip} onChange={(e) => { handleChange(e) }} />
                </div>

                <button type="button" className='btn btn-primary' onClick={addItem} >Add Item</button>

            </form>
        </div>
    )
}
