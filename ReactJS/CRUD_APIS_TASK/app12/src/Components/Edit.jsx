import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const Edit = () => {
    const urlObj = useParams()

    let url ="http://localhost:4013/calenders/"

    const data = JSON.parse(localStorage.getItem("calenders"))
    const result = data.find((std)=> std.id == urlObj.id)
    console.log(urlObj)
    // console.log(data)
    const [calender, setcalender] = useState(result)
    const navigate = useNavigate()

    
    const handleChange =(e)=>{
        let newCalenders={...calender}
        newCalenders[e.target.name]=e.target.value
        setcalender(newCalenders)
        
     }
    const UpdateCalender=()=>{
        axios.put(url+urlObj.id,calender).then(()=>{
            navigate("/")
        })
    }
    return (
        <div className='container'>
        <form>
        <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="id" className="form-control" name="id" value={calender.id}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            
            <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
          <input type="username" className="form-control"  name="username" value={calender.username}  onChange={(e)=>{handleChange(e)}}/>

            </div>
           
            
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password </label>
                <input type="password" className="form-control"  name="password" value={calender.password}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="emailaddress" className="form-label">EmailAddress </label>
                <input type="emailaddress" className="form-control"  name="emailaddress" value={calender.emailaddress}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="dateofbirth" className="form-label">Dateofbirth </label>
                <input type="dateofbirth" className="form-control"  name="dateofbirth" value={calender.dateofbirth}  onChange={(e)=>{handleChange(e)}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="height" className="form-label">Height </label>
                <input type="height" className="form-control"  name="height" value={calender.height}  onChange={(e)=>{handleChange(e)}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="weight" className="form-label">Weight </label>
                <input type="weight" className="form-control"  name="weight" value={calender.weight}  onChange={(e)=>{handleChange(e)}}/>
            </div>
            
            
            

            <button type="button" className='btn btn-primary' onClick={UpdateCalender}>Add</button>

    
    </form>
    </div>
      )}
      


