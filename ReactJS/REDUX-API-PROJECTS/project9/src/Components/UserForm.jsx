import React from 'react'
import { Link } from 'react-router-dom'

export const UserForm = ({btnText, handleEvent, handleChangeEvent, item}) => {
  return (
    <div>
        <form>
                
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="id" className="form-control" name="id" value={item.id} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="userid" className="form-label">Userid</label>
                    <input type="userid" className="form-control" name="userid" value={item.userid} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="title" className="form-control" name="title" value={item.title} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <input type="body" className="form-control" name="body" value={item.body} onChange={(e)=>{handleChangeEvent(e)}}/>

                </div>


                <button type="button" className="btn btn-primary" onClick={handleEvent}>{btnText}</button>
                <Link to="/" className="btn btn-primary" style={{marginLeft:"20px"}}>
                Cancel
                </Link>
            </form>
    </div>
  )
}
