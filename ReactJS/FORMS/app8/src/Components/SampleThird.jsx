import React,{useState} from 'react';

export const SampleThird = () => {
    const [info, setinfo] = useState({name:"",username:"",email:"",password:"",confirmpassword:"",message:""})

     const handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newinfo ={...info}//creating an copy of object
        newinfo[inputname]=e.target.value
        setinfo(newinfo)

     }
     const handleSend=()=>{
        console.log(info)
    }
         
  return (
    <div>
        <h2>Bootstrap 4 Form Validation Demo</h2>
       <form>
           <label htmlFor='name'>Name :</label>
           <input type="text" name="name" value={info.name} onChange={(e)=>{handleChange(e)}} /> <br/>
           <label htmlFor="username">Username :</label>
           <input type="text" name="username"value={info.username} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="email">Email :</label>
           <input type="text" name="email"value={info.email} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password"value={info.password} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor=" confirmpassword"> Confirm Password :</label>
           <input type="text" name=" confirmpassword"value={info.confirmpassword} onChange={(e)=>{handleChange(e)}}/> <br/>
           <label htmlFor="message">Message :</label>
           <input type="text" name="message"value={info.message} onChange={(e)=>{handleChange(e)}}/> <br/>

           <button onClick={handleSend} type="button">SEND</button>

       </form>
    </div>
  )
}
