import { React, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export const Create = () => {
    const [fillTextThree, setfillTextThree] = useState({
        id: "",
        email:"",
        username:"",
        password:""
    });

    let url = "http://localhost:3000/filltextthree"

    const navigate = useNavigate()

    const handleChange = e => {
        let newfillTextThree = { ...fillTextThree };
        newfillTextThree[e.target.name] = e.target.value;
        setfillTextThree(newfillTextThree)
    }

    const addItem = () => {
        axios.post(url,fillTextThree).then(()=>{
           console.log("Data added successfully")
           navigate('/')
        })

    }
    return (
        <div>
            <form>

                <div className="mb-3">
                    <label for="id" className="form-label">ID : </label>
                    <input type="text" className="form-control" name="id" value={fillTextThree.id} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label">Email : </label>
                    <input type="email" className="form-control" name="email" value={fillTextThree.email} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="username" className="form-label">User Name : </label>
                    <input type="text" className="form-control" name="username" value={fillTextThree.username} onChange={(e) => { handleChange(e) }} />
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">Password: </label>
                    <input type="password" className="form-control" name="password" value={fillTextThree.password} onChange={(e) => { handleChange(e) }} />
                </div>

                

                

                <button type="button" className='btn btn-primary' onClick={addItem} >Add Item</button>

            </form>
        </div>
    )
}
