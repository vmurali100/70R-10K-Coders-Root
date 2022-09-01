import React, { Component } from 'react'

export default class Form3class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:{
            username:"",
            password:"",
            emailaddress:"",
            dateofbirth:"",
            height:"",
            weight:""
        }
      }
    }
      handleChange=(e)=>{
        console.log(e.target.value)
        var inputname = e.target.name 
       var newPerson ={...this.state.person}
        newPerson[inputname]=e.target.value 
        this.setState({person:newPerson})
        
    }
    handleSubmit=()=>{
        console.log(this.state.person)
    }
    
    styles={
        fontsyle:"bold",
        color:"blue"
      }
  render() {
    return (
      <div>
        <h1 style={this.styles}>REGISTRATION FORM</h1>
        <form >
            <label htmlFor="username">User Name</label>
            <input type="text" name='username' value={this.state.person.username} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" name='password' value={this.state.person.password} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="emailaddress">Email Address</label>
            <input type="text" name='emailaddress' value={this.state.person.emailaddress} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="dateofbirth">Date Of Birth</label>
            <input type="text" name='dateofbirth' value={this.state.person.dateofbirth} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="height">Height</label>
            <input type="text" name='height' value={this.state.person.height} onChange={(e)=>{this.handleChange(e)}}/>
            <br />
            <label htmlFor="weight">Weight</label>
            <input type="text" name='weight' value={this.state.person.weight} onChange={(e)=>{this.handleChange(e)}}/>
<br />
            <button onClick={this.handleSubmit} type="button">Add User</button>
        </form>
      </div>
    )
  }
}
