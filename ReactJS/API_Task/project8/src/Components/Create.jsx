import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

    const [todo, settodo] = useState({
        id: "",
        street: "",
        city: "",
        state: "",
        zipcode:"",
        country:""
    })
    let url = "http://localhost:3008/lists/"

    const navigate = useNavigate()

    const handleChange = (e) => {
        let newTodo = { ...todo }
        newTodo[e.target.name] = e.target.value
        settodo(newTodo)
    }
    const addTodo = () =>{
        axios.post(url,todo).then(()=>{
            navigate("/")
            clearForm();
        })
    }

    const clearForm =()=>{
        settodo({
            id: "",
        street: "",
        city: "",
        state: "",
        zipcode:"",
        country:""
        })
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="id" name='id' value={todo.id} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="street" className="form-label">street</label>
                    <input type="street" name='street' value={todo.street} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="city" className="form-label">City</label>
                    <input type="city" name='city' value={todo.city} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="state" className="form-label">State</label>
                    <input type="state" name='state' value={todo.state} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="zipcode" className="form-label">Zipcode</label>
                    <input type="zipcode" name='zipcode' value={todo.zipcode} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="country" className="form-label">Country</label>
                    <input type="country" name='country' value={todo.country} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <button type="submit" onClick={addTodo} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
