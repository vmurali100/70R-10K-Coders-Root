import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({btnText,user,handleChangeEvent,handleEvent}) => {
    return (
        <div className='container'>
        <form>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="text" className="form-control" name="id" value={user.id} onChange={(e) => { handleChangeEvent(e) }} />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={user.email} onChange={(e) => { handleChangeEvent(e) }} />
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="username" value={user.username} onChange={(e) => { handleChangeEvent(e) }} />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => { handleChangeEvent(e) }} />
            </div>

            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" value={user.phone} onChange={(e) => { handleChangeEvent(e) }} />
            </div>



            <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

            <Link to="/" className='btn btn-primary' style={{ marginLeft: "30px" }}>Cancel</Link>
        
        </form>
    
    </div >
  )
}
