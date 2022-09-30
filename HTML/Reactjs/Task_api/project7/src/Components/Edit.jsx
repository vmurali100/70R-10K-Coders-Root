import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Edit = () => {
    const urlobj = useParams()

    let url = "http://localhost:3003/lists/"

    const Info = JSON.parse(localStorage.getItem("lists"))
    const result = Info.find((MM) => MM.id == urlobj.id)
    const [list, setlist] = useState(result)
    const navigate = useNavigate()

    const handleChange = (e) => {
        let newList = { ...list }
        newList[e.target.name] = e.target.value
        setlist(newList)
    }
    const updateList=()=>{
        axios.put(url+urlobj.id,list).then(()=>{
            navigate("/")
        })
    }
    return (
        <div>

            <form>
              
                <div className="mb-3">
                    <label for="id" className="form-label">ID</label>
                    <input type="id" name='id' value={list.id} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="fname" className="form-label">fname</label>
                    <input type="fname" name='fname' value={list.fname} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="lname" className="form-label">lname</label>
                    <input type="lname" name='lname' value={list.lname} onChange={((e) => { handleChange(e) })} className="form-control" />
                </div>

              
                <button type="submit" onClick={updateList} className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}