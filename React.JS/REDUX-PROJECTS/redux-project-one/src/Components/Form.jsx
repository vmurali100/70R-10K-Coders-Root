import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({btnText,handleEvent,handleChangeEvent,user}) => {
    console.log(user)
  return (
    <div className="container">

    <form>

        <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input type="text" className="form-control" name="id" value={user.id} onChange={(e)=>{handleChangeEvent(e)}}  />
        </div>

        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={user.name} onChange={(e)=>{handleChangeEvent(e)}}  />
        </div>

        <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" name="username" value={user.username} onChange={(e)=>{handleChangeEvent(e)}}   />
        </div>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={user.email} onChange={(e)=>{handleChangeEvent(e)}}  />
        </div>



        <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
    
        <Link to="/" className='btn btn-primary' style={{marginLeft:"30px"}}>Cancel</Link>
    </form>

</div>
  )
}
