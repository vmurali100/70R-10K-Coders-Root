import React from 'react'

export const UsersForm = ({btntxt, user, handleChange, handleEvent }) => {
  return (
    <div className='container'>
    <form>
    <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Id :</label>
  <div className="col-sm-10">
    <input type="text"  className="form-control" name="id" id="id" value={user.id} onChange={(e)=>{handleChange(e)}} />
  </div>
</div>
<div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Name :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="name" id="name" value={user.name} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-2 col-form-label">Username :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="username" id="username" value={user.username} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">Email :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="email" id="email" value={user.email} onChange={(e)=>{handleChange(e)}}/>
</div>  
</div>
<button type="button" className='btn btn-primary' onClick={handleEvent}>{btntxt}</button>
</form>
  </div>
  )
}
