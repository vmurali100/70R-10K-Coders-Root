import axios from 'axios'
import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

    const [data, setdata] = useState({
        id: "",
        name: "",
        email: "",
        body: ""
    })
    let url = "http://localhost:3005/comments/"

    const navigate = useNavigate()

    const handleChange = (e) => {
        let newData = { ...data }
        newData[e.target.name] = e.target.value
        setdata(newData)
    }
    const addData = () =>{
        axios.post(url,data).then(()=>{
            navigate("/")
        })
    }
    return (
        <div>
  
          
            <form>
                <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="id" name='id' value={data.id} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="name" name='name' value={data.name} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" name='email' value={data.email} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="body" className="form-label">Body</label>
                    <input type="body" name='body' value={data.body} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <button type="submit" onClick={addData} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}