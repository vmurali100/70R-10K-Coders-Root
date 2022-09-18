import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Create = () => {

    const [personal, setpersonal] = useState({
        id: "",
        university: "",
        institute: "",
        branch: "",
        degree:"",
        average:"",
        experience:"",
        website:""
    })
    let url = "http://localhost:3007/scores/"

    const navigate = useNavigate()

    const handleChange = (e) => {
        let newPersonal = { ...personal }
        newPersonal[e.target.name] = e.target.value
        setpersonal(newPersonal)
    }
    const addPersonal = () =>{
        axios.post(url,personal).then(()=>{
            navigate("/")
        })
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="id" name='id' value={personal.id} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="university" className="form-label">university</label>
                    <input type="university" name='university' value={personal.university} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="institute" className="form-label">Institute</label>
                    <input type="institute" name='institute' value={personal.institute} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="branch" className="form-label">branch</label>
                    <input type="branch" name='branch' value={personal.branch} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="degree" className="form-label">degree</label>
                    <input type="degree" name='degree' value={personal.degree} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="average" className="form-label">personal Name</label>
                    <input type="average" name='average' value={personal.average} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="experience" className="form-label">experience</label>
                    <input type="experience" name='experience' value={personal.experience} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="website" className="form-label">personal Name</label>
                    <input type="website" name='website' value={personal.website} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <button type="submit" onClick={addPersonal} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
