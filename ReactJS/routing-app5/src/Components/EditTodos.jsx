import axios from 'axios'
import React,{useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

export const EditTodos = () => {
  let url="http://localhost:3207/Todos/";
  const objurl=useParams();
  console.log(objurl)
  const navigate = useNavigate();

  const info = JSON.parse(localStorage.getItem("Todos"));  
  const selectedcmnt = info.find((editObj)=>editObj.id == objurl.id)
  const [editObj, seteditObj] = useState(selectedcmnt);

  const handleChange=(e)=>{
   let neweditObj= {...editObj};
   neweditObj[e.target.name] = e.target.value;
   seteditObj(neweditObj);
  }

  const updateTodo =()=>{
    axios.put(url+objurl.id,editObj).then(()=>{
      navigate("/")
    })
  }
  return (
    <div className='container'> <h3>Please make necessary updates to your data</h3>
    <hr/>
  <form>
    <div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">UserId :</label>
  <div className="col-sm-10">
    <input type="text"  className="form-control" name="userId" id="userid" value={editObj.userId} onChange={(e)=>{handleChange(e)}} />
  </div>
</div>
<div className="mb-3 row">
  <label  className="col-sm-2 col-form-label">Id :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="id" id="inputPassword" value={editObj.id} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-2 col-form-label">Title :</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" name="title" id="inputPassword" value={editObj.title} onChange={(e)=>{handleChange(e)}}/>
  </div>
</div>
<div className="mb-3 row">
<label  className="col-sm-2 col-form-label">Completed :</label>
<div className="col-sm-10">
  <input type="text" className="form-control" name="completed" id="inputPassword" value={editObj.completed} onChange={(e)=>{handleChange(e)}}/>
</div>  
</div>

<button type="button" className='btn btn-primary' onClick={updateTodo}>Update </button>
</form>

  </div>
  )
}