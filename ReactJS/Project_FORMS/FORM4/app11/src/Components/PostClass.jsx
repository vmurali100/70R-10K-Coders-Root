import React, { Component } from 'react'

export default class PostClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      info:  {name:"",username:"",email:"",password:"",confirmpassword:"",message:""}
         
      }
    }
    handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newinfo ={...this.state.info}//creating an copy of object
        newinfo[inputname]=e.target.value
        this.setState({info:newinfo})


     }
     handleSend=()=>{
        console.log(this.state.info)
    }
  render() {
    return (
      <div>
        <h2>Bootstrap 4 Form Validation Demo</h2>
       <form>
           <label htmlFor='name'>Name :</label>
           <input type="text" name="name" value={this.state.info.name} onChange={(e)=>{this.handleChange(e)}} /> <br/>
           <label htmlFor="username">Username :</label>
           <input type="text" name="username"value={this.state.info.username} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="email">Email :</label>
           <input type="text" name="email"value={this.state.info.email} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password"value={this.state.info.password} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor=" confirmpassword"> Confirm Password :</label>
           <input type="text" name=" confirmpassword"value={this.state.info.confirmpassword} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="message">Message :</label>
           <input type="text" name="message"value={this.state.info.message} onChange={(e)=>{this.handleChange(e)}}/> <br/>

           <button onClick={this.handleSend} type="button">SEND</button>

       </form>
      </div>
    )
  }
}
