import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({btnText,posts,handleChangeEvent,handleEvent}) => {
  return (
    <div className='container'>
        <form>

<div className="mb-3">
  <label htmlFor="id" className="form-label">ID</label>
  <input type="text" className="form-control" name="id" value={posts.id} onChange={(e) => { handleChangeEvent(e) }} />
</div>

<div className="mb-3">
  <label htmlFor="title" className="form-label">TITLE</label>
  <input type="text" className="form-control" name="title" value={posts.title} onChange={(e) => { handleChangeEvent(e) }} />
</div>

<div className="mb-3">
  <label htmlFor="body" className="form-label">BODY</label>
  <input type="text" className="form-control" name="body" value={posts.body} onChange={(e) => { handleChangeEvent(e) }} />
</div>



<button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

<Link to="/" className='btn btn-primary' style={{ marginLeft: "30px" }}>Cancel</Link>
'
</form>
    </div>
  )
}
