import React, { Component } from 'react'

export default class SampleFourClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        user:{username:"",password:"",emailaddress:"",dateofbirth:"",height:"",weight:""}
         
      }
    }
    handleChange=(e)=>{//synthetic element
        console.log(e.target.value)//to read element
        var inputname =e.target.name
        var newuser ={...this.state.user}//creating an copy of object
        newuser[inputname]=e.target.value
        this.setState({user:newuser})


     }
     handleSubmit=()=>{
        console.log(this.state.user)
    }
  render() {
    return (
      <div>
        <form>
           
           <label htmlFor="username">Username :</label>
           <input type="text" name="username"value={this.state.user.username} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="password">Password :</label>
           <input type="text" name="password"value={this.state.user.password} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="emailaddress">Email Address :</label>
           <input type="text" name="email"value={this.state.user.emailaddress} onChange={(e)=>{this.handleChange(e)}}/> <br/>
           <label htmlFor="dateofbirth">Date of Birth:</label> 
            <input type="text" name="dateofbirth" value={this.state.user.dateofbirth} onChange={(e)=>{this.handleChange(e)}} /><br/>
            <label htmlFor="height">Height :</label> 
            <input type="text" name="height" value={this.state.user.height} onChange={(e)=>{this.handleChange(e)}} /><br/>
            <label htmlFor="weight">Weight:</label> 
            <input type="text" name="weight" value={this.state.user.weight} onChange={(e)=>{this.handleChange(e)}} /><br/>
           
           <button onClick={this.handleSubmit} type="button">SUBMIT</button>

       </form>
      </div>
    )
  }
}