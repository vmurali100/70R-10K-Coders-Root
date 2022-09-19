import axios from 'axios';
import React from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom';

export const DeleteTodos = () => {
  let url = "http://localhost:3207/Todos/"
let objurl = useParams();
let navigate = useNavigate()
  const deleteTodo=(user)=>{
    axios.delete(url+objurl.id).then(()=>{
     navigate("/")
    })
  }
  return (
    <div>
      <>Are you sure you want to delete???
    <Link to={"/"}><button type="button" className='btn btn-danger' onClick={deleteTodo}>Delete</button></Link>
      </>
    </div>
  )
}
