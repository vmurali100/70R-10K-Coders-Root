import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const Edit = () => {
    const urlObj = useParams()

    let url ="http://localhost:4003/posts/"

    const data = JSON.parse(localStorage.getItem("users"))
    const result = data.find((std)=> std.id == urlObj.id)
    console.log(urlObj)
    // console.log(data)
    const [user, setuser] = useState(result)
    const navigate = useNavigate()

    
    const handleChange =(e)=>{
        let newUsers={...user}
        newUsers[e.target.name]=e.target.value
        setuser(newUsers)
        
     }
    const UpdateUser=()=>{
        axios.put(url+urlObj.id,user).then(()=>{
            navigate("/")
        })
    }
    return (
        <div className='container'>
        <form>
        <label htmlFor=''>ID :</label>
           <input type="text" name="id" value={user.id} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="">Title :</label>
           <input type="text" name="title"value={user.title} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="">Body :</label>
           <input type="text" name="body"value={user.body} onChange={(e)=>{handleChange(e)}}/> <br/>
    
           <button type="button" className='btn btn-primary' onClick={UpdateUser}>Update</button>
    
    
    </form>
    </div>
      )}
      

// import axios from 'axios'
// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// export const Edit = () => {
//     const urlobj = useParams()

//     let url = ""

//     const Info = JSON.parse(localStorage.getItem("users"))
//     const result = Info.find((MM) => MM.id == urlobj.id)
//     const [user, setuser] = useState(result)
//     const navigate = useNavigate()

//     const handleChange = (e) => {
//         let newUser = { ...user }
//         newUser[e.target.name] = e.target.value
//         setuser(newUser)
//     }
//     const updateUser=()=>{
//         axios.put(url+urlobj.id,user).then(()=>{
//             navigate("/")
//         })
//     }
//     return (
//         <div>

//             <form>
//                 <div className="mb-3">
//                     <label for="id" className="form-label">ID</label>
//                     <input type="id" name='id' value={user.id} onChange={((e) => { handleChange(e) })} className="form-control" />
//                 </div>
//                 <div className="mb-3">
//                     <label for="email1" className="form-label">Email</label>
//                     <input type="email" name='email' value={user.email} onChange={((e) => { handleChange(e) })} className="form-control" />
//                 </div>

//                 <div className="mb-3">
//                     <label for="username" className="form-label">User Name</label>
//                     <input type="username" name='username' value={user.username} onChange={((e) => { handleChange(e) })} className="form-control" />
//                 </div>

//                 <div className="mb-3">
//                     <label for="password" className="form-label">Password</label>
//                     <input type="password" name='password' value={user.password} onChange={((e) => { handleChange(e) })} className="form-control" />
//                 </div>
//                 <button type="submit" onClick={updateUser} className="btn btn-primary">Submit</button>

//             </form>
//         </div>
//     )
// }
