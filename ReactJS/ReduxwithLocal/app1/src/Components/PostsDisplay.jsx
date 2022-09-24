import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import {Link, useNavigate,useParams} from 'react-router-dom'
import { addPost } from '../PostsSlice'

export const PostsDisplay = () => {
  const dispatch = useDispatch();
    const [post, setpost] = useState({
        userId:"",
        id:"",
        title:"",
        body:"",
    })
    const allpostsData = useSelector((state)=> state.Posts)
    console.log(allpostsData)

    const handleChangeEvent=(e)=>{
        let newpost = {...post};        
        newpost[e.target.name] = e.target.value;
        setpost(newpost);
    }

    const handleAdd=(post)=>{
      dispatch(addPost(post))
    }

    const handleUpdate=()=>{

    }
    
  return (
    <div className='container'>
        <table className="table table-success table-striped">
            <thead>
                <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {allpostsData.map((pst,i)=> <tr key={i}>
                    <td>{pst.userId}</td>
                    <td>{pst.id}</td>
                    <td>{pst.title}</td>
                    <td>{pst.body}</td>
                    <td>  <button type="button" className='btn btn-info'>Edit
                    </button></td>
                    <td>  <button type="button" className='btn btn-danger'>Delete
                    </button></td>
                </tr>)}
            </tbody>
</table>

<div className='container'>
    <form>
  <div className="mb-3">
    <label  className="form-label">UserId:</label>
    <input type="email" className="form-control" id="userId" value={post.userId} onChange={(e)=>{handleChangeEvent(e)}} name='userId' />    
  </div>
  <div className="mb-3">
    <label  className="form-label">Id:</label>
    <input type="input" className="form-control" name="id" value={post.id} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Title:</label>
    <input type="input" className="form-control" name="title" value={post.title} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Body:</label>
    <input type="input" className="form-control" name="body" value={post.body} onChange={(e)=>{handleChangeEvent(e)}} />
  </div>
  
  <button type="button" className="btn btn-primary" onClick={(post)=>{handleAdd(post)}} >Add</button>
  <button type="button" className="btn btn-primary" onClick={handleUpdate} >Update</button>
  
</form>
    </div>
    
    </div>
  )
}
