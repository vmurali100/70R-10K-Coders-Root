import React from 'react'
import { Link } from 'react-router-dom'

export const UsersForm = ({btnTxt, user, handleChange, handleEvent }) => {
  return (
    <div>
         <form>

<div className="mb-3">
    <label htmlFor="id" className="form-label">ID : </label>
    <input type="text" className="form-control" name="id" value={user.id} onChange={(e) => { handleChange(e) }} />
</div>

<div className="mb-3">
    <label htmlFor="userId" className="form-label">Email : </label>
    <input type="text" className="form-control" name="email" value={user.email} onChange={(e) => { handleChange(e) }} />
</div>

<div className="mb-3">
    <label htmlFor="date" className="form-label">Username : </label>
    <input type="text" className="form-control" name="username" value={user.username} onChange={(e) => { handleChange(e) }} />
</div>

<div className="mb-3">
    <label htmlFor="productId" className="form-label">Password: </label>
    <input type="text" className="form-control" name="password" value={user.password} onChange={(e) => { handleChange(e) }} />
</div>




<button type="button" className='btn btn-primary' onClick={handleEvent} >{btnTxt}</button>
<Link to={'/'} className='btn btn-primary' style={{marginLeft:"10px"}}>Cancel</Link>

</form>
    </div>
  )
}
