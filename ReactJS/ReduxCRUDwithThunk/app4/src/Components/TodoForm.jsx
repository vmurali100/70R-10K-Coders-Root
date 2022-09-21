import React from 'react'
import { Link } from 'react-router-dom'

export  const TodoForm = ({todo,btntxt,handleChange,handleClick}) => {
  return (
    <div className='container'>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">userId</label>
    <input type="input" className="form-control" id="userId" name="userId"  onChange={(e)=>{handleChange(e)}} value={todo.userId} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Id</label>
    <input type="input" className="form-control"  id="id" name="id"  onChange={(e)=>{handleChange(e)}} value={todo.id}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="input" className="form-control" id="title" name="title"  onChange={(e)=>{handleChange(e)}} value={todo.title} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Completed</label>
    <input type="input" className="form-control" id="completed" name="completed"  onChange={(e)=>{handleChange(e)}} value={todo.completed} aria-describedby="emailHelp"/>
  </div>
  <button type="button" className="btn btn-primary" onClick={handleClick}>{btntxt}</button>
  <Link to={'/'}> <button type="button" className='btn btn-primary'>Cancel</button> </Link>
</form>
    </div>
  )
}
