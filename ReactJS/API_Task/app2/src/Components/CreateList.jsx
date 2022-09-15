import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateList = () => {

    let url = "http://localhost:3003/lists/"

    const navigate = useNavigate()

    const [listData, setlistData] = useState({
        fname : "",
        lname : ""
    });
    const handleChange=(e)=>{
           let newlistData = {...listData}
           newlistData[e.target.name] = e.target.value
           setlistData(newlistData)
    }
    const addList=()=>{
        axios.post(url,listData).then(()=>{
            navigate("/")
        })
    }

  return (
    <div>
        <form>
            <hr />
            <hr />
            <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Fname :</label>
                    <input type="text" name='fname' value={listData.fname} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>               
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Lname :</label>
                    <input type="text" name='lname' value={listData.lname} onChange={(e)=>{handleChange(e)}} className="form-control"  />
                
                </div>               
                
                <button type="button" className='btn btn-primary' onClick={addList}>Add List</button>               
            </form>
    </div>
  )
}
