import React from 'react'
import {Link} from 'react-router-dom'

export const Form = ({todo,btnText,handleEvent,handleChangeEvent}) => {
  return (
    <div className='container'>

    <form>

        <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input type="text" className="form-control" name="id" value={todo.id} onChange={(e)=>{handleChangeEvent(e)}}  />
        </div>

        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" name="title" value={todo.title} onChange={(e)=>{handleChangeEvent(e)}}  />
        </div>

        <div className="mb-3">
            <label htmlFor="completed" className="form-label">Completed</label>
            <input type="text" className="form-control" name="completed" value={todo.completed} onChange={(e)=>{handleChangeEvent(e)}}   />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
    
        <Link to="/" className='btn btn-primary' style={{marginLeft:"30px"}}>Cancel</Link>

    </form>

</div>
  )
}
