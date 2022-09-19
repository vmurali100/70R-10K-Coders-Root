import React,{useState} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios"

export const Edit = () => {
   const urlObj= useParams();
   let url="http://localhost:4009/todo/"



  const info = JSON.parse(localStorage.getItem("Todos"))
  const result = info.find((std)=> std.id == urlObj.id)
  console.log(urlObj)


  const [todo, settodo] = useState(result)
  const navigate= useNavigate()



  const UpdateTodo=()=>{
    axios.put(url+urlObj.id,todo).then(()=>{
      navigate("/")
    })

  }
  const handleChange=(e)=>{
    let newTodos={...todo}
   newTodos[e.target.name]=e.target.value
   settodo(newTodos)

}
return (
    <div className='container'>
    <form>
    <label htmlFor=''>ID :</label>
       <input type="text" name="id" value={todo.id} onChange={(e)=>{handleChange(e)}} /> <br/>
       <label htmlFor=''>UserId :</label>
       <input type="text" name="userId" value={todo.userId} onChange={(e)=>{handleChange(e)}} /> <br/>
       <label htmlFor="">Title :</label>
       <input type="text" name="title"value={todo.title} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">Completed :</label>
       <input type="text" name="completed"value={todo.completed} onChange={(e)=>{handleChange(e)}}/> <br/>
       
       

       <button type="button" className='btn btn-primary' onClick={UpdateTodo}>Add</button>


</form>
</div>
  )}
    
