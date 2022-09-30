import axios from 'axios'
import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

    const [data, setdata] = useState({
        id: "",
        userid: "",
        title: "",
        Complete: ""
    })
    let url = "/"

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
                    <label for="name" className="form-label">Userid</label>
                    <input type="name" name='userid' value={data.userid} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label">Title</label>
                    <input type="email" name='title' value={data.title} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="body" className="form-label">complete</label>
                    <input type="body" name='complete' value={data.Complete} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <button type="submit" onClick={addData} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}