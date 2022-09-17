import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'


export const Create = () => {
  const [comment, setcomment] = useState({id:"",postId:"",name:"",email:""})
  let url="http://localhost:4004/comments/"
  const navigate= useNavigate()
  const handleChange=(e)=>{
    let newComments= {...comment}
    newComments[e.target.name]=e.target.value
    setcomment(newComments)

  }
  const AddComment=()=>{
    axios.post(url,comment).then(()=>{
      navigate('/')
    })

  }

  return (
    <div className='container'>
    <form>
    <label htmlFor=''>ID :</label>
       <input type="text" name="id" value={comment.id} onChange={(e)=>{handleChange(e)}} /> <br/>
       <label htmlFor="">PostId :</label>
       <input type="text" name="postId"value={comment.postId} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">Name :</label>
       <input type="text" name="name"value={comment.name} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">Email :</label>
       <input type="text" name="email"value={comment.email} onChange={(e)=>{handleChange(e)}}/> <br/>
       <label htmlFor="">Body :</label>
       <input type="text" name="body"value={comment.body} onChange={(e)=>{handleChange(e)}}/> <br/>

       <button type="button" className='btn btn-primary' onClick={AddComment}>Add</button>


</form>
</div>
  )
}
