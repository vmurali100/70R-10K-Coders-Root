import React from 'react'
import { Link } from 'react-router-dom'

export const Form = ({ btnText, comment, handleEvent, handleChangeEvent }) => {
  return (
    <div className='container'>
      <form>

        <div className="mb-3">
          <label htmlFor="postId" className="form-label">POST ID</label>
          <input type="text" className="form-control" name="postId" value={comment.postId} onChange={(e) => { handleChangeEvent(e) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="id" className="form-label">ID</label>
          <input type="text" className="form-control" name="id" value={comment.id} onChange={(e) => { handleChangeEvent(e) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={comment.name} onChange={(e) => { handleChangeEvent(e) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="thumbnailUrl" className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={comment.email} onChange={(e) => { handleChangeEvent(e) }} />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">Body</label>
          <input type="text" className="form-control" name="body" value={comment.body} onChange={(e) => { handleChangeEvent(e) }} />
        </div>



        <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>

        <Link to="/" className='btn btn-primary' style={{ marginLeft: "30px" }}>Cancel</Link>
      </form>

    </div>
  )
}
