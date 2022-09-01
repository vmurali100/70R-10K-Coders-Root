import React, { Component } from 'react'

export default class Class_Form4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      person:  {name:"",username:"",email:"",password:"",confirmpassword:"",message:""}
         
      }
    }
    handleChange=(e)=>{
        // console.log(e.target.value)
        var inputname =e.target.name
        var newPerson ={...this.state.person}
        newPerson[inputname]=e.target.value
        this.setState({person:newPerson})


     }
     handleSend=()=>{
        console.log(this.state.person)
    }
  render() {
    return (
      <div>
        <h2> Class Bootstrap 4 Form Validation Demo</h2>
       <form>
           <label htmlFor='name'>Name :</label>
           <input type="text" name="name" placeholder="name" value={this.state.person.name} onChange={(e)=>{this.handleChange(e)}} /> 
           <br/>
           <br/>
           <label htmlFor="username">Username :</label>
           <input type="text" name="username"  placeholder="username" value={this.state.person.username} onChange={(e)=>{this.handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="email">Email :</label>
           <input type="text" name="email" placeholder="email" value={this.state.person.email} onChange={(e)=>{this.handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password" placeholder="password" value={this.state.person.password} onChange={(e)=>{this.handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor=" confirmpassword"> Confirm Password :</label>
           <input type="text" name=" confirmpassword" placeholder="confirmpassword" value={this.state.person.confirmpassword} onChange={(e)=>{this.handleChange(e)}}/> 
           <br/>
           <br/>
           <label htmlFor="message">Message :</label>
           <input type="text" name="message" placeholder="message" value={this.state.person.message} onChange={(e)=>{this.handleChange(e)}}/> 
           <br/>
           <br/>

           <button onClick={this.handleSend} type="button">SEND</button>

       </form>
      </div>
    )
  }
}